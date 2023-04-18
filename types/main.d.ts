import Interopdata from './Interopdata.js';
import { ConfigurationParameters } from './generated-sources';
export * from './generated-sources';
export { Interopdata };
export { WebhookEvent } from './Webhooks';
declare const _default: (projectSecret: string, config?: ConfigurationParameters) => Interopdata;
export default _default;
