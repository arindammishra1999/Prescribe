import React, { useState } from "react";
import TextInput from "./TextInput";
const ChangeEmailDialog = ({ onClose, onSave }) => {
  const [newEmail, setNewEmail] = useState("");

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-3xl bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-xl leading-6 font-medium text-gray-900">
            Change Email
          </h3>
          <div className="mt-2 px-7 py-3 flex flex-col items-start">
            <h6>New Email Address</h6>
            <TextInput
              type="text"
              placeholder="user@example.com"
              className="mb-4 p-3 border rounded w-full"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </div>
          <div className="items-center px-4 py-3">
            <button
              className="px-4 py-2 bg-teal-900 text-white text-base font-medium rounded-3xl w-full shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-300"
              onClick={() => onSave(oldPassword, newPassword)}
            >
              Save
            </button>
          </div>
          <div className="absolute top-0 left-0 pt-4 pl-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="text-3xl">&times;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeEmailDialog;
