import { instance } from "../services/axiosInstances";
import Cookies from "js-cookie";
export const usePharmacyNames = () => {
  const getPharmacyName = async (id) => {
    const user = await instance
      .get("/pharmacy/:pharmacyID")
      .then((response) => {
        console.log(response);
        return {
          user: response.data.user,
          token: response.data.token,
          role: response.data.role,
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

  return { getPharmacyName };
};
