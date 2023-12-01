import React from "react";

const ExteriorColor = () => {
  return (
    <div className="mb-4 mt-4 flex max-sm:flex-col ">
      {/* Exterior Color */}
      <div className=" pl-8 sm:pr-6 pr-8  space-y-3 mb-2 ">
        {/* Heading */}
        <div>
          <h2 className="font-semibold text-lg">Exterior Color</h2>
        </div>
        {/* Color Box 1 */}
        <div className="border border-black/25 max-w-[800px] rounded-lg pl-5 max-xs1:pr-10 md:pr-8 sm:pr-14 lg:pr-10 py-5 grid xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-3  items-center flex-wrap gap-x-8 gap-y-4 max-xs1:text-sm max-xs:gap-x-16 max-xs1:gap-x-14 sm:text-sm sm:gap-x-14   ">
        {/* <div className="border border-black/25 max-w-[780px] rounded-lg  px-4 py-3 flex items-center flex-wrap gap-x-12 gap-y-5   "> */}
            <div className="flex items-center gap-x-1">
              <div className="bg-[#D5B786] h-4 w-4 border border-black/30 rounded-full shrink-0"></div>
              <h4>Beige</h4>
            </div>
            <div className="flex items-center gap-x-1">
              <div className="bg-[#7F6029] h-4 w-4 border border-black/30 rounded-full shrink-0"></div>
              <h4>Brown</h4>
            </div>
            <div className="flex items-center gap-x-1">
              <div className="bg-[#E3C143] h-4 w-4 border border-black/30 rounded-full shrink-0"></div>
              <h4>Gold</h4>
            </div>
            <div className="flex items-center gap-x-1">
              <div className="bg-[#8BB849] h-4 w-4 border border-black/30 rounded-full shrink-0"></div>
              <h4>Green</h4>
            </div>
            <div className="flex items-center gap-x-1">
              <div className="bg-[#EB5149] h-4 w-4 border border-black/30 rounded-full shrink-0"></div>
              <h4>Red</h4>
            </div>
            <div className="flex items-center gap-x-1">
              <div className="bg-[#F2F2F2] h-4 w-4 border border-black/30 rounded-full shrink-0"></div>
              <h4>Silver</h4>
            </div>
            <div className="flex items-center gap-x-1">
              <div className="bg-[#FFFFFF] h-4 w-4 border border-black/30 rounded-full shrink-0"></div>
              <h4>White</h4>
            </div>
            <div className="flex items-center gap-x-1">
              <div className="bg-[#456DD4] h-4 w-4 border border-black/30 rounded-full shrink-0"></div>
              <h4>Blue</h4>
            </div>
            <div className="flex items-center gap-x-1">
              <div className="bg-[#EFD447] h-4 w-4 border border-black/30 rounded-full shrink-0"></div>
              <h4>Yellow</h4>
            </div>
            <div className="flex items-center gap-x-1">
              <div className="bg-[#ABABAB] h-4 w-4 border border-black/30 rounded-full shrink-0"></div>
              <h4>Grey</h4>
            </div>
            <div className="flex items-center gap-x-1">
              <div className="bg-[#EF863E] h-4 w-4 border border-black/30 rounded-full shrink-0"></div>
              <h4>Orange</h4>
            </div>
            <div className="flex items-center gap-x-1">
              <div className="bg-[#333333] h-4 w-4 border border-black/30 rounded-full shrink-0"></div>
              <h4>Black</h4>
            </div>
            <div className="flex items-center gap-x-1">
              <div className="bg-[#8C63F6] h-4 w-4 border border-black/30 rounded-full shrink-0"></div>
              <h4>Purple</h4>
            </div>
            <div className="flex items-center gap-x-1">
              <div className="bg-[#1E1F24] h-4 w-4 border border-black/30 rounded-full shrink-0 "></div>
              <h4>Metallic</h4>
            </div>
          </div>
        </div>
        {/* Interior Color */}
        <div className="max-sm:pr-8 max-sm:pl-8 pr-8 space-y-3 ">
        {/* Heading */}
        <div>
          <h2 className="font-semibold text-lg whitespace-nowrap">Interior Color</h2>
        </div>
        {/* Color Box 2 */}
        <div className="border border-black/25 max-w-[800px] rounded-lg  max-sm:px-6 pr-9 max-lg:pl-4 pl-3 py-5 grid lg:grid-cols-4 grid-cols-3   items-center flex-wrap gap-x-10 gap-y-4 max-xs1:text-sm  sm:text-sm sm:gap-x-14  ">
        {/* <div className="border border-black/25 max-w-[780px] rounded-lg  px-4 py-3 flex items-center flex-wrap gap-x-12 gap-y-5   "> */}
            <div className="flex items-center gap-x-1">
              <div className="bg-[#D5B786] h-4 w-4 border border-black/30 rounded-full shrink-0"></div>
              <h4>Beige</h4>
            </div>
            <div className="flex items-center gap-x-1">
              <div className="bg-[#7F6029] h-4 w-4 border border-black/30 rounded-full shrink-0"></div>
              <h4>Brown</h4>
            </div>
            <div className="flex items-center gap-x-1">
              <div className="bg-[#E3C143] h-4 w-4 border border-black/30 rounded-full shrink-0"></div>
              <h4>Gold</h4>
            </div>
            <div className="flex items-center gap-x-1">
              <div className="bg-[#8BB849] h-4 w-4 border border-black/30 rounded-full shrink-0"></div>
              <h4>Green</h4>
            </div>
            <div className="flex items-center gap-x-1">
              <div className="bg-[#EB5149] h-4 w-4 border border-black/30 rounded-full shrink-0"></div>
              <h4>Red</h4>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ExteriorColor;
