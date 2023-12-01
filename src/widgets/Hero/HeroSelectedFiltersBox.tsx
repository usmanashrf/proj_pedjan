import React from "react";
import { FilterItem } from "./FilterItem";

const HeroSectionFilterBox = () => {
  return (
    <div className="flex flex-wrap sm:justify-between justify-center  bg-white w-full rounded-2xl shadow-lg mt-10 px-5 py-6 gap-y-5">
      <div className="flex flex-wrap gap-y-3 items-center gap-x-3  min-w-[340px]">
        <FilterItem label="Metallic Color" />
        <FilterItem label="Restored" />
        <FilterItem label="LED headlights" />
        <FilterItem label="Child lock" />
        <FilterItem label="Seat Heating" />
      </div>
      <div className="bg-[#EF2C2E] flex items-center px-6 py-4 rounded-lg gap-x-2">
        <h3 className="text-white text-sm">Reset Filters</h3>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5L5 15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 5L15 15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSectionFilterBox;
