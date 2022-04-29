import axios, { axiosURL } from "../constants/basicAxios";
import { setCookie } from "../utilies/cookies";

export const setLoginService = async (email, password) => {
  return await axios
    .post(axiosURL.login, {
      identifier: `${email}`,
      password: `${password}`,
    })
    .then((res) => {
      setCookie("authToken", res.data.jwt, 1);
      return res.status;
    })
    .catch((err) => {
      return err.response.status;
    });
};

export const setRegisterService = async (email, password) => {
  return await axios
    .post(axiosURL.register, {
      username: `${email}`,
      email: `${email}`,
      password: `${password}`,
    })
    .then((res) => {
      setCookie("authToken", res.data.jwt, 1);
      return res.status;
    })
    .catch((err) => {
      if (
        err.response.data.message[0].messages[0].message ===
        "Email is already taken."
      ) {
        return 402;
      } else {
        return 400;
      }
    });
};

export const setCategoryService = async () => {
  return await axios
    .get(axiosURL.category)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      return err.response.status;
    });
};

export const setProductService = async () => {
  return await axios
    .get(axiosURL.product)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      return err.response.status;
    });
};
