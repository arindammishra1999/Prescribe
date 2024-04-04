import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPills } from "@fortawesome/free-solid-svg-icons";
import { QRCodeSVG } from "qrcode.react";
const Page = () => {
  // Mock data for demonstration
  const recentTransaction = {
    date: "2023-03-30",
    amount: "$100",
    description: "Payment Received",
  };

  const userInfo = {
    fullName: "John Doe",
    // More user info can be added here
  };

  return (
<div className="px-8 pt-8 pb-0 flex flex-col justify-end min-h-screen bg-white">
    {/* Flex container for the welcome message that takes up 20% of the parent container's height */}
    <div className="px-8 pt-8 pb-0 flex-col justify-center items-center w-full">
        <h1 className="text-4xl text-left font-sfProDisplay font-medium mb-8">
            Welcome Brentwood Pharmacy!
        </h1>
    </div>
    <div className="px-8 pt-0 pb-8 flex flex-1 w-full h-full">
        <div className="mx-auto flex grow-1 p-8 justify-center items-center w-full border-4 border-teal-900 rounded-3xl">
            <p className="text-lg italic font-sfProDisplay">Please select an option to get started!</p>
        </div>
    </div>

</div>



  );
};

export default Page;
