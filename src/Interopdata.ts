import {
  Configuration,
  ConfigurationParameters,
  CreateCustomerDto,
  CreateDataExportDto,
  CreateDataExportLinkDto,
  DefaultApi,
} from "./generated-sources";

class Interopdata extends DefaultApi {
  public constructor(bearerToken: string, config?: ConfigurationParameters) {
    super(
      new Configuration({
        accessToken(name, scopes) {
          switch (name) {
            case "user-token":
            case "project-secret":
              return bearerToken;
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

  public dataExports = {
    create: (createDataExportDto: CreateDataExportDto) => {
      return this.createDataExport({ createDataExportDto });
    }
  };
}

export default Interopdata;
