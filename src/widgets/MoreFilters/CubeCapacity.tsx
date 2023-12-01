import Select from '@/shared/select'
import React from 'react'

const CubeCapacity = () => {
  return (
    <div className="mt-6 mb-6">
    {/* Section 1 */}
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-8 gap-x-5 gap-y-5 ">
      {/* Car Information About Number Of Seats, Ownership, Condition */}
      <div className="space-y-3  lg:max-w-[250px] ">
        <div>
          <h2 className="font-semibold text-lg whitespace-nowrap">Cube capacity</h2>
        </div>
        <div className="flex gap-x-2">
          <div className="flex-1">
            <Select
              name="From"
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
        <div className='flex items-start gap-x-2'>
          <h2 className="font-semibold text-lg">Power</h2>
          <div className='flex gap-x-2 font-medium text-sm'>
                <button className='px-4 h-7 bg-[#EF2C2E] text-white text-center rounded-lg'>Hp</button>
                <button className='px-4 h-7 bg-white text-[#003087] text-center rounded-lg border border-[#B8B8B8]'>kW</button>
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

      {/* Type and Condition Selector */}
      <div className="space-y-3 flex-[2]">
        <div>
          <h2 className="font-semibold text-lg whitespace-nowrap">
          Transmission
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

      {/* Ownership Selector */}
      <div className="space-y-3 flex-[2]">
        <div>
          <h2 className="font-semibold text-lg whitespace-nowrap">
          Emission class
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
    </div>
  </div>
  )
}

export default CubeCapacity