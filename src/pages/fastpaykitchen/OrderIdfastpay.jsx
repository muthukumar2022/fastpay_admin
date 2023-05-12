import React, { useState } from "react";
import { Link } from "react-router-dom";

// import AuthImage from "../../images/auth-image.jpg";

import Aadhaarcardkitchen from "../../partials/kitchenfastpay/Aadhaarcardkitchen";
import Fssaikitchen from "../../partials/kitchenfastpay/Fssaikitchen";
import Pancardkitchen from "../../partials/kitchenfastpay/Pancardkitchen";

import Fastpay from "../../images/fastpay.png";
import Vector from "../../images/Vector.png";
import Vector1 from "../../images/Vector1.png";
import Vector2 from "../../images/Vector2.png";

function OrderIdfastpay() {
  const [companySetting, setCompanySetting] = useState(true);
  return (
    <main className="bg-white">
      <div className="relative md:flex">
        {/* Content */}
        <div className="md:w-1/2">
          <div className="min-h-screen h-full flex flex-col after:flex-1">
            {/* Header */}
            {/* <div className="flex-1"> */}
            <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
              {/* Logo */}
              <img className="h-6 w-20 mt-10" src={Fastpay} alt="loginlogo" />
            </div>
            <div className="flex">
              <img
                className="w-6 h-6 mt-14 ml-16"
                src={Vector1}
                alt="Vector1"
              />
              <Link
                className="btn bg-white text-black border-black ml-5 mt-12"
                to="/"
              >
                Kitchens
              </Link>
              <img className="h-6 w-6 mt-14 ml-5" src={Vector2} alt="Vector2" />
            </div>
            {/* </div> */}
            <div className="flex mt-16 justify-between mr-7">
              <div className="ml-16 w-60 h-8">
                <label className="block text-sm mb-1 font-bold">
                  Royal Spices
                </label>
                <label className="block text-sm font-normal mb-1">
                  South Indian cuisine
                </label>
              </div>
              <div className="border-l border-[#D7D7D7]">
                <label className="block text-sm font-normal mb-1 ml-2">
                  ₹ 1300.50
                </label>
                <label className="block text-sm font-normal mb-1 ml-2">
                  Revenue till date
                </label>
              </div>
            </div>

            <div className="flex justify-between mr-7 mt-12">
              <div className="bg-[#FFF5F1] shadow-lg rounded-sm ml-16">
                <div className="px-5 pt-5">
                  <div className="text-sm mb-1 text-[#F25F2A] font-normal">
                    Due now
                  </div>
                  <div className="text-sm mb-1 text-[#F25F2A] font-normal">
                    648.00
                  </div>
                </div>
              </div>
              <div className="bg-[#F8F8F8] shadow-lg rounded-sm ">
                <div className="px-5 pt-5">
                  <div className="text-sm  mb-1">Paid</div>
                  <div className="text-sm font-normal mb-1">1248.00</div>
                </div>
              </div>
              <div className="bg-[#F8F8F8] shadow-lg rounded-sm ">
                <div className="px-5 pt-5">
                  <div className="text-sm font-normal  mb-1">Referrals</div>
                  <div className="text-sm font-normal mb-1">0.00</div>
                </div>
              </div>
            </div>
            <article className="bg-white shadow-md rounded border border-slate-200 p-5 ml-16 mr-7 mt-5">
              <div className="flex ">
                <div className="grow flex justify-between">
                  <div>
                    <label
                      className="block text-sm font-normal mb-1 flex"
                      htmlFor="email"
                    >
                      Order ID
                      <div className="block text-sm font-bold ml-2">
                        FP100000001
                      </div>
                    </label>
                    <label
                      className="block text-xs font-normal mb-1"
                      htmlFor="email"
                    >
                      18 Sky Colony, Adaya, Chennai 600002
                    </label>
                  </div>
                  <div className="mt-2">
                    <label
                      className="block text-sm font-bold mb-1"
                      htmlFor="email"
                    >
                      Rs. 700.50
                    </label>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Image */}
        <div className="bg-[#F8F8F8] md:w-1/2">
          {/* Sidebar */}
          <div>
            {/* <div className="lg:sticky lg:top-16 bg-slate-50 lg:overflow-x-hidden lg:overflow-y-auto no-scrollbar lg:shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200 lg:w-[320px] xl:w-[352px] 2xl:w-[calc(352px+80px)] lg:h-[calc(100vh-64px)]"> */}
            <div className="py-8 px-4 lg:px-8 2xl:px-12">
              <div className="max-w-sm mx-auto lg:max-w-none">
                <div className="space-y-6">
                  {/* Order summary */}
                  <div className="flex justify-between mr-5">
                    <div className="flex">
                      <div className="text-[#1E5DFF] font-normal text-xs mb-2 mt-24">
                        View menu
                      </div>
                      <img
                        className="h-4 w-4 mt-24 ml-2"
                        src={Vector}
                        alt="Vector"
                      />
                    </div>
                    <div className="flex items-center mt-20">
                      <div className="form-switch ">
                        <input
                          type="checkbox"
                          id="company-toggle "
                          className="sr-only "
                          checked={companySetting}
                          onChange={() => setCompanySetting(!companySetting)}
                        />
                        <label
                          className="bg-slate-400"
                          htmlFor="company-toggle"
                        >
                          <span
                            className="bg-white shadow-sm"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only">Company Culture</span>
                        </label>
                      </div>
                      <div className="text-sm ml-2 ">
                        {companySetting ? "Active" : "Deactivate"}
                      </div>
                    </div>
                  </div>
                  <ul className="mb-4">
                    <li className="text-sm w-full flex  py-3 border-b border-slate-200 border-t">
                      <div className="w-40 font-bold text-xs">Name</div>
                      <div className="font-normal text-xs">Royal Spices</div>
                    </li>
                    <li className="text-sm w-full flex py-3 border-b border-slate-200">
                      <div className="w-40 font-bold text-xs">Type </div>
                      <div className="font-normal text-xs">
                        South Indian cuisine
                      </div>
                    </li>
                    <li className="text-sm w-full flex py-3 border-b border-slate-200">
                      <div className="w-40 font-bold text-xs">FoodHub ID</div>
                      <div className="font-normal text-xs text-[#FC5A33]">
                        Verification in progress
                      </div>
                    </li>
                    <li className="text-sm w-full flex py-3 border-b border-slate-200">
                      <div className="w-40 font-bold text-xs">PIN code</div>
                      <div className="font-normal text-xs ">605007</div>
                    </li>
                    <li className="text-sm w-full flex py-3 border-b border-slate-200">
                      <div className="w-40 font-bold text-xs">Address</div>
                      <div className="font-normal text-xs">18 Star Avenue</div>
                    </li>
                    <li className="text-sm w-full flex py-3 border-b border-slate-200">
                      <div className="w-40 font-bold text-xs">Mobile</div>
                      <div className="font-normal text-xs">7358505328</div>
                    </li>
                    <li className="text-sm w-full flex py-3 border-b border-slate-200">
                      <div className="w-40 font-bold text-xs">Rating</div>
                      <div className="font-normal text-xs">$205</div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-7">
                <Aadhaarcardkitchen />
              </div>
              <div className="mt-7">
                <Fssaikitchen />
              </div>
              <div className="mt-7">
                <Pancardkitchen />
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default OrderIdfastpay;
