import { useEffect, useState } from "react";
import { instance } from "../services/axiosInstances";

export const usePatientDetails = (healthID, token) => {
  const [patientDetails, setPatientDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatientDetails = async () => {
      try {
        const response = await instance.get(`/patient/${healthID}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPatientDetails(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    if (healthID && token) {
      fetchPatientDetails();
    }

    return () => {}; // Cleanup function
  }, [healthID, token]);

  return { patientDetails, loading, error };
};
