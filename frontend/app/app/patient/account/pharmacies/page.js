"use client";
import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const PharmacyPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [pharmacies, setPharmacies] = useState([
    {
      id: 1,
      name: "London Drugs 1",
      address: "3545 32 Ave NE, Calgary, AB, T1Y 6M6",
    },
    {
      id: 2,
      name: "London Drugs 1",
      address: "3545 32 Ave NE, Calgary, AB, T1Y 6M6",
    },
    {
      id: 2,
      name: "London Drugs 1",
      address: "3545 32 Ave NE, Calgary, AB, T1Y 6M6",
    },
    {
      id: 2,
      name: "London Drugs 1",
      address: "3545 32 Ave NE, Calgary, AB, T1Y 6M6",
    },
    {
      id: 2,
      name: "London Drugs 1",
      address: "3545 32 Ave NE, Calgary, AB, T1Y 6M6",
    },
    {
      id: 2,
      name: "London Drugs 1",
      address: "3545 32 Ave NE, Calgary, AB, T1Y 6M6",
    },
    {
      id: 2,
      name: "London Drugs 1",
      address: "3545 32 Ave NE, Calgary, AB, T1Y 6M6",
    },
    {
      id: 2,
      name: "London Drugs 1",
      address: "3545 32 Ave NE, Calgary, AB, T1Y 6M6",
    },
    {
      id: 2,
      name: "London Drugs 1",
      address: "3545 32 Ave NE, Calgary, AB, T1Y 6M6",
    },
    {
      id: 2,
      name: "London Drugs 1",
      address: "3545 32 Ave NE, Calgary, AB, T1Y 6M6",
    },
    {
      id: 2,
      name: "London Drugs 1",
      address: "3545 32 Ave NE, Calgary, AB, T1Y 6M6",
    },
  ]);

  const handleSearch = () => {
    // Perform search logic here and update the 'pharmacies' state with the results
    // You can use an API call or any other method to fetch the data
    // Example API call using fetch:
    // fetch(`/api/pharmacies?search=${searchQuery}`)
    //   .then((response) => response.json())
    //   .then((data) => setPharmacies(data))
    //   .catch((error) => console.error(error));
  };

  return (
    <div className="mx-auto p-4 flex flex-col justify-center items-center min-h-screen gap-5">
      <div className="self-start w-full text-3xl">
        <IoArrowBack />
      </div>

      <h1 className="text-3xl font-bold mb-4">Find Pharmacy</h1>
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full border border-gray-300 pl-4 pr-10 py-2 rounded-full focus:border-teal-900 focus:outline-none"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="cursor-pointer"
            onClick={handleSearch}
            // onClick should probably be on a button or the input's onChange, not the icon itself
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 w-fit">
        {pharmacies.map((pharmacy) => (
          <div className="flex flex-col items-start w-80 bg-teal-700 text-white p-5 rounded-3xl">
            <h1 className="text-2xl font-bold">{pharmacy.name}</h1>
            <p className="text-sm">{pharmacy.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PharmacyPage;
