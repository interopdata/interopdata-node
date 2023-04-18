import * as crypto from "crypto";

export interface WebhookEvent {
  dataset: string;
  customerId: string;
  uploadURL: string;
}

class Webhooks {
  private static signatureRegexp = /^t=([0-9]*),v1=([a-zA-Z0-9]*)$/;

  public constructor() {}

  public constructEvent(
    /**
     * Raw text body payload received from Interopdata.
     */
    payload: string | Buffer,

    /**
     * Value of the `Interopdata-Signature` header from Interopdata.
     * Typically a string.
     *
     * Note that this is typed to accept an array of strings
     * so that it works seamlessly with express's types,
     * but will throw if an array is passed in practice
     * since express should never return this header as an array,
     * only a string.
     */
    header: string | Array<string>,

    /**
     * Your Webhook Signing Secret for this endpoint (e.g., 'whsec_...').
     * You can get this [in your dashboard](https://dashboard.interopdata.com/).
     */
    secret: string,

    /**
     * Seconds of tolerance on timestamps.
     */
    tolerance = 5 * 60 * 1_000
  ): WebhookEvent {
    if (Array.isArray(header)) {
      throw new Error("header must be a string");
    }

    const regexpRes = Webhooks.signatureRegexp.exec(header)!;
    if (!regexpRes) {
      throw new Error("invalid signature");
    }

    const [, timestampStr, signature] = regexpRes;
    const timestamp = parseInt(timestampStr, 10);
    if (Number.isNaN(timestamp)) {
      throw new Error("invalid signature");
    }

    const now = Math.floor(Date.now() / 1_000);
    const delay = now - timestamp;

    if (delay < 0) {
      throw new Error("invalid signature");
    }

    if (delay > tolerance) {
      throw new Error("invalid signature");
    }

    const payloadStr =
      typeof payload === "string" ? payload : payload.toString("utf-8");

    const signedPayload = `${timestamp}.${payloadStr}`;

    const exepctedSigntaure = crypto
      .createHmac("sha256", secret)
      .update(signedPayload)
      .digest("hex");

    if (exepctedSigntaure !== signature) {
      throw new Error("invalid signature");
    }

    return JSON.parse(payloadStr) as WebhookEvent;
  }
}

export default Webhooks;
