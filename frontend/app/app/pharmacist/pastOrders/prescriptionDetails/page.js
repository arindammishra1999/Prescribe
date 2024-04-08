import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPills } from '@fortawesome/free-solid-svg-icons';
import { QRCodeSVG } from 'qrcode.react';
import { FiArrowLeft, FiSearch, FiPlus, FiMinus } from "react-icons/fi";
import { FaPills } from "react-icons/fa";


const acceptOrderPage = () => {
  // Mock data for demonstration
  const viewedOrder = 
    {
      name: 'John Doe',
      OrderNumber: '123456789',
      drugName: "DRUG Z",
      dosage: "500 mg",
      days: "7",
      refill: "3",
      DIN: "1234567"

    }


  return (
    <div className="px-8 pt-8 pb-0 flex flex-col justify-end min-h-screen bg-white">
        {/* Flex container for the welcome message that takes up 20% of the parent container's height */}
        <div className="px-8 pt-8 pb-0 flex-col justify-center items-center w-full">
            <h1 className="text-4xl  text-left font-sfProDisplay font-medium mb-8">
                Accept Order
            </h1>
        </div>
        <div className="px-8 pt-0 pb-8 flex flex-col flex-1 w-full my-10">        
            {/* Green Border */}
            <div className="mx-auto flex flex-col p-8 items-center w-full border-4 border-teal-800 rounded-3xl">
                <div className="flex flex-row items-center mb-8 justify-between w-full">
                    <p className="text-black text-md text-4xl font-bold">{viewedOrder.name}</p>
                    <p className="text-black text-md text-2xl italic">Order#: {viewedOrder.OrderNumber}</p>
                </div>
                {/*Drug Info Space Div*/}
                <div class="flex flex-col grow bg-teal-800 w-full p-8 rounded-3xl mb-8">
                    <div className="flex flex-row items-center m-auto justify-between w-full">
                        <div className="flex flex-row items-center justify-start w-full">
                                <FontAwesomeIcon icon={faPills} size="4x" color="white" className="" />
                                <p className="flex grow ml-5 text-white text-5xl font-bold">{viewedOrder.drugName}</p>
                        </div>
                        <p className="whitespace-nowrap text-white text-2xl font-light italic">DIN: {viewedOrder.DIN}</p>
                    </div>
                    {/* Drug Info */}
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col mb-2 mt-2">
                            <p className="text-white text-2xl font-normal">Dosage: {viewedOrder.dosage}</p>
                            <p className="text-white text-2xl font-normal">Days: {viewedOrder.days}</p>      
                            <p className="text-white text-2xl font-normal">Refill: {viewedOrder.refill}</p> 
                        </div>
                    </div>
                </div>
                
                <div class="flex flex-col w-full p-8 justify-center items-center">
                    <button class="bg-teal-700 hover:bg-teal-400 py-2 px-4 rounded-full w-3/20">
                        <p className="text-white text-xl font-light">Done</p>
                    </button>                      
                </div>              
            </div>      
        </div>
    </div>
      );
};





export default acceptOrderPage;
