import server from "../config/server";

export const getWithdrwalsUser = (userId) =>
  server.get(
    process.env.REACT_APP_API_BASE_URL + "/Assets/Withdrawals/" + userId
  );
