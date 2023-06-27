import server from "../config/server";

export const getcountRefUser = () =>
  server.get(process.env.REACT_APP_API_BASE_URL + "/getCountRef/1");
