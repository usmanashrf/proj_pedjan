'use client'
import Input from "@/shared/input";
import Select from "@/shared/select";
import React from "react";
const ContactInformation = () => {
  return (
    <div>
      <h3 className="font-semibold text-3xl mb-6">Contact Information</h3>
      {/* Contact information div */}
      <div className="bg-white w-full border border-black/25 rounded-md px-6 py-8">
        <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 lg:gap-y-1 md:gap-y-8 gap-y-4    ">
          <div className="space-y-2  lg:max-w-[250px] ">
            <div>
              <h2 className="font-semibold text-lg whitespace-nowrap">Place</h2>
            </div>
            <div>
              <Input
                name="Enter your name"
                Placeholder="Enter your name"
              />
            </div>
          </div>

          {/* Postal Code */}

          <div className="space-y-2  lg:max-w-[250px]   ">
            <div>
              <h2 className="font-semibold text-lg whitespace-nowrap">
                Postal Code
              </h2>
            </div>
            <div className="">
            <Input
                name="Enter postal code"
                Placeholder="Enter postal code"
              />
            </div>
          </div>

          {/* Address */}

          <div className="space-y-2  lg:max-w-[250px]  ">
            <div>
              <h2 className="font-semibold text-lg whitespace-nowrap">
                Address
              </h2>
            </div>
            <div>
            <Input
                name="Enter your address"
                Placeholder="Enter your address"
              />
            </div>
          </div>
          {/* Phone number */}

          <div className="space-y-2  lg:max-w-[250px]  ">
            <div>
              <h2 className="font-semibold text-lg whitespace-nowrap">
                Phone number
              </h2>
            </div>
            <div >
            <Input
                name="Enter your phone number"
                Placeholder="Enter your phone number"
              />
            </div>
            <div className="flex  items-center gap-x-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                  fill="#003087"
                  stroke="#003087"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 12H16"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 16V8"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-sm">Add number</p>
            </div>
          </div>
          {/* Name */}

          <div className="space-y-2  lg:max-w-[250px]  ">
            <div>
              <h2 className="font-semibold text-lg whitespace-nowrap">Name</h2>
            </div>
            <div >
            <Input
                name="Enter your name"
                Placeholder="Enter your name"
              />
            </div>
          </div>
          {/* Surname */}

          <div className="space-y-2  lg:max-w-[250px]  ">
            <div>
              <h2 className="font-semibold text-lg whitespace-nowrap">
                Surname
              </h2>
            </div>
            <div >
            <Input
                name="Enter your surename"
                Placeholder="Enter your surename"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
