"use client";
import React, { useState, useEffect } from "react";
import PasswordInput from "../components/PasswordInput";
import EmailInput from "../components/EmailInput";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

function SignupPage() {
  const { email, setEmail, password, setPassword } = useAuth();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [invalidPassword, setInvalidPassword] = useState(true);
  const [validPassword, setValidPassword] = useState(false);
  const [invalidFields, setInvalidFields] = useState(false);
  const router = useRouter();

  const handleContinue = () => {
    if (validPassword && email !== "" && password !== "") {
      router.push("/signup/details");
    } else {
      setInvalidFields(true);
    }
  };

  useEffect(() => {
    if (
      password === confirmPassword &&
      password != "" &&
      confirmPassword != ""
    ) {
      setInvalidPassword(false);
      setValidPassword(true);
    } else {
      setInvalidPassword(true);
      setValidPassword(false);
    }
  }, [password, confirmPassword]);

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      {invalidFields && (
        <p className="text-red-500 font-semibold">Invalid information</p>
      )}
      <div>
        <EmailInput emailValue={setEmail} />
        <PasswordInput
          onPasswordChange={setPassword}
          invalid={invalidPassword}
          valid={validPassword}
        />
        <PasswordInput
          onPasswordChange={setConfirmPassword}
          confirm={true}
          invalid={invalidPassword}
          valid={validPassword}
        />
      </div>
      <div className="flex flex-col items-center justify-center 2xl:w-1/2 w-full">
        <div className="mb-4 w-full">
          <button
            className="bg-teal-700 text-white py-2 px-4 rounded-full w-full"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
        <p>
          Already a User?{" "}
          <a onClick={() => router.push("/signin")} className="text-teal-900">
            Sign In
          </a>
        </p>
      </div>
    </>
  );
}

export default SignupPage;
