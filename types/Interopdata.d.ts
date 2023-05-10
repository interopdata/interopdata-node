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
        token: (code: string, ip?: string) => Promise<import("./generated-sources").AccessToken>;
    };
    dataExports: {
        create: (createDataExportDto: CreateDataExportDto) => Promise<void>;
        list: () => Promise<import("./generated-sources").DataExport[]>;
        retrieve: (dataExportId: string) => Promise<import("./generated-sources").DataExport>;
    };
    dataExportDatasets: {
        retrieve: (dataExportDatasetId: string) => Promise<import("./generated-sources").DataExportDataset>;
        download: (dataExportDatasetId: string) => Promise<import("./generated-sources").DataExportDatasetDownload>;
    };
    projects: {
        retrieve: () => Promise<import("./generated-sources").Project[]>;
    };
    locales: {
        list: () => Promise<import("./generated-sources").Locale[]>;
    };
    webhooks: Webhooks;
}
export default Interopdata;
