import React from 'react'

const PriceChangeBox = () => {
  return (
    <div className="bg-[#EDEEF0] w-full border border-black/25 rounded-md px-5 py-5 mt-9  ">
    <h3 className="font-semibold text-xl mb-6 max-sm:mb-3 max-sm:px-2">
      Price for charging at home / per month
    </h3>
    <div className="flex flex-wrap gap-x-3 gap-y-6 items-center justify-between md:w-full max-sm:px-2">
      {/* Price/month */}
      <div className="flex flex-1 items-baseline gap-x-4 max-sm:gap-x-3   ">
        <p className="text-lg max-xs1:text-md text-[#444444]">Price/month</p>
        <p className="text-[#EF2C2E] text-3xl max-xs1:text-2xl font-semibold whitespace-nowrap">
          168 kr
        </p>
        <p className="text-sm  max-xs1:text-xs text-[#444444] italic">0,16nok/km</p>
      </div>
      {/* Kilometer per year */}
      <div className="flex flex-2 items-end    relative gap-x-2   ">
        <span className="absolute -top-4 text-xs text-[#444444] italic">
          Kilometers per year
        </span>
        <div className=" py-2 px-16 border border-[#003087] rounded-md text-[#444444] text-left justify-start">
          11000
        </div>
        <div className="py-3 px-4 text-white whitespace-nowrap bg-[#003087] text-xs rounded-md">
          See price for
        </div>
      </div>
    </div>
  </div>
  )
}

export default PriceChangeBox