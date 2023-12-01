import { equipmentsData } from "@/assets/data/equipment-data";
import { safetyData } from "@/assets/data/safety-data";
import React from "react";

const EquipmentInformation = () => {
  return (
    <div className="bg-[#EDEEF0] w-full border border-black/25 rounded-md px-5 py-5 mt-9 md:mt-9 ">
      <h3 className="font-semibold text-xl ">Equipment Information</h3>
      <div className="mt-4 mb-2">
        {/* Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 xs:gap-x-10 gap-x-5 gap-y-4 flex-wrap max-xs1:pr-10 md:pr-4   ">
          {equipmentsData.map((equipment) => (
            <div key={equipment.id}>
              <div className="flex items-center ">
                <h4 className="xs1:text-xs text-[10.5px] md:text-[10.8px] lg:text-[11.1px] font-normal xs:whitespace-nowrap">{equipment.label}</h4>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
  );
};

export default EquipmentInformation;
