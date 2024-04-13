"use client"
import React, { useEffect, useState } from "react";
import DoctorLayout from "../layout";
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";

function patientProfilePage() {
    const [patientName, setPatientName] = useState("");
    const [healthCardNumber, setHealthCardNumber] = useState("");
    const router = useRouter();

    const handleBack = () => {
        router.push("/doctor");
    };

    useEffect(() => {
        const patientDetailsString = localStorage.getItem("patientDetails");
        if (patientDetailsString) {
            const patientDetails = JSON.parse(patientDetailsString);
            // Extract name and health card number from patient details
            const { first_name, last_name, health_card_number } = patientDetails;
            // Combine first name and last name to get full name
            const fullName = `${first_name} ${last_name}`;
            setPatientName(fullName);
            setHealthCardNumber(health_card_number);
        }
    }, []);

    return (
        <DoctorLayout>
            <div className="flex flex-col items-center justify-center">
                <div className="w-full mb-6">
                <button onClick={handleBack}>
                    <FiArrowLeft className="text-4xl ml-5 cursor-pointer absolute top-0 left-0 mt-4 ml-4" />
                </button>
                    <h1 className="text-4xl sm:text-2xl font-bold text-center">
                        Patient Profile
                    </h1>
                </div>

                <div className="mb-10">
                    <h4 className="ml-2">Name</h4>
                    <input
                        type="text"
                        value={patientName}
                        readOnly
                        className="border border-gray-400 px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-700 flex-1 pr-10"
                    />
                </div>
                <div className="mb-20">
                    <h4 className="ml-2">Health Card Number </h4>
                    <input
                        type="text"
                        value={healthCardNumber}
                        readOnly
                        className="border border-gray-400 px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-700 flex-1 pr-10"
                    />
                </div>
                <div className="mb-4 w-full">
                    <button className="bg-teal-700 text-white py-2 px-4 rounded-full w-full">
                        Prescription History
                    </button>
                </div>
                <div className="w-full">
                    <button className="bg-teal-700 text-white py-2 px-4 rounded-full w-full">
                        Add a new prescription
                    </button>
                </div>
            </div>
        </DoctorLayout>
    );
}

export default patientProfilePage;
