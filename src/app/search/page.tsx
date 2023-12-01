import Input from "@/shared/input";
import Select from "@/shared/select";
import React from "react";
import DetailedSearchBox from "./DetailedSearchBox";
import CarSearchProducts from "./CarSearchProducts";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import NoOfPage from "./NoOfPage";

const Search = () => {
  return (
    <section className="mt-10">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 ">
        {/* Home */}
        <div className="flex items-center gap-x-3">
          <h2 className="text-[#003087] font-semibold">Home</h2>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.9668 2.71978L10.3135 7.06645C10.8268 7.57979 10.8268 8.41978 10.3135 8.93312L5.9668 13.2798"
              stroke="#003087"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {/* My Car Search */}
        <div className="flex items-center gap-x-2">
          <h2 className="text-[#003087] font-semibold">My car search</h2>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.9668 2.71978L10.3135 7.06645C10.8268 7.57979 10.8268 8.41978 10.3135 8.93312L5.9668 13.2798"
              stroke="#003087"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {/* No of Offers */}
        <div className="flex items-center gap-x-3">
          <h2 className="text-[#003087] font-semibold">1,421,546 others</h2>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.9668 2.71978L10.3135 7.06645C10.8268 7.57979 10.8268 8.41978 10.3135 8.93312L5.9668 13.2798"
              stroke="#003087"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {/* Car Name / Prodcut Name */}
        <div className="flex items-center ">
          <h2 className="text-[#003087] font-semibold">
            Kia Stonic 1.4 MPI EX URBAN A/T
          </h2>
        </div>
      </div>
      <div className="flex w-full justify-end items-end mt-2 mb-1 pr-2">
        <div className="bg-white rounded-lg">
          <Select
          TriggerCss="!py-2.5"
            name="Standard sorting"
            InitialValue={{ label: "Standard sorting", value: "" }}
            Options={[
              { label: "value 1", value: "" },
              { label: "value 2", value: "value 1" },
              { label: "value 3", value: "value 2" },
            ]}
          />
        </div>
      </div>
      {/* Main Div Conatining Both Left and Right */}
      <div className="flex gap-x-4">
        {/* Letf Side  */}
        <div className="w-[25%] max-sm2:hidden">
          <DetailedSearchBox />
        </div>
        {/* Right Side  */}
        <div className="sm2:w-[73%] w-full  ">
          <div className="relative sm2:hidden ">
            <Dialog>
              <DialogTrigger className="!m-0">
                <div className="bg-primary text-white text-sm  px-3 py-3 rounded-full absolute z-20 top-96 ">
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1477_5366)">
                      <path
                        d="M27.915 3.58984H23.6006C23.2127 1.68658 21.5259 0.25 19.5098 0.25C17.4936 0.25 15.8069 1.68658 15.419 3.58984H1.08496C0.62384 3.58984 0.25 3.96368 0.25 4.4248C0.25 4.88593 0.62384 5.25977 1.08496 5.25977H15.419C15.8068 7.16303 17.4936 8.59961 19.5098 8.59961C21.5259 8.59961 23.2127 7.16303 23.6006 5.25977H27.915C28.3762 5.25977 28.75 4.88593 28.75 4.4248C28.75 3.96368 28.3762 3.58984 27.915 3.58984ZM19.5098 6.92969C18.1288 6.92969 17.0053 5.80639 17.0049 4.42553C17.0049 4.42531 17.0049 4.42508 17.0049 4.4248C17.0049 4.42453 17.0049 4.4243 17.0049 4.42408C17.0053 3.04322 18.1288 1.91992 19.5098 1.91992C20.891 1.91992 22.0146 3.04361 22.0146 4.4248C22.0146 5.806 20.891 6.92969 19.5098 6.92969Z"
                        fill="white"
                      />
                      <path
                        d="M27.915 13.665H13.581C13.1932 11.7618 11.5064 10.3252 9.49023 10.3252C7.47408 10.3252 5.78735 11.7618 5.39943 13.665H1.08496C0.62384 13.665 0.25 14.0389 0.25 14.5C0.25 14.9611 0.62384 15.335 1.08496 15.335H5.39943C5.78729 17.2382 7.47408 18.6748 9.49023 18.6748C11.5064 18.6748 13.1931 17.2382 13.581 15.335H27.915C28.3762 15.335 28.75 14.9611 28.75 14.5C28.75 14.0389 28.3762 13.665 27.915 13.665ZM9.49023 17.0049C8.10926 17.0049 6.98574 15.8816 6.98535 14.5007C6.98535 14.5005 6.98541 14.5003 6.98541 14.5C6.98541 14.4997 6.98535 14.4995 6.98535 14.4993C6.98574 13.1184 8.10926 11.9951 9.49023 11.9951C10.8714 11.9951 11.9951 13.1188 11.9951 14.5C11.9951 15.8812 10.8714 17.0049 9.49023 17.0049Z"
                        fill="white"
                      />
                      <path
                        d="M27.915 23.7402H23.6006C23.2127 21.837 21.5259 20.4004 19.5098 20.4004C17.4936 20.4004 15.8069 21.837 15.419 23.7402H1.08496C0.62384 23.7402 0.25 24.1141 0.25 24.5752C0.25 25.0363 0.62384 25.4102 1.08496 25.4102H15.419C15.8068 27.3134 17.4936 28.75 19.5098 28.75C21.5259 28.75 23.2127 27.3134 23.6006 25.4102H27.915C28.3762 25.4102 28.75 25.0363 28.75 24.5752C28.75 24.1141 28.3762 23.7402 27.915 23.7402ZM19.5098 27.0801C18.1288 27.0801 17.0053 25.9568 17.0049 24.5759C17.0049 24.5757 17.0049 24.5755 17.0049 24.5752C17.0049 24.5749 17.0049 24.5747 17.0049 24.5745C17.0053 23.1936 18.1288 22.0703 19.5098 22.0703C20.891 22.0703 22.0146 23.194 22.0146 24.5752C22.0146 25.9564 20.891 27.0801 19.5098 27.0801Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1477_5366">
                        <rect
                          width="28.5"
                          height="28.5"
                          fill="white"
                          transform="translate(0.25 0.25)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </DialogTrigger>
              <div className="sm2:hidden">
                <DialogContent className="!p-0 !w-full">
                  <div className=" overflow-scroll max-h-[90vh]  ">
                    <DetailedSearchBox />
                  </div>
                </DialogContent>
              </div>
            </Dialog>
          </div>
          <CarSearchProducts  />
          <div className="mt-10 flex flex-wrap justify-center gap-x-2 gap-y-3 mb-10">
            <NoOfPage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
