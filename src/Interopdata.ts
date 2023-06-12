import {
  Configuration,
  ConfigurationParameters,
  CreateCustomerDto,
  CreateDataExportDto,
  CreateDataExportLinkDto,
  DefaultApi,
} from "./generated-sources";
import Webhooks from "./Webhooks";

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

  public customer = {
    retrieve: () => {
      return this.customerRetrieve();
    }
  };

  public dataExportLinks = {
    create: (createDataExportLinkDto: CreateDataExportLinkDto) => {
      return this.createDataExportLink({ createDataExportLinkDto });
    }
  };

  public oauth = {
    token: (code: string, ip?: string) => {
      return this.createOAuthToken({
        createAccessTokenDto: {
          grantType: "authorization_code",
          code,
          ip,
        }
      });
    }
  }

  public dataExports = {
    create: (createDataExportDto: CreateDataExportDto) => {
      return this.createDataExport({ createDataExportDto });
    },
    list: () => {
      return this.dataExportsList();
    },
    retrieve: (dataExportId: string) => {
      return this.dataExportRetrieve({ id: dataExportId });
    },
  };

  public dataExportDatasets = {
    retrieve: (dataExportDatasetId: string) => {
      return this.dataExportDatasetRetrieve({ id: dataExportDatasetId });
    },

    download: (dataExportDatasetId: string) => {
      return this.createDataExportDatasetDownload({ id: dataExportDatasetId });
    },

    seal:(dataExportDatasetId: string) => {
      return this.sealDataExportDataset({ id: dataExportDatasetId });
    },
  };

  public projects = {
    retrieve: () => {
      return this.projectRetreive();
    }
  };

  public locales = {
    list: () => {
      return this.localesList();
    }
  };

  public webhooks = new Webhooks();
}

export default Interopdata;
