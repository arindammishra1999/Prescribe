"use client";
import React from "react";
import PrescriptionCard from "../../../components/PrescriptionCard";
import { IoArrowBack } from "react-icons/io5";
import { QRCodeSVG } from "qrcode.react";
const PrescriptioNDetailsPage = () => {
  const prescription = {
    id: 1,
    name: "Drug Z",
    din: "1234567",
    dosage: "500 mg",
    days: "7",
    refills: "3",
    date: "February 21st, 2023",
    status: "Not Sent",
  };
  return (
    <div className="flex flex-col mx-auto p-4 min-h-screen gap-5">
      <div className="flex flex-col w-full items-center">
        <div className="flex-grow-0 w-full">
          <button className="text-3xl">
            <IoArrowBack />
          </button>
        </div>
        <h1 className="flex-grow text-3xl font-bold text-center">
          Prescription Details
        </h1>
      </div>
      <div className="flex-1 h-2/3 flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col justify-center gap-3">
          <div className="flex flex-row justify-around gap-16">
            <h6>123456789</h6>
            <h6>{prescription.date}</h6>
          </div>

          <div className="bg-white p-3 rounded-3xl self-center">
            <QRCodeSVG value="https://reactjs.org/" size={200} />
          </div>
        </div>

        <div className="flex flex-col gap-5 w-fit self-center">
          <PrescriptionCard prescription={prescription} />
        </div>
        <button className="bg-teal-900 text-white text-base rounded-3xl w-64 py-2">
          Send to Pharmacy
        </button>
      </div>
    </div>
  );
};

export default PrescriptioNDetailsPage;
