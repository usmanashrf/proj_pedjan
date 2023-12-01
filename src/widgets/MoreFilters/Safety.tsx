import { safetyData } from "@/assets/data/safety-data";
import React from "react";

const Safety = () => {
  return (
    <div className="xs1:px-8 pl-8">
      <div className="mb-4">
        <h3 className="font-semibold text-lg">Safety</h3>
      </div>
      <hr />
      <div className="mt-10 mb-10">
        {/* Grid */}
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 xs:gap-x-10 gap-x-5 gap-y-4 flex-wrap max-xs1:pr-10   ">
          {safetyData.map((feature) => (
            <div key={feature.id}>
              <div className="flex items-center gap-x-2">
                <input type="radio" />
                <h4 className="text-sm font-normal xs:whitespace-nowrap">{feature.label}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Safety;
