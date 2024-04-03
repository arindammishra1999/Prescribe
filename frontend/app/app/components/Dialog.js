import React, { useState } from "react";

const ChangePasswordDialog = ({ onClose, onSave }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      onClick={onClose}
    >
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Change Password
          </h3>
          <div className="mt-2 px-7 py-3">
            <input
              type="password"
              placeholder="Old Password"
              className="mb-4 p-3 border rounded w-full"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="New Password"
              className="mb-4 p-3 border rounded w-full"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="items-center px-4 py-3">
            <button
              className="px-4 py-2 bg-teal-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
              onClick={() => onSave(oldPassword, newPassword)}
            >
              Save
            </button>
          </div>
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="text-2xl">&times;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordDialog;
