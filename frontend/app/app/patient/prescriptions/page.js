"use client";
import React, { useState } from "react";
import PrescriptionCard from "../../components/PrescriptionCard";
const PrescriptionPage = () => {
  const [prescriptions, setPrescriptions] = useState([
    {
      id: 1,
      name: "Drug Z",
      din: "1234567",
      dosage: "500 mg",
      days: "7",
      refills: "3",
      date: "February 21st, 2023",
      status: "Not Sent",
    },
    {
      id: 1,
      name: "Drug Z",
      din: "1234567",
      dosage: "500 mg",
      days: "7",
      refills: "3",
      date: "February 21st, 2023",
      status: "Fulfilled",
    },
  ]);

  const handleSearch = () => {
    // Perform search logic here and update the 'pharmacies' state with the results
    // You can use an API call or any other method to fetch the data
    // Example API call using fetch:
    // fetch(`/api/pharmacies?search=${searchQuery}`)
    //   .then((response) => response.json())
    //   .then((data) => setPharmacies(data))
    //   .catch((error) => console.error(error));
  };

  return (
    <div className="mx-auto p-4 flex flex-col justify-center items-center min-h-screen gap-5">
      <h1 className="text-3xl font-bold mb-4">Prescriptions</h1>
      <div className="flex flex-col gap-5 w-fit">
        {prescriptions.map((prescription) => (
          <PrescriptionCard prescription={prescription} />
        ))}
      </div>
    </div>
  );
};

export default PrescriptionPage;
