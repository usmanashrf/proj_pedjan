import Select from "@/shared/select";
import React from "react";

const CarInteriorDetails = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 xs1:grid-cols-2 grid-cols-1 px-8 gap-x-5 gap-y-4 mb-8">
        {/* Car Information About Number Of Seats, Ownership, Condition */}
        <div className="space-y-2 flex-[2]">
          <div>
            <h2 className="font-semibold text-lg whitespace-nowrap">
              Interior material
            </h2>
          </div>
          <div className="flex-[2]">
            <Select
              name="4"
              InitialValue={{ label: "", value: "" }}
              Options={[
                { label: "value 1", value: "" },
                { label: "value 2", value: "value 1" },
                { label: "value 3", value: "value 2" },
              ]}
            />
          </div>
        </div>

        {/* Number of Doors Selector */}
        <div className="space-y-2 flex-[2]">
          <div>
            <h2 className="font-semibold text-lg whitespace-nowrap">
              Steering wheel side
            </h2>
          </div>
          <div className="flex-[2]">
            <Select
              name="4"
              InitialValue={{ label: "", value: "" }}
              Options={[
                { label: "value 1", value: "" },
                { label: "value 2", value: "value 1" },
                { label: "value 3", value: "value 2" },
              ]}
            />
          </div>
        </div>

        {/* Type and Condition Selector */}
        <div className="space-y-2 flex-[2]">
          <div>
            <h2 className="font-semibold text-lg whitespace-nowrap">
              Aircondition
            </h2>
          </div>
          <div className="flex-1">
            <Select
              name="Any"
              InitialValue={{ label: "", value: "" }}
              Options={[
                { label: "value 1", value: "" },
                { label: "value 2", value: "value 1" },
                { label: "value 3", value: "value 2" },
              ]}
            />
          </div>
        </div>

        {/* Ownership Selector */}
        <div className="space-y-2 flex-[2]">
          <div>
            <h2 className="font-semibold text-lg whitespace-nowrap">
              Registered until
            </h2>
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

        {/* Section 2 */}

        <div className="space-y-2 lg:max-w-[250px]  ">
          <div>
            <h2 className="font-semibold text-lg whitespace-nowrap">
              Type of drive
            </h2>
          </div>
          <Select
            name="Home Plates"
            InitialValue={{ label: "", value: "" }}
            Options={[
              { label: "value 1", value: "" },
              { label: "value 2", value: "value 1" },
              { label: "value 3", value: "value 2" },
            ]}
          />
        </div>

        <div className="space-y-2 lg:max-w-[250px]   ">
          <div>
            <h2 className="font-semibold text-lg whitespace-nowrap">
              Ads by all advertisers
            </h2>
          </div>
          <Select
            name="4"
            InitialValue={{ label: "", value: "" }}
            Options={[
              { label: "value 1", value: "" },
              { label: "value 2", value: "value 1" },
              { label: "value 3", value: "value 2" },
            ]}
          />
        </div>

        <div className="space-y-2 lg:max-w-[250px]  ">
          <div>
            <h2 className="font-semibold text-lg whitespace-nowrap">Regions</h2>
          </div>
          <Select
            name="4"
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
  );
};

export default CarInteriorDetails;
