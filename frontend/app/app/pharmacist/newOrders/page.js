import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPills } from '@fortawesome/free-solid-svg-icons';
import { QRCodeSVG } from 'qrcode.react';

const NewOrdersPage = () => {
  // Mock data for demonstration
  const newOrders = [
    {
      name: 'John Doe',
      OrderNumber: '123456789',
    },
  ];

  return (
    <div className="px-8 pt-8 pb-0 flex flex-col justify-end min-h-screen bg-white">
        {/* Flex container for the welcome message that takes up 20% of the parent container's height */}
        <div className="px-8 pt-8 pb-0 flex-col justify-center items-center w-full">
            <h1 className="text-4xl text-left font-sfProDisplay font-medium mb-8">
                New Orders
            </h1>
        </div>
        <div className="px-8 pt-0 pb-8 flex flex-1 w-full h-full">        
            <div className="mx-auto flex-col grow-1 p-8 items-center w-full border-4 border-teal-800 rounded-3xl">
                {newOrders.map((order, index) => (
                <div key={index} className="flex justify-between m-4 p-8 bg-teal-800 rounded-3xl">
                <h1 className="text-white font-style: italic text-lg ">Order#: {order.OrderNumber}</h1>
                <p className="text-white text-md text-4xl">{order.name}</p>
                <button class="bg-lime-200 hover:bg-lime-400 text-black py-2 px-4 rounded-full w-3/20 text-xl">
                    View
                </button>
                </div>
            ))}
            </div>
        </div>
    
    </div>
    
    
    
      );
};

export default NewOrdersPage;
