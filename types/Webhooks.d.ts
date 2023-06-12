/// <reference types="node" />
export interface WebhookEvent {
    customerId: string;
    dataset: {
        id: string;
        slug: string;
    };
    dataExportId: string;
}
declare class Webhooks {
    private static signatureRegexp;
    constructor();
    constructEvent(
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
    tolerance?: number): WebhookEvent;
}
export default Webhooks;
