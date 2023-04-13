import { ConfigurationParameters, CreateCustomerDto, CreateDataExportLinkDto, DefaultApi } from "./generated-sources";
declare class Interopdata extends DefaultApi {
    constructor(projectSecret: string, config?: ConfigurationParameters);
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
}
export default Interopdata;
