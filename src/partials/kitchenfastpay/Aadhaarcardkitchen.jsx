import React from "react";
import { Link } from "react-router-dom";

function Aadhaarcardkitchen() {
  return (
    <div className="grid xl:grid-cols-1 gap-1 bg-white shadow-lg rounded-sm">
      {/* Item 1 */}
      <div className="text-sm font-normal ml-5 mt-5">Aadhaar card</div>
      <article className="flex overflow-hidden">
        <div className="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0">
          {/* Like button */}
          <ul className="ml-5">
            <li className="text-xs w-full text-[#ADADAD]">
              <div>Name</div>
            </li>
            <li className="text-xs w-full text-[#ADADAD] mt-2">
              <div>Number</div>
            </li>
            <li className="text-xs w-full text-[#ADADAD] mt-2">
              <div>C/O</div>
            </li>
            <li className="text-xs w-full text-[#ADADAD] mt-2">
              <div>Address</div>
            </li>
            <li className="text-xs w-full text-[#ADADAD] mt-2">
              <div>Gender</div>
            </li>
            <li className="text-xs w-full text-[#ADADAD] mt-2">
              <div>DOB</div>
            </li>
            <li className="text-xs w-full text-[#ADADAD] mt-2">
              <div>PIN code</div>
            </li>
          </ul>
        </div>
        {/* Content */}
        <div className="grow flex flex-col">
          <div className="grow">
            <div className="text-xs font-normal ">Bala SP</div>
            <div className="text-xs font-normal mt-2">2345 7866 2345</div>
            <div className="text-xs font-normal mt-2">Full name</div>
            <div className="text-xs font-normal mt-2">
              Full address, line 2, line 3, City, State
            </div>
            <div className="text-xs font-normal mt-2">Male</div>
            <div className="text-xs font-normal mt-2">12/12/1980</div>
            <div className="text-xs font-normal mt-2 mb-5">605007</div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Aadhaarcardkitchen;
