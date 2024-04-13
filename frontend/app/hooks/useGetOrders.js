// hooks/useGetOrders.js
import { useState, useEffect } from 'react';
import Cookies from "js-cookie";
import { prescriptionInstance, instance } from "../services/axiosInstances";

const getOrders = (status) => {
  const [error, setError] = useState(null);
  const [prescriptions, setPrescriptions] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!Cookies.get("currentUser")) {
        return;
      }

      const cookieData = JSON.parse(Cookies.get("currentUser"));
      const token = cookieData.data.token;
      const pharmacyId = cookieData.data.user.license_number;

      try {
        const responsePrescription = await prescriptionInstance.get(`/pharmacy/${pharmacyId}/prescription/${status}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const prescriptionsData = responsePrescription.data.prescriptions;

        if (prescriptionsData && prescriptionsData.length) {
          const updatedPrescriptionsArray = await Promise.all(prescriptionsData.map(async (prescription) => {
            const responsePatient = await instance.get(`/patient/${prescription.patient_health_card_number}`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
            return {
              ...prescription,
              name: responsePatient.data.first_name + ' ' + responsePatient.data.last_name,
            };
          }));
          setPrescriptions(updatedPrescriptionsArray);
        } else {
          setPrescriptions([]);
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

export default getOrders;
