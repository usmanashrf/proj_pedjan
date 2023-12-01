import { equipmentsData } from "@/assets/data/equipment-data";
import React from "react";

const Equipment = () => {
  return (
    <div className="xs1:px-8 pl-8">
      <div className="mb-4">
        <h3 className="font-semibold text-lg">Equipment</h3>
      </div>
      <hr />
      <div className="mt-10 mb-10 text-sm font-normal">
        {/* Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 xs:gap-x-10 gap-x-5 gap-y-4 flex-wrap max-xs1:pr-10  ">
          {equipmentsData.map((equipment) => (
            <div key={equipment.id}>
              <div className="flex items-center gap-x-2">
                <input type="radio" />
                <h4 className="xs1:text-xs text-[12px] font-normal xs1:whitespace-nowrap">{equipment.label}</h4>
              </div>
              {/* You can add more elements based on your safety data */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipment;
