import packageInfo from "../../package.json";

export const environment = {
  production: true,
  host: "http://192.168.1.4:3000",
  version: packageInfo.version,
};
