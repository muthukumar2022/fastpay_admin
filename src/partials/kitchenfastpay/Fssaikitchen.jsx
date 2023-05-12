import React from "react";
import { Link } from "react-router-dom";

function Fssaikitchen() {
  return (
    <div className="grid xl:grid-cols-1 gap-1 bg-white shadow-lg rounded-sm">
      <div className="text-sm font-normal ml-5 mt-5">FSSAI</div>
      {/* Item 1 */}
      <article className="flex overflow-hidden">
        {/* Image */}
        <div className="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0">
          {/* Like button */}
          <ul className="ml-5">
            <li className="text-sm w-full text-xs w-full text-[#ADADAD] mt-2">
              <div>License No.</div>
            </li>
            <li className="text-sm w-full text-xs w-full text-[#ADADAD] mt-2">
              <div>Name on card</div>
            </li>
            <li className="text-sm w-full mt-2 border-t border-[#D7D7D7]">
              <div className="text-sm font-normal mt-2">GST</div>
              <div className="text-[#ADADAD] text-xs mt-2">GST reg. no.</div>
            </li>
            <li className="text-sm w-full text-xs w-full text-[#ADADAD] mt-2">
              <div>XXXXX</div>
            </li>
          </ul>
        </div>
        {/* Content */}
        <div className="grow flex flex-col">
          <div className="grow">
            <div className="text-xs font-normal mt-2">ABC8324908230482</div>
            <div className="text-xs font-normal mt-2">Full name</div>
            <div className="text-xs font-normal mt-2 border-t mr-5 border-[#D7D7D7]">
              <div className="mt-10">GST2374823472390</div>
            </div>
            <div className="text-xs font-normal mt-2 mb-5">
              Relevant details
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Fssaikitchen;
