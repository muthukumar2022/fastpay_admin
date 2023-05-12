import React from "react";
import { Link } from "react-router-dom";

function Pancardkitchen() {
  return (
    <div className="grid xl:grid-cols-1 gap-1 bg-white shadow-lg rounded-sm ">
      <div className="text-slate-800 font-semibold ml-5">PAN card</div>
      {/* Item 1 */}
      <article className="flex overflow-hidden">
        {/* Image */}
        <div className="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0">
          {/* Like button */}
          <ul className="mb-2 ml-5">
            <li className="text-sm w-full text-xs w-full text-[#ADADAD] mt-2">
              <div>Number</div>
            </li>
            <li className="text-sm w-full text-xs w-full text-[#ADADAD] mt-2">
              <div>Name on card</div>
            </li>
          </ul>
        </div>
        {/* Content */}
        <div className="grow flex flex-col">
          <div className="grow">
            <div className="text-xs font-normal mt-2 ">AVDPD7281Z</div>
            <div className="text-xs font-normal mt-2 mb-5">Full name</div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Pancardkitchen;
