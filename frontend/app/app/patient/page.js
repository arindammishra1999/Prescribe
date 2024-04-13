"use client";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPills } from "@fortawesome/free-solid-svg-icons";
import { QRCodeSVG } from "qrcode.react";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { usePrescriptions } from "../../hooks/usePrescriptions";

const Page = () => {
  const { prescriptions } = usePrescriptions();
  const user = useCurrentUser();

  const userInfo = {
    fullName: "John Doe",
    // More user info can be added here
  };

  useEffect(() => {
    console.log("user", user);
    console.log(prescriptions("HCN1234567", user?.data?.token));
  }, [user]);

  return (
    <div className="mx-auto p-4 flex flex-col justify-center items-center min-h-screen gap-4">
      <div className="logo md:hidden">
        <h1 className="text-4xl text-center font-bold font-fredoka text-teal-900">
          Prescribe
        </h1>
      </div>
      <h1 className="text-2xl font-bold mb-4">Welcome, {userInfo.fullName}!</h1>

      {/* Recent Transaction Card */}
      <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-teal-900 text-white w-64 h-44 p-3">
        <div className="text-xl mb-2 text-center">Most Recent</div>
        <div className="block rounded-lg bg-white flex flex-col rounded-xl">
          <div className="border-2 border-teal-900 rounded-xl p-4 flex flex-row justify-evenly items-center text-black">
            <FontAwesomeIcon icon={faPills} size="2xl" />
            <h1 className="text-xl font-bold">Drug Adderall</h1>
          </div>
          <div className="text-black p-3">
            <p className="text-center">February 21st, 2023</p>
          </div>
        </div>
      </div>

      {/* User Info Card */}
      <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-teal-900 text-white w-64 h-72 p-3 flex flex-col items-center justify-center gap-3">
        <h2 className="text-xl font-semibold mb-2">Account Information</h2>
        <p>{userInfo.fullName}</p>
        <div className="bg-white p-3 rounded-3xl">
          <QRCodeSVG value="https://reactjs.org/" />
        </div>
      </div>
    </div>
  );
};

export default Page;
