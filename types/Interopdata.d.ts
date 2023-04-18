import { ConfigurationParameters, CreateCustomerDto, CreateDataExportDto, CreateDataExportLinkDto, DefaultApi } from "./generated-sources";
import Webhooks from "./Webhooks";
declare class Interopdata extends DefaultApi {
    constructor(bearerToken: string, config?: ConfigurationParameters);
    datasets: {
        list: () => Promise<import("./generated-sources").Dataset[]>;
    };
    customers: {
        create: (createCustomerDto: CreateCustomerDto) => Promise<import("./generated-sources").Customer>;
    };
    dataExportLinks: {
        create: (createDataExportLinkDto: CreateDataExportLinkDto) => Promise<import("./generated-sources").DataExportLink>;
    };
    oauth: {
        token: (code: string) => Promise<import("./generated-sources").AccessToken>;
    };
    dataExports: {
        create: (createDataExportDto: CreateDataExportDto) => Promise<void>;
    };
    webhooks: Webhooks;
}
export default Interopdata;
