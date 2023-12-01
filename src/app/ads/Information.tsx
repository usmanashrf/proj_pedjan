'use client'
import { equipmentsData } from "@/assets/data/equipment-data";
import { otherInformationData } from "@/assets/data/other-information";
import { safetyData } from "@/assets/data/safety-data";
import CheckedBox from "@/components/ui/CheckedBox";
import Input from "@/shared/input";
import Select from "@/shared/select";
import Equipment from "@/widgets/MoreFilters/Equipment";
import OtherInformation from "@/widgets/MoreFilters/OtherInformation";
import Safety from "@/widgets/MoreFilters/Safety";
import React from "react";

const Information = () => {
  return (
    <div>
      <h3 className="font-semibold text-3xl mb-6">Information</h3>
      <div className="bg-white w-full rounded-md border border-black/25 py-6 px-6 ">
        {/* Brand and model */}
        <div>
          <h3 className="font-semibold text-xl mb-4">Brand and model</h3>
          <div className="flex max-sm:flex-col max-sm:flex-wrap w-full  gap-x-3 xs:gap-y-4 gap-y-3">
            {/* Make */}
            <div className="flex-1 sm:max-w-[250px]  ">
              <Select
                name="Brand"
                InitialValue={{ label: "Brand", value: "" }}
                Options={[
                  { label: "Make", value: "" },
                  { label: "Make 1", value: "Make 1" },
                  { label: "Make 2", value: "Make 2" },
                ]}
              />
            </div>
            {/* Model */}
            <div className="flex-1 sm:max-w-[250px] ">
              <Select
                name="Model"
                InitialValue={{ label: "Model", value: "" }}
                Options={[
                  { label: "Model", value: "" },
                  { label: "Model 1", value: "Model 1" },
                  { label: "Model 2", value: "Model 2" },
                ]}
              />
            </div>
          </div>
        </div>
        {/* Basic Information */}
        <div>
          <h3 className="font-semibold text-xl mb-4 mt-4">Basic Information</h3>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-3 ">
            {/* Year */}
            <div className="flex-1 lg:max-w-[250px]  ">
              <Select
                name="Year"
                InitialValue={{ label: "Year", value: "" }}
                Options={[
                  { label: "Make", value: "" },
                  { label: "Make 1", value: "Make 1" },
                  { label: "Make 2", value: "Make 2" },
                ]}
              />
            </div>
            {/* Variant */}
            <div className="flex-1 lg:max-w-[250px]  ">
              <Select
                name="Variant"
                InitialValue={{ label: "Variant", value: "" }}
                Options={[
                  { label: "Model", value: "" },
                  { label: "Model 1", value: "Model 1" },
                  { label: "Model 2", value: "Model 2" },
                ]}
              />
            </div>
            {/* Vehicle Type */}
            <div className="flex-1 lg:max-w-[250px]  ">
              <Select
                name="Vehicle Type"
                InitialValue={{ label: "Vehicle Type", value: "" }}
                Options={[
                  { label: "Model", value: "" },
                  { label: "Model 1", value: "Model 1" },
                  { label: "Model 2", value: "Model 2" },
                ]}
              />
            </div>
            {/* Fuel Type */}
            <div className="flex-1 lg:max-w-[250px]  ">
              <Select
                name="Fuel Type"
                InitialValue={{ label: "Fuel Type", value: "" }}
                Options={[
                  { label: "Model", value: "" },
                  { label: "Model 1", value: "Model 1" },
                  { label: "Model 2", value: "Model 2" },
                ]}
              />
            </div>
          </div>
        </div>
        {/* Basic Information */}
        <div>
          <h3 className="font-semibold text-xl mb-4 mt-4">Basic Information</h3>
          <div className="flex flex-wrap w-full  gap-x-3 xs:gap-y-4 gap-y-3">
            {/* Cubic volume */}
            <div className="flex-1 min-w-[250px]  ">
              <Select
                name="Cubic volume"
                InitialValue={{ label: "Cubic volume", value: "" }}
                Options={[
                  { label: "Make", value: "" },
                  { label: "Make 1", value: "Make 1" },
                  { label: "Make 2", value: "Make 2" },
                ]}
              />
            </div>
            {/* Engine power (Hp) */}
            <div className="flex-1 min-w-[250px]  ">
              <Select
                name="Engine power (Hp)"
                InitialValue={{ label: "Engine power (Hp)", value: "" }}
                Options={[
                  { label: "Model", value: "" },
                  { label: "Model 1", value: "Model 1" },
                  { label: "Model 2", value: "Model 2" },
                ]}
              />
            </div>
            {/* Mileage */}
            <div className="flex-1 min-w-[250px]  ">
              <Select
                name="Mileage"
                InitialValue={{ label: "Mileage", value: "" }}
                Options={[
                  { label: "Model", value: "" },
                  { label: "Model 1", value: "Model 1" },
                  { label: "Model 2", value: "Model 2" },
                ]}
              />
            </div>
            {/* Engine emission class */}
            <div className="flex-1 min-w-[250px]  ">
              <Select
                name="Engine emission class"
                InitialValue={{ label: "Engine emission class", value: "" }}
                Options={[
                  { label: "Model", value: "" },
                  { label: "Model 1", value: "Model 1" },
                  { label: "Model 2", value: "Model 2" },
                ]}
              />
            </div>
            {/* Type of drive */}
            <div className="flex-1 min-w-[250px]  ">
              <Select
                name="Type of drive"
                InitialValue={{ label: "Type of drive", value: "" }}
                Options={[
                  { label: "Model", value: "" },
                  { label: "Model 1", value: "Model 1" },
                  { label: "Model 2", value: "Model 2" },
                ]}
              />
            </div>
            {/* Gearbox */}
            <div className="flex-1 min-w-[250px]  ">
              <Select
                name="Gearbox"
                InitialValue={{ label: "Gearbox", value: "" }}
                Options={[
                  { label: "Model", value: "" },
                  { label: "Model 1", value: "Model 1" },
                  { label: "Model 2", value: "Model 2" },
                ]}
              />
            </div>
            {/* Door number */}
            <div className="flex-1 min-w-[250px]  ">
              <Select
                name="Door number"
                InitialValue={{ label: "Door number", value: "" }}
                Options={[
                  { label: "Model", value: "" },
                  { label: "Model 1", value: "Model 1" },
                  { label: "Model 2", value: "Model 2" },
                ]}
              />
            </div>
            {/* Number of seats */}
            <div className="flex-1 min-w-[250px]  ">
              <Select
                name="Number of seats"
                InitialValue={{ label: "Number of seats", value: "" }}
                Options={[
                  { label: "Model", value: "" },
                  { label: "Model 1", value: "Model 1" },
                  { label: "Model 2", value: "Model 2" },
                ]}
              />
            </div>
            {/* Steering wheel side */}
            <div className="flex-1 min-w-[250px]  ">
              <Select
                name="Steering wheel side"
                InitialValue={{ label: "Steering wheel side", value: "" }}
                Options={[
                  { label: "Model", value: "" },
                  { label: "Model 1", value: "Model 1" },
                  { label: "Model 2", value: "Model 2" },
                ]}
              />
            </div>
            {/* Climate */}
            <div className="flex-1 min-w-[250px]  ">
              <Select
                name="Climate"
                InitialValue={{ label: "Climate", value: "" }}
                Options={[
                  { label: "Model", value: "" },
                  { label: "Model 1", value: "Model 1" },
                  { label: "Model 2", value: "Model 2" },
                ]}
              />
            </div>
            {/* Color */}
            <div className="flex-1 min-w-[250px]  ">
              <Select
                name="Color"
                InitialValue={{ label: "Color", value: "" }}
                Options={[
                  { label: "Model", value: "" },
                  { label: "Model 1", value: "Model 1" },
                  { label: "Model 2", value: "Model 2" },
                ]}
              />
            </div>
            {/* Interior material */}
            <div className="flex-1 min-w-[250px]  ">
              <Select
                name="Interior material"
                InitialValue={{ label: "Interior material", value: "" }}
                Options={[
                  { label: "Model", value: "" },
                  { label: "Model 1", value: "Model 1" },
                  { label: "Model 2", value: "Model 2" },
                ]}
              />
            </div>
            {/* Interior color */}
            <div className="flex max-sm:flex-col  max-sm:flex-wrap w-full  gap-x-3 xs:gap-y-4 gap-y-3">
              <div className="flex-1 sm:max-w-[250px]  ">
                <Select
                  name="Interior color"
                  InitialValue={{ label: "Interior color", value: "" }}
                  Options={[
                    { label: "Model", value: "" },
                    { label: "Model 1", value: "Model 1" },
                    { label: "Model 2", value: "Model 2" },
                  ]}
                />
              </div>
              {/* Registered to */}
              <div className="flex-1 sm:max-w-[250px]  ">
                <Select
                  name="Registered to"
                  InitialValue={{ label: "Registered to", value: "" }}
                  Options={[
                    { label: "Model", value: "" },
                    { label: "Model 1", value: "Model 1" },
                    { label: "Model 2", value: "Model 2" },
                  ]}
                />
              </div>
              {/* Damage */}
              <div className="flex-1 sm:max-w-[250px]  ">
                <Select
                  name="Damage"
                  InitialValue={{ label: "Damage", value: "" }}
                  Options={[
                    { label: "Model", value: "" },
                    { label: "Model 1", value: "Model 1" },
                    { label: "Model 2", value: "Model 2" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Ownership Information */}
        <div className="mt-4">
          <h3 className="font-semibold text-xl mb-4">Ownership Information</h3>
          <div className="flex max-sm:flex-col max-sm:flex-wrap w-full  gap-x-3 xs:gap-y-4 gap-y-3">
            {/* Vehicle origin */}
            <div className="flex-1 md:max-w-[250px]  ">
              <Select
                name="Vehicle origin"
                InitialValue={{ label: "Vehicle origin", value: "" }}
                Options={[
                  { label: "Make", value: "" },
                  { label: "Make 1", value: "Make 1" },
                  { label: "Make 2", value: "Make 2" },
                ]}
              />
            </div>
            {/* Chassis number */}
            <div className="flex-1 md:max-w-[250px] ">
            <Input
                name="Chassis number"
                Placeholder="Chassis number"
              />
            </div>
          </div>
        </div>
        <div className="mt-6">
          {/* Safety */}
          <div className="mb-4">
            <h3 className="font-semibold text-xl">Safety</h3>
          </div>
          {/* Grid */}
          <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 xs:gap-x-10 gap-x-5 gap-y-4 flex-wrap max-xs1:pr-10   ">
            {safetyData.map((feature) => (
              <div key={feature.id}>
                <div className="flex items-center gap-x-2">
                  <input type="radio" />
                  <h4 className="text-sm font-normal xs:whitespace-nowrap">
                    {feature.label}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6">
          {/* Equipement */}
          <div className="mb-4">
            <h3 className="font-semibold text-xl">Equipment</h3>
          </div>
          <div className=" mb-10 text-sm font-normal">
            {/* Grid */}
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 xs:gap-x-10 gap-x-5 gap-y-4 flex-wrap max-xs1:pr-10  ">
              {equipmentsData.map((equipment) => (
                <div key={equipment.id}>
                  <div className="flex items-center gap-x-2">
                    <input type="radio" />
                    <h4 className="xs1:text-xs text-[12px] font-normal xs1:whitespace-nowrap">
                      {equipment.label}
                    </h4>
                  </div>
                  {/* You can add more elements based on your safety data */}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          {/* Other Information */}
          <div className="mb-4">
            <h3 className="font-semibold text-xl">Other Information</h3>
          </div>
          <div className=" mb-10">
            {/* Grid */}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 xs:gap-x-10 gap-x-5 gap-y-4 flex-wrap max-xs1:pr-10   ">
              {otherInformationData.map((informationData) => (
                <div key={informationData.id} className="">
                  <div className="flex items-center gap-x-2">
                    <input type="radio" />
                    <h4 className="text-sm font-normal xs!:whitespace-nowrap">
                      {informationData.label}
                    </h4>
                    {informationData.isImportant && (
                      <svg
                        className="shrink-0"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.99967 1.3335C4.32634 1.3335 1.33301 4.32683 1.33301 8.00016C1.33301 11.6735 4.32634 14.6668 7.99967 14.6668C11.673 14.6668 14.6663 11.6735 14.6663 8.00016C14.6663 4.32683 11.673 1.3335 7.99967 1.3335ZM7.49967 5.3335C7.49967 5.06016 7.72634 4.8335 7.99967 4.8335C8.27301 4.8335 8.49967 5.06016 8.49967 5.3335V8.66683C8.49967 8.94016 8.27301 9.16683 7.99967 9.16683C7.72634 9.16683 7.49967 8.94016 7.49967 8.66683V5.3335ZM8.61301 10.9202C8.57967 11.0068 8.53301 11.0735 8.47301 11.1402C8.40634 11.2002 8.33301 11.2468 8.25301 11.2802C8.17301 11.3135 8.08634 11.3335 7.99967 11.3335C7.91301 11.3335 7.82634 11.3135 7.74634 11.2802C7.66634 11.2468 7.59301 11.2002 7.52634 11.1402C7.46634 11.0735 7.41967 11.0068 7.38634 10.9202C7.35301 10.8402 7.33301 10.7535 7.33301 10.6668C7.33301 10.5802 7.35301 10.4935 7.38634 10.4135C7.41967 10.3335 7.46634 10.2602 7.52634 10.1935C7.59301 10.1335 7.66634 10.0868 7.74634 10.0535C7.90634 9.98683 8.09301 9.98683 8.25301 10.0535C8.33301 10.0868 8.40634 10.1335 8.47301 10.1935C8.53301 10.2602 8.57967 10.3335 8.61301 10.4135C8.64634 10.4935 8.66634 10.5802 8.66634 10.6668C8.66634 10.7535 8.64634 10.8402 8.61301 10.9202Z"
                          fill="#003087"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Highlighted Information */}

        <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-2    ">
          <div className="space-y-2  lg:max-w-[250px] ">
            <div>
              <h2 className="font-semibold text-lg whitespace-nowrap">
                Highlight information
              </h2>
            </div>
            <div>
              <Select
                name="Additional information"
                InitialValue={{ label: "Additional information", value: "" }}
                Options={[
                  { label: "value 1", value: "" },
                  { label: "value 2", value: "value 1" },
                  { label: "value 3", value: "value 2" },
                ]}
              />
            </div>
            <div>
              <p className="text-sm">
                Choose up to 4 additional pieces of information to make it stand
                out!
              </p>
            </div>
          </div>

          {/* Method of Sale */}

          <div className="space-y-2  lg:max-w-[250px]   ">
            <div className="flex items-center gap-x-2">
              <h2 className="font-semibold text-lg whitespace-nowrap">
                Method of sale
              </h2>
              <svg
                className="shrink-0"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.99967 1.3335C4.32634 1.3335 1.33301 4.32683 1.33301 8.00016C1.33301 11.6735 4.32634 14.6668 7.99967 14.6668C11.673 14.6668 14.6663 11.6735 14.6663 8.00016C14.6663 4.32683 11.673 1.3335 7.99967 1.3335ZM7.49967 5.3335C7.49967 5.06016 7.72634 4.8335 7.99967 4.8335C8.27301 4.8335 8.49967 5.06016 8.49967 5.3335V8.66683C8.49967 8.94016 8.27301 9.16683 7.99967 9.16683C7.72634 9.16683 7.49967 8.94016 7.49967 8.66683V5.3335ZM8.61301 10.9202C8.57967 11.0068 8.53301 11.0735 8.47301 11.1402C8.40634 11.2002 8.33301 11.2468 8.25301 11.2802C8.17301 11.3135 8.08634 11.3335 7.99967 11.3335C7.91301 11.3335 7.82634 11.3135 7.74634 11.2802C7.66634 11.2468 7.59301 11.2002 7.52634 11.1402C7.46634 11.0735 7.41967 11.0068 7.38634 10.9202C7.35301 10.8402 7.33301 10.7535 7.33301 10.6668C7.33301 10.5802 7.35301 10.4935 7.38634 10.4135C7.41967 10.3335 7.46634 10.2602 7.52634 10.1935C7.59301 10.1335 7.66634 10.0868 7.74634 10.0535C7.90634 9.98683 8.09301 9.98683 8.25301 10.0535C8.33301 10.0868 8.40634 10.1335 8.47301 10.1935C8.53301 10.2602 8.57967 10.3335 8.61301 10.4135C8.64634 10.4935 8.66634 10.5802 8.66634 10.6668C8.66634 10.7535 8.64634 10.8402 8.61301 10.9202Z"
                  fill="#003087"
                />
              </svg>
            </div>
            <div className="">
              <Select
                name="Select method of sale"
                InitialValue={{ label: "Select method of sale", value: "" }}
                Options={[
                  { label: "value 1", value: "" },
                  { label: "value 2", value: "value 1" },
                  { label: "value 3", value: "value 2" },
                ]}
              />
            </div>
          </div>

          {/* Price */}

          <div className="space-y-2  lg:max-w-[250px]  ">
            <div className="flex items-center gap-x-2">
              <h2 className="font-semibold text-lg whitespace-nowrap">Price</h2>
              <p>(NOK)</p>
            </div>
            <div >
            <Input
                name="Enter your price"
                Placeholder="Enter your price"
              />
            </div>
          </div>
          {/* Fixed price */}
          <div className="flex justify-start md:items-center items-end pb-3 ">
            <div className="flex items-center justify-center gap-x-2  max-w-[250px]">
            <CheckedBox isChecked={false} />
              <p>Fixed price</p>
            </div>
          </div>
        </div>
        {/* Description */}
        <div className="mt-5">
          <h3 className="font-semibold text-lg mb-3">Ad Description</h3>
          <div className="bg-white w-full rounded-md border border-black/25 h-[249px] px-4 py-3">
            <p className="text-sm">
            Enter a description of the ad...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
