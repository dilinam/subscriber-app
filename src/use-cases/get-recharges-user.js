import server from "../config/server";

export const getRechagesUser = (userId) =>
  server.get(
    process.env.REACT_APP_API_BASE_URL + "/api/Assets/Recharges/" + userId
  );
