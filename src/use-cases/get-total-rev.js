import server from "../config/server";

export const getTotalRev = async () =>
  server.get(process.env.REACT_APP_API_BASE_URL + "/users/totalRev/");
