import Interopdata from './Interopdata.js';
import { ConfigurationParameters } from './generated-sources';

export * from './generated-sources';

export { Interopdata };

export { WebhookEvent } from './Webhooks';

export default (projectSecret: string, config?: ConfigurationParameters) => {
  return new Interopdata(projectSecret, config);
};
