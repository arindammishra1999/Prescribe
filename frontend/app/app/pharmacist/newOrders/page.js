"use client";
import React from 'react';
import { getOrders } from "../../../hooks/useGetOrders";


const NewOrdersPage = () => {
  
  const { prescriptions, error } = getOrders("pending");
  
  if (error) {
    return <div>Error fetching prescriptions: {error.message}</div>;
  }

  if (!prescriptions) {
    return <div>Loading prescriptions...</div>;
  }

  return (
    <div className="px-8 pt-8 pb-0 flex flex-col justify-start md:justify-end items-center min-h-full gap-4">
      <div className="logo md:hidden justify-self-start">
        <h1 className="text-4xl text-center font-bold font-fredoka text-teal-900">
        Prescribe
        </h1>
      </div>
      <div className="md:px-8 md:pt-8 md:pb-0 flex-col justify-center items-center w-full">
        <h1 className="text-xl font-bold text-center md:text-4xl md:text-left font-sfProDisplay md:font-medium md:mb-8">
            New Orders
        </h1>
      </div>
      <div className="px-0 md:px-8 pt-0 pb-8 flex grow w-full h-0">
        <div className="mx-auto flex-col grow-1 p-4 md:p-8 items-center w-full border-4 border-teal-800 rounded-3xl">
          {prescriptions.map((prescription, index) => (
            <div key={index} className="flex flex-col md:flex-row md:justify-between md:m-4 md:p-8 bg-teal-800 rounded-3xl p-4 items-center">
              <h1 className="text-white font-style: italic md:text-lg text-base order-2 md:order-1">Prescription ID: {prescription.prescription_id}</h1>
              <p className="text-white md:text-4xl text-2xl order-1 md:order-2 font-bold">{prescription.patientName}</p>
              <button className="bg-lime-200 hover:bg-lime-400 text-black md:py-2 md:px-4 rounded-full w-full md:w-3/20 md:text-xl order-3 mt-5 md:mt-0">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewOrdersPage;
