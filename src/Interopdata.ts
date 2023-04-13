import {
  Configuration,
  ConfigurationParameters,
  CreateCustomerDto,
  DefaultApi,
} from "./generated-sources";

class Interopdata extends DefaultApi {
  public constructor(projectSecret: string, config?: ConfigurationParameters) {
    super(
      new Configuration({
        accessToken(name, scopes) {
          switch (name) {
            case "project-secret":
              return projectSecret;
          }
          return "";
        },
        ...config,
      })
    );
  }

  public datasets = {
    list: () => {
      return this.datasetsList();
    },
  };

  public customers = {
    create: (createCustomerDto: CreateCustomerDto) => {
      return this.createCustomer({ createCustomerDto });
    }
  };
}

export default Interopdata;
