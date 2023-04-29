import server from "../config/server";

export const getRevenueUser = (userId) =>
  server.get(process.env.REACT_APP_API_BASE_URL + "/Assets/Revenue/" + userId);
