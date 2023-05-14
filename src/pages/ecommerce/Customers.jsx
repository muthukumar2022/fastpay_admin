import React, { useState } from "react";

import CustomersTable from "../../partials/customers/CustomersTable";
import DropdownClassic from "../../components/DropdownClassic";
import SearchForm from "../../partials/actions/SearchForm";

import Fastpay from "../../images/fastpay.png";
import Vector3 from "../../images/Vector3.png";

function Customers() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <div className="bg-[#F2F2F2]">
          <div className="ml-20 h-36 flex justify-between">
            <img className="h-6 w-20 mt-10" src={Fastpay} alt="fastpay" />
            <div className="w-10 h-10 rounded-full bg-white mt-6 mr-12">
              <img
                className="w-4 h-3.5 mt-3 ml-3"
                src={Vector3}
                alt="Vector3"
              />
            </div>
          </div>
        </div>

        <main>
          {/* <div className="h-36 bg-[#F2F2F2]">
            <div className="ml-20">
              <img className="h-6 w-20 mt-10" src={Fastpay} alt="fastpay" />
            </div>
          </div> */}
          <div className=" px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Page header */}
            <div className="sm:flex sm:items-center mb-8">
              {/* Left: Title */}

              <div className="ml-11">
                <DropdownClassic />
              </div>
              <div className="ml-6">
                <SearchForm placeholder="Search " />
              </div>
              <div className="flex ml-24 border h-9 w-64 border-black rounded items-center justify-between">
                <div className="ml-4 font-bold text-sm">1246</div>
                <div className="mr-4 text-xs font-normal">Activated </div>
              </div>
              <div className="flex ml-7 border h-9 w-64 border-black rounded items-center justify-between">
                <div className="ml-4 font-bold text-sm">2380</div>
                <div className="mr-4 text-xs font-normal">Live orders </div>
              </div>
            </div>

            {/* Table */}
            <CustomersTable selectedItems={handleSelectedItems} />

            {/* Pagination */}
            {/* <div className="mt-8">
              <PaginationClassic />
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Customers;
