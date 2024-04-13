"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPills } from '@fortawesome/free-solid-svg-icons';
import { QRCodeSVG } from 'qrcode.react';
import { FiArrowLeft, FiSearch, FiPlus, FiMinus } from "react-icons/fi";
import { FaPills } from "react-icons/fa";
import PrescriptionCard from "../../../components/PrescriptionCard";
import { useState } from "react";


const acceptOrderPage = () => {
  // Mock data for d    emonstration
  
  const viewedOrder = JSON.parse(localStorage.getItem("myOrder"));
  const prescriptions = [ viewedOrder ]

  return (
    <div className="px-8 pt-8 pb-0 flex flex-col justify-start md:justify-end items-center min-h-full bg-white">
        <div className="logo md:hidden justify-self-start">
            <h1 className="text-4xl text-center font-bold font-fredoka text-teal-900">
                Prescribe
            </h1>
        </div>
        <div className="md:px-8 md:pt-8 md:pb-0 flex-col justify-center items-center w-full">
            <h1 className="text-xl my-2 pb-2 md:pb-0 md:my-0 font-bold text-center md:text-left md:text-4xl md:text-left font-sfProDisplay md:font-medium md:mb-8">
                Accept Order
            </h1>
        </div>
        <div className="px-0 md:px-8 pt-0 md:pt-0 md:pb-8 flex flex-col md:grow w-full md:my-10">        
            {/* Green Border */}
            <div className="mx-auto flex flex-col p-4 md:p-8 items-center w-full border-4 border-teal-800 rounded-3xl">
                <div className="flex flex-row items-center mb-8 justify-between w-full">
                    <p className="text-black text-2xl md:text-4xl font-bold">{viewedOrder.drug_name}</p>
                    <p className="text-black text-sm md:text-2xl italic">Date Issued: {viewedOrder.date_issued}</p>
                </div>
                {/*Drug Info Space Div Desktop*/}
                <div class="hidden md:flex flex-col md:grow bg-teal-800 w-full p-8 rounded-3xl mb-8">
                    <div className="flex flex-row items-center m-auto justify-between w-full">
                        <div className="flex flex-row items-center justify-start w-full">
                                <FontAwesomeIcon icon={faPills} size="4x" color="white" className="" />
                                <p className="flex md:grow ml-5 text-white text-5xl font-bold">{viewedOrder.drug_name}</p>
                        </div>
                        <p className="whitespace-nowrap text-white text-2xl font-light italic">DIN: {viewedOrder.drug_identification_number}</p>
                    </div>
                    {/* Drug Card for Desktop*/}
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col mb-2 mt-2">
                            <p className="text-white text-2xl font-normal">{viewedOrder.medication_details}</p>
                            <p className="text-white text-2xl font-normal">Days: {viewedOrder.time_to_complete}</p>      
                            <p className="text-white text-2xl font-normal">Refill: {viewedOrder.refills}</p> 
                        </div>
                    </div>
                </div>
                {/* Drug Card for Mobile*/}
                <div className="flex p-1 md:hidden flex-col justify-start items-center gap-2 w-full">
                    <div className="flex flex-col gap-1 w-fit">
                        {prescriptions.map((prescription) => (
                            <PrescriptionCard key={prescription.id} prescription={prescription} />
                        ))}
                    </div>
                </div>
                <div className="relative flex items-center my-5 max-w-full">
                    <FiMinus className="absolute left-0 top-0 mt-2 ml-2 w-6 h-6 cursor-pointer" />
                    <input
                        type="text"
                        placeholder="30 minutes"
                        className="border border-gray-400 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-700 flex-1 text-center"
                    />
                    <FiPlus className="absolute right-0 top-0 mt-2 mr-2 w-6 h-6 cursor-pointer" />
                </div>
                
                <div className="flex flex-col w-full p-3 md:p-8 justify-center items-center">
                    <button className="bg-teal-700 hover:bg-teal-400 py-2 px-4 rounded-full w-1/2 md:w-3/20">
                        <p className="text-white text-xl font-light">Fulfill</p>
                    </button>                      
                </div>              
            </div>      
        </div>
    </div>
      );
};





export default acceptOrderPage;
