"use client";
import React, { useState, useEffect } from "react";

import PasswordInput from "../components/PasswordInput";
import IdInput from "../components/IdInput";
import DropDown from "../components/DropDown";
import { useLogin } from "../../hooks/useLogin";
import { useRouter } from "next/navigation";

function SignInPage() {
  const [role, setRole] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [incorrectLogin, setIncorrectLogin] = useState(false);
  const router = useRouter();

  const { login } = useLogin();

  const roleApiMapping = {
    Patient: "Patient",
    Doctor: "Prescriber",
    Pharmacist: "Pharmacy",
  };

  const onSubmit = async () => {
    const apiRole = roleApiMapping[role];
    login(id, password, apiRole)
      .then((response) => {
        if (response) {
          if (role === "Patient") {
            router.push("/patient");
          } else if (role === "Doctor") {
            router.push("/doctor/landingPage");
          } else if (role === "Pharmacist") {
            router.push("/pharmacist");
          }
        } else {
          setIncorrectLogin(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let idtype = "";
  if (role === "Patient") {
    idtype = "Health Card Number";
  } else if (role === "Doctor") {
    idtype = "Practitioner ID";
  } else if (role === "Pharmacist") {
    idtype = "Pharmacy License Number";
  }

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
      {incorrectLogin && (
        <p className="text-red-500 font-semibold">Invalid credentials</p>
      )}
      <div>
        <DropDown
          options={["Patient", "Doctor", "Pharmacist"]}
          fieldName={"Are you a..."}
          onSelect={setRole}
        />
        {role && (
          <>
            <IdInput idtype={idtype} onInputChange={setId} />
            <PasswordInput onPasswordChange={setPassword} />
            <div className="mb-4">
              <a
                onClick={() => {
                  router.push("/signin/resetpassword");
                }}
                className="text-teal-900 cursor-pointer"
              >
                Forgot password?
              </a>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
              <div className="mb-4 w-full">
                <button
                  className="bg-teal-700 hover:bg-teal-800 text-white py-2 px-4 rounded-full w-full"
                  onClick={onSubmit}
                >
                  Sign In
                </button>
              </div>
              <p>
                Don&apos;t have an account?{" "}
                <a
                  onClick={() => {
                    router.push("/signup");
                  }}
                  className="text-teal-900"
                >
                  Sign Up
                </a>
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default SignInPage;
