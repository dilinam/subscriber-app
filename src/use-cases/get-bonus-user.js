import server from "../config/server";

export const getUserBonus = () =>
  server.get(process.env.REACT_APP_API_BASE_URL + "/users/getuserBonus");
