"use client";
import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import ChangePasswordDialog from "../../components/Dialog";

const AccountPage = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [editableField, setEditableField] = useState(null);
  const fields = [
    { label: "Email", id: "email", defaultValue: "user@example.com" },
    { label: "Password", id: "password", defaultValue: "********" },
    {
      label: "Default Pharmacy",
      id: "defaultPharmacy",
      defaultValue: "Local Pharmacy",
    },
  ];
  // Function to open dialog and set which field is being edited
  const openDialog = () => {
    console.log("yeo");
    setEditableField("password");
    setShowDialog(true);
  };

  return (
    <div className="mx-auto p-4 flex flex-col justify-center items-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold mb-4">Account</h1>

      <div className="flex flex-col gap-4 w-full max-w-md">
        {fields.map((input) => (
          <div key={input.id} className="flex gap-2 items-center">
            <label htmlFor={input.id} className="basis-1/3">
              {input.label}:
            </label>
            <div className="flex grow items-center border-2 p-2 rounded">
              <input
                type={input.id === "password" ? "password" : "text"}
                id={input.id}
                className="grow outline-none"
                defaultValue={input.defaultValue}
                disabled
              />
              <FaPencilAlt
                className="ml-2 cursor-pointer"
                onClick={() => openDialog()}
              />
            </div>
          </div>
        ))}

        <div className="graph">
          {/* Add code for the usage statistics graph here */}
        </div>
      </div>

      {showDialog && (
        <ChangePasswordDialog
          onClose={() => setShowDialog(false)}
          onSave={(value) => {
            console.log(`Saving ${value} for ${editableField}`);
            // Here you would handle updating the value
            setShowDialog(false);
          }}
        />
      )}
    </div>
  );
};

export default AccountPage;
