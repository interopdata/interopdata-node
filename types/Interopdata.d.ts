import { ConfigurationParameters, CreateCustomerDto, DefaultApi } from "./generated-sources";
declare class Interopdata extends DefaultApi {
    constructor(projectSecret: string, config?: ConfigurationParameters);
    datasets: {
        list: () => Promise<import("./generated-sources").Dataset[]>;
    };
    customers: {
        create: (createCustomerDto: CreateCustomerDto) => Promise<import("./generated-sources").Customer>;
    };
}
export default Interopdata;
