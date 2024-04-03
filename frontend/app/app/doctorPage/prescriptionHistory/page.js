import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPills } from "@fortawesome/free-solid-svg-icons";
import { FiArrowLeft } from "react-icons/fi";

const Page = () => {
    return (
        <div className="mx-auto p-4 flex flex-col justify-center items-center min-h-screen gap-4">
            <FiArrowLeft className="text-4xl ml-5 cursor-pointer absolute top-0 left-0 mt-4 ml-4" />
            <h1 className="text-3xl font-bold mb-4">Prescription History</h1>

            <div className="rounded-3xl overflow-hidden shadow-lg bg-teal-700 text-white w-96 h-60">
                <div className="rounded-3xl overflow-hidden shadow-lg bg-teal-700 text-white w-96 h-28 border-b-2 border-white flex items-center justify-between mb-5">
                    <div className="block rounded-lg flex flex-col rounded-xl">
                        <div className="border-2 border-teal-700 rounded-xl p-4 flex flex-row justify-evenly items-center text-white">
                            <FontAwesomeIcon
                                icon={faPills}
                                style={{ width: "5rem", marginRight: "3rem" }}
                            />
                            <h1 className="text-xl font-bold text-white">
                                Drug Z
                            </h1>
                            <h6 className="text-sm font-bold ml-10 text-white">
                                DIN: 1234567
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col ml-8 mr-10">
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <p className="text-lg font-bold text-white">
                                500mg
                            </p>
                            <p className="text-lg font-bold text-white">
                                Days: 7
                            </p>
                            <p className="text-lg font-bold text-white">
                                Ref: 3
                            </p>
                        </div>
                        <div className="text-right mt-6">
                            <p className="text-lg font-bold text-white">
                                February 21st, 2023
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg bg-teal-700 text-white w-96 h-60">
                <div className="rounded-3xl overflow-hidden shadow-lg bg-teal-700 text-white w-96 h-28 border-b-2 border-white flex items-center justify-between mb-5">
                    <div className="block rounded-lg flex flex-col rounded-xl">
                        <div className="border-2 border-teal-700 rounded-xl p-4 flex flex-row justify-evenly items-center text-white">
                            <FontAwesomeIcon
                                icon={faPills}
                                style={{ width: "5rem", marginRight: "3rem" }}
                            />
                            <h1 className="text-xl font-bold text-white">
                                Drug Z
                            </h1>
                            <h6 className="text-sm font-bold ml-10 text-white">
                                DIN: 1234567
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col ml-8 mr-10">
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <p className="text-lg font-bold text-white">
                                500mg
                            </p>
                            <p className="text-lg font-bold text-white">
                                Days: 7
                            </p>
                            <p className="text-lg font-bold text-white">
                                Ref: 3
                            </p>
                        </div>
                        <div className="text-right mt-6">
                            <p className="text-lg font-bold text-white">
                                February 21st, 2023
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
