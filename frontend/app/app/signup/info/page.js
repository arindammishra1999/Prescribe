"use client";
import React, { useState } from "react";

import DropDown from "@/app/components/DropDown";
import TextInput from "@/app/components/TextInput";

function InfoPage() {
  const [userType, setUserType] = useState("");
  const [fullName, setFullName] = useState("");
  const [healthCard, setHealthCard] = useState("");
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      <div className="w-full">
        <DropDown
          options={["Patient", "Doctor", "Pharmacy"]}
          fieldName={"Are you a..."}
          onSelect={setUserType}
        />
        <TextInput
          onInputChange={setFullName}
          placeholder={"John Doe"}
          fieldName={"What is your full name?"}
        />
        {userType === "Patient" && (
          <TextInput
            onInputChange={setHealthCard}
            placeholder={"12345-6789"}
            fieldName={"What is your health card number?"}
          />
        )}
        {userType === "Doctor" && (
          <TextInput
            onInputChange={setHealthCard}
            placeholder={"12345678"}
            fieldName={"What is your MINC number?"}
          />
        )}
        {userType === "Pharmacy" && (
          <TextInput
            onInputChange={setHealthCard}
            placeholder={"12345678"}
            fieldName={"What is your license number?"}
          />
        )}
      </div>
      <div className="flex flex-col items-center justify-center 2xl:w-1/2 w-full">
        <div className="mb-4 w-full">
          <button className="bg-teal-700 text-white py-2 px-4 rounded-full w-full">
            Sign Up
          </button>
        </div>
        <p>
          Already a User?{" "}
          <a href="#" className="text-teal-900">
            Log in
          </a>
        </p>
      </div>
    </>
  );
}

export default InfoPage;
