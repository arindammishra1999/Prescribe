import { instance } from "../services/axiosInstances";
import Cookies from "js-cookie";
export const useLogin = () => {
  const login = async (id, password, role) => {
    const user = await instance
      .post("/login", {
        user: {
          id: id,
          password: password,
        },
        role: role,
      })
      .then((response) => {
        console.log(response);
        return {
          data: response.data
        };
      })
      .catch((error) => {
        console.log("error: ", error);
        return null;
      });
    console.log("user is: ", user);
    if (user) {
      Cookies.set("currentUser", JSON.stringify(user));
    }
    return user;
  };

  return { login };
};
