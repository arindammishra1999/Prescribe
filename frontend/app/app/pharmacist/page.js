"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePharmacyNames } from '../../hooks/useGetPharmacyNames'; 
import { useCurrentUser } from '../../hooks/useCurrentUser'; 


const Page = () => {
  
  const userData = useCurrentUser();
  const pharmacyName = userData.data.user.name
  
  return (
<div className="px-8 pt-8 pb-0 flex flex-col justify-start md:justify-end items-center min-h-full gap-4">
    <div className="logo md:hidden justify-self-start">
      <h1 className="text-4xl text-center font-bold font-fredoka text-teal-900">
      Prescribe
      </h1>
    </div>
    <div className="px-0 md:px-8 md:pt-8 pb-0 flex-col justify-center items-center w-full">
      <h1 className=" text-xl text-center md:text-4xl md:text-left font-sfProDisplay font-medium mb-8">
      {pharmacyName}
      </h1>
    </div>
    <div className="px-0 md:px-8 pt-0 pb-8 flex md:flex-1 w-full md:h-full h-60">
        <div className="mx-auto flex grow-1 p-8 justify-center items-center w-full border-4 border-teal-900 rounded-3xl">
            <p className="text-lg italic font-sfProDisplay">Please select an option to get started!</p>
            
        </div>
    </div>

</div>

  );
};

export default Page;
