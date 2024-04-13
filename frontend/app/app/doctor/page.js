"use client";
import React, { useEffect, useState } from "react";
import DoctorLayout from "./layout";
import { FiSearch } from "react-icons/fi";
import { useCurrentUser } from "../../hooks/useCurrentUser"; 
import { useLogout } from "../../hooks/useLogout";
import { FaSignOutAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { usePatientDetails } from "../../hooks/usePatientDetails";

function DoctorLandingPage() {
    const userData = useCurrentUser();
    const router = useRouter();
    const { logout } = useLogout();
    const [healthID, setHealthID] = useState("");
    const [token, setToken] = useState("");

    const { patientDetails, loading, error } = usePatientDetails(healthID, token);

    console.log("Patient Details:", patientDetails);

    console.log(userData);
    var doctorName =  null;

    if (userData) {
        doctorName = userData.data.user.last_name
    }

    const handleLogout = () => {
        logout();
        router.push("/");

    };

    const handleSearch = () => {
        const userToken = userData.data.token;
        setToken(userToken);
        if (patientDetails) {
            localStorage.setItem("patientDetails", JSON.stringify(patientDetails));
            router.push("/doctor/patientProfile");
        } else {
            console.log("Patient details not found.");
        }
      };

    return (
        <DoctorLayout>
            <div className="flex flex-col items-center justify-center">
                <div className="absolute top-0 left-0 m-4">
                    <button onClick={handleLogout} className="flex items-center text-teal-900 p-4">
                        <FaSignOutAlt className="mr-2 text-xl" />
                        <span className="text-lg">Logout</span>
                    </button>
                </div>
                <h1 className="text-4xl sm:text-2xl mb-20 mt-20 font-bold">
                    Welcome Dr { doctorName || "Loading Doctor Name"}!
                </h1>
                <h2 className="text-2xl mb-4">Search Patient</h2>
                <div className="relative flex items-center mb-40">
                    <input
                        type="text"
                        placeholder="Enter Health ID"
                        value={healthID}
                        onChange={(e) => setHealthID(e.target.value)}
                        className="border border-gray-400 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-700 flex-1 pr-10"
                    />
                    <FiSearch  onClick={handleSearch} className="absolute right-0 top-0 mt-2 mr-2 w-6 h-6 cursor-pointer" />
                </div>
                <div className="mt-50 w-full">
                    <button className="bg-teal-700 text-white py-2 px-4 rounded-full w-full">
                        Scan Patient QR code
                    </button>
                </div>
            </div>
        </DoctorLayout>
    );
}

export default DoctorLandingPage;
