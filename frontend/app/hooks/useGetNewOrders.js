"use client";

import { instance } from "../services/axiosInstances";
import { useState, useEffect } from 'react';

export const getNewOrders = () => {
  const [prescriptions, setPrescriptions] = useState(null);
  const [error, setError] = useState(null);

  const fetchPrescriptions = async (pharmacyId, status) => {
    try {
      const response = await instance.get(`/api/pharmacy/${pharmacyId}/prescriptions/${status}`);
      console.log('Response:', response);
      setPrescriptions(response.data); 
    } catch (err) {
      console.error('Error fetching prescriptions:', err);
      setError(err); 
    }
  };

  useEffect(() => {

    const userData = useCurrentUser();
    var pharmacyId =  null;
  
    if (userData) {
       pharmacyId = userData.data.user.license_number
    }
    
    var myId = pharmacyId;
    const myStatus = 'pending'; 
    fetchPrescriptions(myId, myStatus);
  }, []); 

  return { prescriptions, error };
};
