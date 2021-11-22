import packageInfo from "../../package.json";

export const environment = {
  production: true,
  host: "https://server-dw-prueba.herokuapp.com",
  version: packageInfo.version,
};
