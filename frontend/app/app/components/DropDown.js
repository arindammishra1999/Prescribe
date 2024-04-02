import React, { useState } from "react";

const DropDown = ({ options, onSelect, fieldName }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="mb-4">
      <h6 className="ml-2">{fieldName}</h6>
      <select
        value={selectedOption}
        onChange={(e) => handleSelect(e.target.value)}
        className="w-full bg-neutral-50 border border-white-300 p-4 rounded-full focus:border-teal-900 focus:outline-none"
      >
        <option value="" disabled>
          Select option..
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
