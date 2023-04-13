import {
  Configuration,
  ConfigurationParameters,
  CreateCustomerDto,
  CreateDataExportLinkDto,
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

  public dataExportLinks = {
    create: (createDataExportLinkDto: CreateDataExportLinkDto) => {
      return this.createDataExportLink({ createDataExportLinkDto });
    }
  };

  public oauth = {
    token: (code: string) => {
      return this.createOAuthToken({
        createAccessTokenDto: {
          grantType: "authorization_code",
          code,
        }
      });
    }
  }
}

export default Interopdata;
