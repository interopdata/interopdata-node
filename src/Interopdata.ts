import { Configuration, DefaultApi } from './generated-sources';

class Interopdata {
  private api: DefaultApi;

  public constructor(projectSecret: string) {
    const configuration = new Configuration({
      basePath: "http://localhost:3000",
      accessToken(name, scopes) {
        switch (name) {
          case "project-secret":
            return projectSecret;
        }
        return "";
      },
    });

    this.api = new DefaultApi(configuration);
  }

  public async datasets() {
    const datasets = this.api.datasets();
    return datasets;
  }
}

export default Interopdata;
