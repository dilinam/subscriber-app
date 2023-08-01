import axios from "axios";

export const resetPassword = async(token, password) =>
  axios.post(
    process.env.REACT_APP_API_BASE_URL + `/auth/reset-password/${token}`,
    password
  );
export const resetPasswordVerifyMail = async (email) =>
  axios.post(
    process.env.REACT_APP_API_BASE_URL + `/auth/resetPasswordVerify/${email}`
  );