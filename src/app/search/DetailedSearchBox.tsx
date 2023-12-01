"use client";
import CheckedBox from "@/components/ui/CheckedBox";
import Input from "@/shared/input";
import Select from "@/shared/select";
import { Search } from "lucide-react";
import React, { useState } from "react";

const DetailedSearchBox = () => {
  const [PaymentType, setPaymentType] = useState<"buy" | "leasing">("buy");

  return (
    <div className="bg-white rounded-lg border border-black/25 w-full px-4 py-5">
      <div className="mb-2">
        {/* Heading */}
        <h3 className="text-xl text-[#EF2C2E] font-medium mb-3">
          Detailed Search
        </h3>
        <hr />
      </div>
      {/* Mark-Model-Variant */}
      <div className="mt-4 ">
        <h3 className="font-semibold text-lg mb-3">Mark, model, variant</h3>
        <div className="flex flex-wrap w-full gap-x-3 xs:gap-y-2 gap-y-3 items-end mt-2">
          <div className="flex flex-wrap gap-x-1.5 max-sm2:w-full gap-y-2">
            {/* Make */}
            <div className="sm2:flex-1 w-full">
              <Select
                name="Make"
                InitialValue={{ label: "Make", value: "" }}
                Options={[
                  { label: "Make", value: "" },
                  { label: "Make 1", value: "Make 1" },
                  { label: "Make 2", value: "Make 2" },
                ]}
              />
            </div>
            {/* Model */}
            <div className="sm2:flex-1 w-full">
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
          <div className="w-full flex flex-col items-end gap-y-2 mb-3">
            {/* Variant */}
            <div className="xs:flex-1 w-full">
              <Input name="variant" InitialValue="Variant" />
            </div>
            {/* More Span */}
            <span className="text-[#EF2C2E] font-medium underline">More</span>
          </div>
        </div>
        <hr className="border-b-0 border-black/25" />
      </div>
      {/* Payment Type */}
      <div className="mt-4">
        <h3 className="font-semibold text-lg mb-3">Payment Type</h3>
        <div className="whitespace-nowrap flex xs:text-sm text-xs border border-[#B8B8B8] rounded-lg overflow-hidden">
          <button
            onClick={() => setPaymentType("buy")}
            className={`${
              PaymentType === "buy" ? "bg-secondary text-white" : "text-primary"
            } w-full md:py-4 py-3 px-3 flex items-center justify-center text-center select-none outline-none rounded-l-lg font-medium transition-all duration-300`}
          >
            Buy
          </button>
          <button
            onClick={() => setPaymentType("leasing")}
            className={`${
              PaymentType === "leasing"
                ? "bg-secondary text-white"
                : "text-primary"
            } w-full md:py-4 py-3 px-3 flex items-center justify-center text-center select-none outline-none rounded-r-lg font-medium transition-all duration-300`}
          >
            Leasing
          </button>
        </div>
      </div>
      {/* Year */}
      <div className="mt-4">
        <h2 className="font-semibold text-lg whitespace-nowrap mb-3">Year</h2>
        {/* From */}
        <div className=" flex gap-x-2">
          <div className=" flex-1">
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
      {/* Kilometers */}
      <div className="mt-4">
        <h2 className="font-semibold text-lg whitespace-nowrap mb-3">
          Kilometers
        </h2>
        {/* From */}
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
      {/* Buttons Section */}
      <div className="flex flex-col gap-y-2 w-full mt-4">
        <button className="max-sm:col-span-2 max-xs:col-span-1 hover:bg-white hover:text-primary border hover:border-primary w-full rounded-lg flex gap-2 items-center justify-center bg-primary text-white xs:text-sm text-xs font-medium md:py-4 xs:py-3 py-3.5 transition-all duration-300">
          <Search size={16} strokeWidth={2} /> 5.221.456 results
        </button>
        <button className="hover:bg-secondary hover:text-white w-full border border-secondary text-secondary rounded-lg xs:text-sm text-xs font-medium md:py-4 xs:py-3 py-3 transition-all duration-300">
          Save Search
        </button>
        <hr className="mt-4 border-b-0 border-black/25" />
      </div>

      {/* Fuel type and vehicle Type */}
      <div className="flex flex-wrap gap-y-2 mt-4 gap-x-2">
        <div className="space-y-3 flex-[1]">
          <div>
            <h2 className="font-semibold text-lg whitespace-nowrap">
              Fuel Type
            </h2>
          </div>

          <Select
            name="Diesel"
            InitialValue={{ label: "Diesel", value: "" }}
            Options={[
              { label: "value 1", value: "" },
              { label: "value 2", value: "value 1" },
              { label: "value 3", value: "value 2" },
            ]}
          />
        </div>
        <div className="space-y-3 flex-[1]">
          <div>
            <h2 className="font-semibold text-lg whitespace-nowrap">
              Vehicle Type
            </h2>
          </div>
          <Select
            name="Couple"
            InitialValue={{ label: "Couple", value: "" }}
            Options={[
              { label: "value 1", value: "" },
              { label: "value 2", value: "value 1" },
              { label: "value 3", value: "value 2" },
            ]}
          />
        </div>
      </div>
      {/* Power */}
      <div className="mt-4 space-y-3">
        <div className="flex items-start gap-x-2">
          <h2 className="font-semibold text-lg">Power</h2>
          <div className="flex gap-x-2 font-medium text-sm">
            <button className="px-4 h-7 bg-[#EF2C2E] text-white text-center rounded-lg">
              Hp
            </button>
            <button className="px-4 h-7 bg-white text-[#003087] text-center rounded-lg border border-[#B8B8B8]">
              kW
            </button>
          </div>
        </div>
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
          <div className="flex-1">
            <Select
              name="Up To"
              InitialValue={{ label: "Up To", value: "" }}
              Options={[
                { label: "value 1", value: "" },
                { label: "value 2", value: "value 1" },
                { label: "value 3", value: "value 2" },
              ]}
            />
          </div>
        </div>
      </div>
      {/* Transmission */}
      <div className=" mt-4 space-y-3">
        <div>
          <h2 className="font-semibold text-lg whitespace-nowrap">
            Transmission
          </h2>
        </div>
        <div className="flex-1">
          <Input name="Transmission" InitialValue="Transmission" />
        </div>
      </div>
      {/* Wheel drive */}
      <div className="mt-5 mb-3">
        <h2 className="font-semibold text-lg whitespace-nowrap">Wheel drive</h2>
        <div className="flex flex-col gap-y-2 mt-2">
          {/* CheckBox 1 */}
          <div className="flex items-center gap-x-2">
            <CheckedBox isChecked={false} />
            <p className="text-sm">Rear-wheel drive</p>
          </div>
          {/* CheckBox 2 */}
          <div className="flex items-center gap-x-2">
            <CheckedBox isChecked={true} />
            <p className="text-sm">Front-wheel drive</p>
          </div>
          {/* CheckBox 3 */}
          <div className="flex items-center gap-x-2">
            <CheckedBox isChecked={false} />
            <p className="text-sm">Four-wheel drive</p>
          </div>
        </div>
      </div>
      {/* Electric Vehicle */}
      <div className="mt-4 mb-4">
        {/* Section 1 */}
        <div className=" mb-4">
          <h2 className="font-semibold text-lg whitespace-nowrap">
            Electric Vehicles
          </h2>
        </div>
        <div className="flex flex-wrap gap-x-2 gap-y-3  ">
          {/* Range */}
          <div className="space-y-3 flex-[2] min-w-[100px]">
            <div>
              <h2 className="font-semibold text-md ">Range</h2>
            </div>
            {/* Number of range selector */}
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
            </div>
          </div>

          {/* Charge time */}
          <div className="space-y-3 flex-[2]">
            <div>
              <h2 className="font-semibold text-md whitespace-nowrap ">
                Charge time
              </h2>
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
          {/* Fast charge time */}
          <div className="space-y-3 flex-[2] ">
            <div>
              <h2 className="font-semibold text-md whitespace-nowrap ">
                Fast charge time
              </h2>
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

          {/* Battery capacity */}
          <div className="mt-4">
            <h2 className="font-semibold text-md whitespace-nowrap">
              Battery capacity
            </h2>
            <div className="flex lg:flex-row flex-col gap-y-2 flex-wrap gap-x-2 mt-2 max-sm2:w-full ">
              <div className="sm2:flex-1 w-full">
                <Select
                  name="From kWh"
                  InitialValue={{ label: "From kWh", value: "" }}
                  Options={[
                    { label: "value 1", value: "" },
                    { label: "value 2", value: "value 1" },
                    { label: "value 3", value: "value 2" },
                  ]}
                />
              </div>
              <div className="sm2:flex-1 w-full">
                <Select
                  name="Up to kWh"
                  InitialValue={{ label: "Up to kWh", value: "" }}
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
      </div>
      <hr className="mt-10 border-b-0 border-black/25" />
      {/* Extrior color */}
      <div className=" mt-4">
        <h3 className="font-semibold text-lg">Exterior color</h3>
        <div className="grid grid-cols-7 gap-y-4 gap-x-4 mt-3">
          <div className="bg-[#D5B786] h-5 w-5 border border-black/10 rounded-full shrink-0"></div>
          <div className="bg-[#7F6029] h-5 w-5 border border-black/10 rounded-full shrink-0"></div>
          <div className="bg-[#E3C143] h-5 w-5 border border-black/10 rounded-full shrink-0"></div>
          <div className="bg-[#8BB849] h-5 w-5 border border-black/10 rounded-full shrink-0"></div>
          <div className="bg-[#EB5149] h-5 w-5 border border-black/10 rounded-full shrink-0"></div>
          <div className="bg-[#F2F2F2] h-5 w-5 border border-black/20 rounded-full shrink-0"></div>
          <div className="bg-[#FFFFFF] h-5 w-5 border border-black/30 rounded-full shrink-0"></div>
          <div className="bg-[#456DD4] h-5 w-5 border border-black/10 rounded-full shrink-0"></div>
          <div className="bg-[#EFD447] h-5 w-5 border border-black/10 rounded-full shrink-0"></div>
          <div className="bg-[#ABABAB] h-5 w-5 border border-black/10 rounded-full shrink-0"></div>
          <div className="bg-[#EF863E] h-5 w-5 border border-black/10 rounded-full shrink-0"></div>
          <div className="bg-[#333333] h-5 w-5 border border-black/10 rounded-full shrink-0"></div>
          <div className="bg-[#8C63F6] h-5 w-5 border border-black/10 rounded-full shrink-0"></div>
          <div className="bg-[#1E1F24] h-5 w-5 border border-black/10 rounded-full shrink-0 "></div>
        </div>
      </div>
      <hr className="mt-5 border-b-0 border-black/25 " />
      {/* Wheel set */}
      <div className="mt-5 mb-3">
        <h2 className="font-semibold text-lg whitespace-nowrap">Wheel set</h2>
        <div className="flex flex-col gap-y-2 mt-2">
          {/* CheckBox 1 */}
          <div className="flex items-center gap-x-2">
            <CheckedBox isChecked={false} />
            <p className="text-sm">One set of wheels</p>
          </div>
          {/* CheckBox 2 */}
          <div className="flex items-center gap-x-2">
            <CheckedBox isChecked={false} />
            <p className="text-sm">Two wheel sets</p>
          </div>
        </div>
      </div>
      <hr className="mt-5 border-b-0 border-black/25" />
      {/* Eqipment */}
      <div className="mt-5 mb-3">
        <h2 className="font-semibold text-lg whitespace-nowrap">Equipment</h2>
        <div className="flex flex-col gap-y-2 mt-2">
          {/* CheckBox 1 */}
          <div className="flex items-center gap-x-2">
            <CheckedBox isChecked={false} />
            <p className="text-sm">Towbar</p>
          </div>
          {/* CheckBox 2 */}
          <div className="flex items-center gap-x-2">
            <CheckedBox isChecked={false} />
            <p className="text-sm">Engine heater</p>
          </div>
          {/* CheckBox 3 */}
          <div className="flex items-center gap-x-2">
            <CheckedBox isChecked={false} />
            <p className="text-sm">Navigation system</p>
          </div>
          {/* CheckBox 4 */}
          <div className="flex items-center gap-x-2">
            <CheckedBox isChecked={false} />
            <p className="text-sm">Radio DAB+</p>
          </div>
          {/* CheckBox 5 */}
          <div className="flex items-center gap-x-2">
            <CheckedBox isChecked={false} />
            <p className="text-sm">Leather Interior</p>
          </div>
          {/* More Span */}
          <span className="text-sm text-primary underline mt-2">More</span>
        </div>
      </div>
      <hr className="mt-5 border-b-0 border-black/25" />
      {/* Area */}
      <div className="mt-5 mb-3">
        <h2 className="font-semibold text-lg whitespace-nowrap">Area</h2>
        <div className="flex flex-col gap-y-2 mt-2">
          {/* CheckBox 1 */}
          <div className="flex items-center gap-x-2">
            <CheckedBox isChecked={false} />
            <p className="text-sm">Agder</p>
          </div>
          {/* CheckBox 2 */}
          <div className="flex items-center gap-x-2">
            <CheckedBox isChecked={false} />
            <p className="text-sm">Inland</p>
          </div>
          {/* CheckBox 3 */}
          <div className="flex items-center gap-x-2">
            <CheckedBox isChecked={false} />
            <p className="text-sm">More and Romsdal</p>
          </div>
          {/* CheckBox 4 */}
          <div className="flex items-center gap-x-2">
            <CheckedBox isChecked={false} />
            <p className="text-sm">Nordland</p>
          </div>
          {/* CheckBox 5 */}
          <div className="flex items-center gap-x-2">
            <CheckedBox isChecked={false} />
            <p className="text-sm">Oslo</p>
          </div>
          {/* CheckBox 6 */}
          <div className="flex items-center gap-x-2">
            <CheckedBox isChecked={false} />
            <p className="text-sm">Rogaland</p>
          </div>
          {/* CheckBox 7 */}
          <div className="flex items-center gap-x-2">
            <input type="checkbox" />
            <p className="text-sm">Troms and Finnmark</p>
          </div>
          {/* CheckBox 8 */}
          <div className="flex items-center gap-x-2">
            <CheckedBox isChecked={false} />
            <p className="text-sm">Trondelag</p>
          </div>
          {/* CheckBox 9 */}
          <div className="flex items-center gap-x-2">
            <CheckedBox isChecked={false} />
            <p className="text-sm">Vestfold and Telemark</p>
          </div>
          {/* CheckBox 10 */}
          <div className="flex items-center gap-x-2">
            <CheckedBox isChecked={false} />
            <p className="text-sm">Westland</p>
          </div>
          {/* CheckBox 11 */}
          <div className="flex items-center gap-x-2">
            <CheckedBox isChecked={false} />
            <p className="text-sm">Viken</p>
          </div>
        </div>
      </div>
      <hr className="mt-5 border-b-0 border-black/25" />
      {/* Heading */}
      <div className="mt-4">
        <h3 className="text-xl text-[#EF2C2E] font-medium ">Detailed Search</h3>
      </div>
    </div>
  );
};

export default DetailedSearchBox;
