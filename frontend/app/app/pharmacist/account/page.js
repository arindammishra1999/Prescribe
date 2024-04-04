"use client";
import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import ChangePasswordDialog from "../../components/ChangePasswordDialog";
import ChangeEmailDialog from "../../components/ChangeEmailDialog";

const AccountPage = () => {
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [showEmailDialog, setShowEmailDialog] = useState(false);
  // Function to open dialog and set which field is being edited

  return (
    <div className="mx-auto p-4 flex flex-col justify-center items-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold mb-4">Account</h1>

      <div className="flex flex-col gap-6 w-full max-w-md">
        <div className="flex gap-2 flex-col">
          <div className="flex flex-row text-xl gap-1">
            <label>Email</label>
            <FaPencilAlt
              className="ml-2 cursor-pointer"
              onClick={() => setShowEmailDialog(true)}
            />
          </div>
          <div className="flex grow items-center border-2 p-3 rounded-2xl">
            <input
              type={"text"}
              className="grow outline-none"
              defaultValue={"user@example.com"}
              disabled
            />
          </div>
        </div>

        {/* Password */}
        <div className="flex gap-2 flex-col">
          <div className="flex flex-row text-xl gap-1">
            <label>Password</label>
            <FaPencilAlt
              className="ml-2 cursor-pointer"
              onClick={() => setShowPasswordDialog(true)}
            />
          </div>
          <div className="flex grow items-center border-2 p-3 rounded-2xl">
            <input
              type={"password"}
              className="grow outline-none"
              defaultValue={"password"}
              disabled
            />
          </div>
        </div>

      </div>
      {/* Dialog for changing password */}
      {showPasswordDialog && (
        <ChangePasswordDialog
          onClose={() => setShowPasswordDialog(false)}
          onSave={(value) => {
            console.log(`Saving ${value} for ${editableField}`);
            // Here you would handle updating the value
            setShowDialog(false);
          }}
        />
      )}
      {/* Dialog for changing email */}
      {showEmailDialog && (
        <ChangeEmailDialog
          onClose={() => setShowEmailDialog(false)}
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
