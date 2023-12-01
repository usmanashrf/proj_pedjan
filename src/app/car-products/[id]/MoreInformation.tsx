import React from "react";
import { moreInformationData1 } from "@/assets/data/more-information-data1";
import { generalInformationData2 } from "@/assets/data/general-information-data2";
const GeneralInformation = () => {
  return (
    <div className="bg-[#EDEEF0] w-full border border-black/25 rounded-md  py-5 mt-9  ">
      <h3 className="font-semibold text-xl px-4 ">More Information</h3>
      <div className="flex max-sm:flex-col  flex-wrap  ">
      {/* Here grid starts */}
      <div className="flex flex-1 md:text-xs  flex-col justify-between w-full gap-y-3 mt-4 ">
        {moreInformationData1.map((moreInformation, index) => (
          <div
            key={index}
            className="flex   justify-between items-center  "
          >
            <h4 className="text-[#444444] font-medium text-xs md:text-[12px] lg:pl-8 md:pl-5 pl-4">
              {moreInformation.title}
            </h4>
            <p className="text-black font-bold text-xs md:text-[12px] lg:pr-8 md:pr-5 pr-6">{moreInformation.value}</p>
          </div>
        ))}
      </div>
      <div className="h-60 border-l-[1px] border-black/25 max-sm:hidden">

      </div>
      <div className="flex flex-1 flex-col justify-between w-full  gap-y-3 mt-3 ">
        {generalInformationData2.map((moreInformation, index) => (
          <div
            key={index}
            className="flex justify-between items-center  "
          >
            <h4 className="text-[#444444] font-medium text-xs md:text-[12px] lg:pl-8 md:pl-5 pl-4">
              {moreInformation.title}
            </h4>
            <p className="text-black font-bold text-xs md:text-[12px] lg:pr-8 md:pr-5 pr-6">{moreInformation.value}</p>
          </div>
        ))}
      </div>
      </div>


    </div>
  );
};

export default GeneralInformation;
