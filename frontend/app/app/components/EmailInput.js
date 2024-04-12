import React, { useState } from "react";

export default function EmailInput({ emailValue }) {
  const [invalidEmail, setInvalidEmail] = useState(true);
  const [validEmail, setValidEmail] = useState(false);

  const handleInputChange = (event) => {
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const inputEmail = event.target.value;
    if (isValidEmail(inputEmail)) {
      emailValue(inputEmail); // Pass the input value to the parent component
      setValidEmail(true);
      setInvalidEmail(false); // Reset invalid state
    } else {
      setInvalidEmail(true);
      setValidEmail(false); // Reset valid state
    }
  };

  return (
    <div className="mb-4">
      <h6 className="ml-2">Email</h6>
      <input
        type="email"
        placeholder="john@example.com"
        className={`w-full border p-4 rounded-full focus:border-teal-900 focus:outline-none ${
          invalidEmail
            ? "border-red-500"
            : validEmail
            ? "border-green-500"
            : "border-gray-300"
        }`}
        onChange={handleInputChange}
      />
    </div>
  );
}
