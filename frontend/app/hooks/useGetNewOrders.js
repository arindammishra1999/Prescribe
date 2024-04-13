"use client";

import { prescriptionInstance } from "../services/axiosInstances";
import { useCurrentUser } from "./useCurrentUser";
import { useState, useEffect } from 'react';
import Cookies from "js-cookie";


export const getNewOrders = () => {

  const cookieData = JSON.parse(Cookies.get("currentUser"));
  const token = cookieData.token;
  const pharmacyId = cookieData.user.license_number;
  const myStatus = 'pending'; 
  const [prescriptions, setPrescriptions] = useState(null);
  const [error, setError] = useState(null);

  const fetchPrescriptions = async (pharmacyId, status) => {
    try {

        const response = await prescriptionInstance.get(`/pharmacy/${pharmacyId}/prescription/${status}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });      
          
      console.log('Response:', response);
      setPrescriptions(response.data.prescriptions); 
    } catch (err) {
      console.error('Error fetching prescriptions:', err);
      setError(err); 
    }
  };

  useEffect(() => {
    fetchPrescriptions(pharmacyId, myStatus);
  }, []); 

  return { prescriptions, error };
};

