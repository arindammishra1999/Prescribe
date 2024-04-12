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
    <div className="px-8 pt-8 pb-0 flex flex-col justify-start md:justify-start items-center min-h-full gap-4">


  <div className="logo md:hidden justify-self-start">
        <h1 className="text-4xl text-center font-bold font-fredoka text-teal-900">
        Prescribe
        </h1>
      </div>
      <div className=" px-4 md:px-8 md:pt-8 pb-0 flex-col justify-center items-center w-full">
        <h1 className=" text-xl text-center md:text-4xl md:text-left font-sfProDisplay font-bold md:font-medium md:mb-8">
          Account
        </h1>
      </div>
      <div className="px-0 md:px-8 pt-0 pb-8 flex md:flex-1 w-full md:h-full ">
          <div className="mx-auto flex grow-1 p-8 justify-center items-center w-full border-4 border-teal-900 rounded-3xl">
          {/* Account Component*/}
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
          </div>
      </div>
  );
};

export default AccountPage;
