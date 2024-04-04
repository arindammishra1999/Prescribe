import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPills } from '@fortawesome/free-solid-svg-icons';
import { QRCodeSVG } from 'qrcode.react';

const NewOrdersPage = () => {
  // Mock data for demonstration
  const pastOrders = [
    {
      name: 'John Doe',
      OrderNumber: '123456789',
      Date: 'January 21st, 2023',
      Status: 'Fulfilled',
    },
  ];

  return (
    <div className="px-8 pt-8 pb-0 flex flex-col justify-end min-h-screen bg-white">
        {/* Flex container for the welcome message that takes up 20% of the parent container's height */}
        <div className="px-8 pt-8 pb-0 flex-col justify-center items-center w-full">
            <h1 className="text-4xl text-left font-sfProDisplay font-medium mb-8">
                Past Orders
            </h1>
        </div>
        <div className="px-8 pt-0 pb-8 flex flex-1 w-full h-full">        
            <div className="mx-auto flex-col grow-1 p-8 items-center w-full border-4 border-teal-800 rounded-3xl">
                {pastOrders.map((order, index) => (
                <div key={index} className="flex flex-col m-4 p-8 bg-teal-800 rounded-3xl">
                    <div className="flex flex-row justify-between items-center w-full">
                        <h1 className="text-white font-style: italic text-lg ">Order#: {order.OrderNumber}</h1>
                        <p className="text-white text-md text-4xl">{order.name}</p>
                        <button class="bg-lime-200 hover:bg-lime-400 text-black py-2 px-4 rounded-full w-3/20 text-xl">
                        {order.Status}
                        </button>
                    </div>
                    <h1 className="text-white font-style: text-lg ">Date Fulfilled {order.Date}</h1>
                </div>
            ))}
            </div>
        </div>
    
    </div>
    
    
    
      );
};

export default NewOrdersPage;
