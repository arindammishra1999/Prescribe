import { useState, useEffect } from 'react';
import Cookies from "js-cookie";
import { prescriptionInstance } from "../services/axiosInstances";

export const getOrders = (status) => {
  const [prescriptions, setPrescriptions] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!Cookies.get("currentUser")) {
        return;
      }

      const cookieData = JSON.parse(Cookies.get("currentUser"));
      const token = cookieData.token;
      const pharmacyId = cookieData.user.license_number;

      try {
        const response = await prescriptionInstance.get(`/pharmacy/${pharmacyId}/prescription/${status}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log('Response:', response);
        if (response.data.prescriptions) {
          setPrescriptions(response.data.prescriptions);
        } else {
          setPrescriptions({});
        }
      } catch (err) {
        console.error('Error fetching prescriptions:', err);
        setError(err);
      }
    };

    fetchData();
  }, [status]);

  return { prescriptions, error };
};
