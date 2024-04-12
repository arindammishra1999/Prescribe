"use client";
import React, { useState } from "react";

import DropDown from "../../components/DropDown";
import TextInput from "../../components/TextInput";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import { instance } from "../../../services/axiosInstances";

function InfoPage() {
  const { email, password } = useAuth();
  const [userType, setUserType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pharmacyName, setPharmacyName] = useState("");
  const [signupError, setSignupError] = useState(false);
  const [id, setId] = useState("");
  const [delayCountdown, setDelayCountdown] = useState(3);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const router = useRouter();

  const onSubmit = async () => {
    let userData = {};
    if (userType === "Patient") {
      userData = {
        user: {
          first_name: firstName,
          email,
          last_name: lastName,
          password,
          health_card_number: id,
        },
        role: userType,
      };
    } else if (userType === "Doctor") {
      userData = {
        user: {
          first_name: firstName,
          email,
          last_name: lastName,
          password,
          practitioner_id: id,
        },
        role: "prescriber",
      };
    } else if (userType === "Pharmacy") {
      userData = {
        user: {
          name: pharmacyName,
          email,
          password,
          license_number: id,
        },
        role: userType,
      };
    }

    try {
      const response = await instance.post("/register", userData);
      if (response.status === 201) {
        // Start the countdown
        setSignupSuccess(true);
        let countdown = 3;
        const countdownInterval = setInterval(() => {
          setDelayCountdown(countdown);
          countdown--;
          if (countdown === 0) {
            clearInterval(countdownInterval);
            router.push("/login");
          }
        }, 1000);
      }
    } catch (error) {
      console.error("Error registering user:", error);
      setSignupError(true);
    }
  };
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      {signupError && (
        <p className="text-red-500 font-semibold">Error During Signup</p>
      )}
      {signupSuccess && (
        <p className="text-green-500 font-semibold">
          Signup successful, redirecting to login page in {delayCountdown}...
        </p>
      )}
      <div className="w-full">
        <DropDown
          options={["Patient", "Doctor", "Pharmacy"]}
          fieldName={"Are you a..."}
          onSelect={setUserType}
        />
        {userType === "Patient" && (
          <>
            {" "}
            <TextInput
              onInputChange={setFirstName}
              placeholder={"John"}
              fieldName={"What is your first name?"}
            />
            <TextInput
              onInputChange={setLastName}
              placeholder={"Doe"}
              fieldName={"What is your last name?"}
            />
          </>
        )}
        {userType === "Doctor" && (
          <>
            {" "}
            <TextInput
              onInputChange={setFirstName}
              placeholder={"John"}
              fieldName={"What is your first name?"}
            />
            <TextInput
              onInputChange={setLastName}
              placeholder={"Doe"}
              fieldName={"What is your last name?"}
            />
          </>
        )}

        {userType === "Pharmacy" && (
          <>
            {" "}
            <TextInput
              onInputChange={setPharmacyName}
              placeholder={"Brentwood Pharmacy"}
              fieldName={"What is the Pharmacy name?"}
            />
          </>
        )}

        {userType === "Patient" && (
          <TextInput
            onInputChange={setId}
            placeholder={"12345-6789"}
            fieldName={"What is your health card number?"}
          />
        )}
        {userType === "Doctor" && (
          <TextInput
            onInputChange={setId}
            placeholder={"12345678"}
            fieldName={"What is your MINC number?"}
          />
        )}
        {userType === "Pharmacy" && (
          <TextInput
            onInputChange={setId}
            placeholder={"12345678"}
            fieldName={"What is your license number?"}
          />
        )}
      </div>
      <div className="flex flex-col items-center justify-center 2xl:w-1/2 w-full">
        <div className="mb-4 w-full">
          <button
            className="bg-teal-700 text-white py-2 px-4 rounded-full w-full"
            onClick={onSubmit}
          >
            Sign Up
          </button>
        </div>
        <p>
          Already a User?{" "}
          <a
            onClick={() => {
              router.push("/login");
            }}
            className="text-teal-900 cursor-pointer"
          >
            Log in
          </a>
        </p>
      </div>
    </>
  );
}

export default InfoPage;
