import React from 'react'

const LeasingBox = () => {
  return (
    <div className="bg-[#EDEEF0] w-full border border-black/25 rounded-md px-5 py-5 mt-9  ">
    <h3 className="font-semibold text-xl max-sm:px-2">Leasing</h3>
    <div className="mt-2 max-sm:mt-3 flex max-sm:flex-col max-sm:justify-start max-sm:items-start justify-between items-center gap-y-3  ">
      {/* Duration Div */}
      <div className="flex items-center max-sm:w-full w-[25%] max-sm:px-2 justify-between gap-x-2   ">
        <h4 className="text-[#444444] font-medium text-xs">
          Duration
        </h4>
        <p className="text-black font-bold text-xs whitespace-nowrap">5 months</p>
      </div>
      {/* Horizontal Line */}
      <div className="h-8 border-l-[1px] border-black  max-sm:hidden"></div>
      {/* Leasing Rate */}
      <div className="flex items-center max-sm:w-full w-[26%] max-sm:px-2 justify-between   ">
        <h4 className="text-[#444444] font-medium text-xs ">
          Leasing rate
        </h4>
        <p className="text-black font-bold text-xs">300€</p>
      </div>
      {/* Horizontal Line */}
      <div className="h-8 border-l-[1px] border-black max-sm:hidden"></div>
      {/* Deposit */}
      <div className="flex items-center max-sm:w-full  w-[24%] max-sm:px-2 justify-between   ">
        <h4 className="text-[#444444] font-medium text-xs">
          Deposit
        </h4>
        <p className="text-black font-bold text-xs">9000€</p>
      </div>
    </div>
  </div>
  )
}

export default LeasingBox