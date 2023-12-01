import { safetyData } from "@/assets/data/safety-data";
import React from "react";

const SafetyInformation = () => {
  return (
    <div className="bg-[#EDEEF0] w-full border border-black/25 rounded-md px-5 py-5 mt-9 ">
      <h3 className="font-semibold text-xl ">Safety Information</h3>
      <div className="mt-4 mb-2">
        {/* Grid */}
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 xs:gap-x-10 gap-x-5 gap-y-4 flex-wrap max-xs1:pr-10    ">
          {safetyData.map((feature) => (
            <div key={feature.id}>
              <div className="flex items-center ">
                <h4 className="text-xs text-black font-medium xs:whitespace-nowrap">
                  {feature.label}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SafetyInformation;
