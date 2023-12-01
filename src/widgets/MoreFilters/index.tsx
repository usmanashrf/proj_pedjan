import Select from "@/shared/select";
import React from "react";
import ElectricVehicle from "./ElectricVehicle";
import CubeCapacity from "./CubeCapacity";
import ExteriorColor from "./ExteriorColor";
import CarInteriorDetails from "./CarInteriorDetails";
import Safety from "./Safety";
import Equipment from "./Equipment";
import OtherInformation from "./OtherInformation";
import { TabI } from "../Hero/Tab";

const MoreFilter = ({open, setOpen}: TabI) => {
  return (
    // Main Section
    <div className="mt-6 relative">
      {/* Section 1 */}
      <div className="flex flex-wrap px-8 gap-x-5 gap-y-6 max-xs1:flex-col">
        {/* Car Information About Number Of Seats, Ownership, Condition */}
        <div className="space-y-3 flex-[2]">
          <div>
            <h2 className="font-semibold text-lg whitespace-nowrap">Number of seats</h2>
          </div>
          {/* Number of Seats Selector */}
          <div className="flex gap-x-2">
            <div className="flex-1">
              <Select
                name="From"
                InitialValue={{ label: "From", value: "" }}
                Options={[
                  { label: "value 1", value: "" },
                  { label: "value 2", value: "value 1" },
                  { label: "value 3", value: "value 2" },
                ]}
              />
            </div>
            {/* To */}
            <div className="flex-1">
              <Select
                name="To"
                InitialValue={{ label: "To", value: "" }}
                Options={[
                  { label: "value 1", value: "" },
                  { label: "value 2", value: "value 1" },
                  { label: "value 3", value: "value 2" },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Number of Doors Selector */}
        <div className="space-y-3 flex-[2]">
          <div>
            <h2 className="font-semibold text-lg whitespace-nowrap">Number of doors</h2>
          </div>
          <div className="flex-[2]">
            <Select
              name="4"
              InitialValue={{ label: "4", value: "" }}
              Options={[
                { label: "value 1", value: "" },
                { label: "value 2", value: "value 1" },
                { label: "value 3", value: "value 2" },
              ]}
            />
          </div>
        </div>

        {/* Type and Condition Selector */}
        <div className="space-y-3 flex-[2]">
          <div>
            <h2 className="font-semibold text-lg whitespace-nowrap">Type and condition</h2>
          </div>
          <div className="flex-1">
            <Select
              name="Any"
              InitialValue={{ label: "Any", value: "" }}
              Options={[
                { label: "value 1", value: "" },
                { label: "value 2", value: "value 1" },
                { label: "value 3", value: "value 2" },
              ]}
            />
          </div>
        </div>

        {/* Ownership Selector */}
        <div className="space-y-3 flex-[2]">
          <div>
            <h2 className="font-semibold text-lg">Ownership</h2>
          </div>
          <div className="flex-1">
            <Select
              name="From"
              InitialValue={{ label: "", value: "" }}
              Options={[
                { label: "value 1", value: "" },
                { label: "value 2", value: "value 1" },
                { label: "value 3", value: "value 2" },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Section 2 */}

      <div className=" flex px-8 py-6 gap-x-5 gap-y-6 flex-wrap max-w-[850px] ">
        <div className="space-y-3 flex-1">
          <div>
            <h2 className="font-semibold text-lg whitespace-nowrap">Origin of the vehicle</h2>
          </div>
          <div>
            <Select
              name="Home Plates"
              InitialValue={{ label: "Home Plates", value: "" }}
              Options={[
                { label: "value 1", value: "" },
                { label: "value 2", value: "value 1" },
                { label: "value 3", value: "value 2" },
              ]}
            />
          </div>
        </div>

        <div className="space-y-3 flex-[1]">
          <div>
            <h2 className="font-semibold text-lg whitespace-nowrap">
              Leasing Kilometers per year
            </h2>
          </div>
          {/* Number of Seats Selector */}
          <div className="flex gap-x-2">
            <div className="flex-1">
              <Select
                name="From"
                InitialValue={{ label: "From", value: "" }}
                Options={[
                  { label: "value 1", value: "" },
                  { label: "value 2", value: "value 1" },
                  { label: "value 3", value: "value 2" },
                ]}
              />
            </div>
            {/* To */}
            <div className="flex-1">
              <Select
                name="To"
                InitialValue={{ label: "To", value: "" }}
                Options={[
                  { label: "value 1", value: "" },
                  { label: "value 2", value: "value 1" },
                  { label: "value 3", value: "value 2" },
                ]}
              />
            </div>
          </div>
        </div>

        <div className="space-y-3 flex-[1]">
          <div>
            <h2 className="font-semibold text-lg whitespace-nowrap">Leasing Duration</h2>
          </div>
          {/* Number of Seats Selector */}
          <div className="flex gap-x-2">
            <div className="flex-1">
              <Select
                name="From"
                InitialValue={{ label: "From", value: "" }}
                Options={[
                  { label: "value 1", value: "" },
                  { label: "value 2", value: "value 1" },
                  { label: "value 3", value: "value 2" },
                ]}
              />
            </div>
            {/* To */}
            <div className="flex-1">
              <Select
                name="To"
                InitialValue={{ label: "To", value: "" }}
                Options={[
                  { label: "value 1", value: "" },
                  { label: "value 2", value: "value 1" },
                  { label: "value 3", value: "value 2" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <ElectricVehicle/>
      <hr/>
      <CubeCapacity/>
      <ExteriorColor/>
      <CarInteriorDetails/>
      <Safety/>
      <Equipment/>
      <OtherInformation/>
      <div className="absolute -bottom-5 left-0 right-5  flex justify-center w-full  ">
        <button onClick={() => setOpen(false)} className="px-12 py-4 bg-[#EF2C2E] text-white rounded-md text-sm">
        Close Detail Search
        </button>
      </div>
    </div>
  );
};

export default MoreFilter;
