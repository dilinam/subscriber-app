import server from "../config/server";

export const editUser = (userId) =>
  server.get(process.env.REACT_APP_API_BASE_URL + "/", userId);
