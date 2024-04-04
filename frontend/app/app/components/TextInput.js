import React, { useState } from "react";

const TextInput = ({
  onInputChange,
  placeholder,
  fieldName,
  type = "text",
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    onInputChange(value);
  };

  return (
    <div className="mb-4">
      <h6 className="ml-2">{fieldName}</h6>
      <input
        type={type}
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="w-full bg-neutral-50 border border-white-300 p-4 rounded-full focus:border-teal-900 focus:outline-none"
      />
    </div>
  );
};

export default TextInput;
