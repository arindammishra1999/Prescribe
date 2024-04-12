import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPills } from "@fortawesome/free-solid-svg-icons";

const PrescriptionCard = ({ prescription }) => {
  return (
    <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-teal-900 text-white w-64 h-48">
      <div className="border-2 border-white bg-teal-900 rounded-2xl p-4 flex flex-row justify-evenly items-center text-white gap-5">
        <div className="flex flex-row gap-3 justify-center items-center">
          <FontAwesomeIcon icon={faPills} size="2xl" />
          <h1 className="text-xl">{prescription.name}</h1>
        </div>
        <h6 className="text-xs italic">DIN: {prescription.din}</h6>
      </div>
      <div className="flex flex-row p-3">
        <div>
          <h6 className="text-xs">{prescription.dosage}</h6>
          <h6 className="text-xs">Days: {prescription.days}</h6>
          <h6 className="text-xs">Refs: {prescription.refills}</h6>
        </div>
        <div className="ml-auto">
          <h6 className="text-xl">{prescription.date}</h6>
        </div>
      </div>
      {prescription.status && (
        <div className="w-full p-3 h-fit">
          <div
            className={`${
              prescription.status === "Not Sent" ? "bg-red-200" : "bg-green-200"
            } h-8 rounded-3xl flex items-center justify-center text-black`}
          >
            <h6 className="text-center text-xl">{prescription.status}</h6>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrescriptionCard;
