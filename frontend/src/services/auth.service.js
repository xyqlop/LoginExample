import axios from "axios";

export const login = async (email, password) => {
  try {
    const { data } = await axios.post("http://127.0.0.1:3002/api/auth/login", {
      email,
      password,
    });
    if (data.token) {
      localStorage.setItem("token", data.token);
      return true;
    }
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const register = async (userName, email, password) => {
  try {
    // eslint-disable-next-line no-unused-vars
    const { data } = await axios.post(
      "http://127.0.0.1:3002/api/auth/register",
      {
        userName,
        email,
        password,
      }
    );
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
