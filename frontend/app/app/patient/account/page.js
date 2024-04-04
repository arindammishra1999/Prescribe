"use client";
import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import ChangePasswordDialog from "../../components/ChangePasswordDialog";
import ChangeEmailDialog from "../../components/ChangeEmailDialog";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import { Line } from "react-chartjs-2";

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

        {/* Default Pharmacy */}

        <div className="flex gap-2 flex-col">
          <div className="flex flex-row text-xl gap-1">
            <label>Default Pharmacy</label>
            <FaPencilAlt
              className="ml-2 cursor-pointer"
              onClick={() => openDialog()}
            />
          </div>
          <div className="flex grow items-center border-2 p-3 rounded-2xl">
            <input
              type={"text"}
              className="grow outline-none"
              defaultValue={"London Drugs, Brentwood"}
              disabled
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center justify-center p-5 rounded-3xl bg-teal-900 text-white shadow-xl">
          <h1 className="text-2xl">Usage Statistics</h1>
          <div className="w-full max-w-xl h-80 bg-white p-5 rounded-2xl shadow-md">
            {/* Chart Component */}
            <Line
              data={{
                labels: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                datasets: [
                  {
                    label: "Prescriptions Redeemed",
                    data: [10, 15, 8, 12, 20, 18, 14, 16, 10, 12, 15, 9],
                    fill: false,
                    borderColor: "rgb(75, 192, 192)",
                    tension: 0.1,
                    pointBackgroundColor: "rgb(75, 192, 192)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgb(75, 192, 192)",
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false, // Added for responsive height
                scales: {
                  y: {
                    beginAtZero: true,
                    grid: {
                      display: true,
                      color: "rgba(203, 213, 224, 0.5)", // Lighter grid lines
                    },
                  },
                  x: {
                    grid: {
                      display: false, // Hide X-axis grid lines
                    },
                  },
                },
                plugins: {
                  legend: {
                    display: true,
                    position: "bottom", // Position legend at the bottom
                    labels: {
                      boxWidth: 20, // Smaller legend color box
                    },
                  },
                },
              }}
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
