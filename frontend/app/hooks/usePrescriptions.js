import { getInstance } from "../services/axiosInstances";
export const usePrescriptions = () => {
  const prescriptions = async (id, token) => {
    const allPrescriptions = await getInstance
      .get(`/prescription/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        return {
          data: response.data,
        };
      })
      .catch((error) => {
        console.log("error: ", error);
        return null;
      });
    return allPrescriptions;
  };

  return { prescriptions };
};
