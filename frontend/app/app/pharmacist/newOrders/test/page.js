"use client";
import { prescriptionInstance } from "../../../../services/axiosInstances";
import React from 'react';

const testPage = async () => {

    try {
    
    const response = await prescriptionInstance.get("/prescriptions/1")
    console.log('My Getting ORders Response:', response);
        } catch (err) {
          console.error('Error fetching prescriptions:', err);
        }


  return (
    <div>
       HIHIHIHIHIHIHI {response}
    </div>
  );
};

export default testPage;

















