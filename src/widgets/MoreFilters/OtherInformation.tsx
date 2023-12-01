import { otherInformationData } from "@/assets/data/other-information";
import { safetyData } from "@/assets/data/safety-data";
import React from "react";

const OtherInformation = () => {
  return (
    <div className="xs1:px-8 pl-8 pb-8">
      <div className="mb-4">
        <h3 className="font-semibold text-lg">Other Information</h3>
      </div>
      <hr />
      <div className="mt-10 mb-10">
        {/* Grid */}
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 xs:gap-x-10 gap-x-5 gap-y-4 flex-wrap max-xs1:pr-10   ">
          {otherInformationData.map((informationData) => (
            <div key={informationData.id} className="">
              <div className="flex items-center gap-x-2">
                <input type="radio" />
                <h4 className="text-sm font-normal xs!:whitespace-nowrap">
                  {informationData.label}
                </h4>
                {informationData.isImportant && (
                  <svg className="shrink-0"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99967 1.3335C4.32634 1.3335 1.33301 4.32683 1.33301 8.00016C1.33301 11.6735 4.32634 14.6668 7.99967 14.6668C11.673 14.6668 14.6663 11.6735 14.6663 8.00016C14.6663 4.32683 11.673 1.3335 7.99967 1.3335ZM7.49967 5.3335C7.49967 5.06016 7.72634 4.8335 7.99967 4.8335C8.27301 4.8335 8.49967 5.06016 8.49967 5.3335V8.66683C8.49967 8.94016 8.27301 9.16683 7.99967 9.16683C7.72634 9.16683 7.49967 8.94016 7.49967 8.66683V5.3335ZM8.61301 10.9202C8.57967 11.0068 8.53301 11.0735 8.47301 11.1402C8.40634 11.2002 8.33301 11.2468 8.25301 11.2802C8.17301 11.3135 8.08634 11.3335 7.99967 11.3335C7.91301 11.3335 7.82634 11.3135 7.74634 11.2802C7.66634 11.2468 7.59301 11.2002 7.52634 11.1402C7.46634 11.0735 7.41967 11.0068 7.38634 10.9202C7.35301 10.8402 7.33301 10.7535 7.33301 10.6668C7.33301 10.5802 7.35301 10.4935 7.38634 10.4135C7.41967 10.3335 7.46634 10.2602 7.52634 10.1935C7.59301 10.1335 7.66634 10.0868 7.74634 10.0535C7.90634 9.98683 8.09301 9.98683 8.25301 10.0535C8.33301 10.0868 8.40634 10.1335 8.47301 10.1935C8.53301 10.2602 8.57967 10.3335 8.61301 10.4135C8.64634 10.4935 8.66634 10.5802 8.66634 10.6668C8.66634 10.7535 8.64634 10.8402 8.61301 10.9202Z"
                      fill="#003087"
                    />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherInformation;
