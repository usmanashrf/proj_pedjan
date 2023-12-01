import Select from "@/shared/select";
import React from "react";

const ElectricVehicle = () => {
  return (
    <div className="mt-6 mb-6">
      {/* Section 1 */}
      <div className="px-8 mb-5">
        <h2 className="font-bold text-xl">Electric Vehicles</h2>
      </div>
      <div className="flex flex-wrap px-8 gap-x-5 gap-y-5  ">
        {/* Range */}
          <div className="space-y-3 flex-[2] min-w-[100px]">
            <div>
              <h2 className="font-semibold text-lg ">Range</h2>
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
              <h2 className="font-semibold text-lg whitespace-nowrap ">
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
              <h2 className="font-semibold text-lg whitespace-nowrap ">
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
          <div className="space-y-2 flex-[2] min-w-[250px]">
            <div>
              <h2 className="font-semibold text-lg whitespace-nowrap">
                Battery capacity
              </h2>
            </div>
            <div className="flex gap-x-2">
              <div className="flex-1">
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
              <div className="flex-1">
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
  );
};

export default ElectricVehicle;
