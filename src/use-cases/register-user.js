import axios from "axios";

export const registerUser = (userData) => axios.post(process.env.REACT_APP_API_BASE_URL + '/auth/register', userData);

export const getMaxRef = () =>
  axios.get(process.env.REACT_APP_API_BASE_URL + "/auth/countOfRef");