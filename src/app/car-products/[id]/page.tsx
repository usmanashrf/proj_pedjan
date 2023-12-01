import React from "react";
import Technodrom from "@/assets/images/technodrom.png";
import Image from "next/image";
import LeasingBox from "./LeasingBox";
import PriceChangeBox from "./PriceChangeBox";
import GeneralInformation from "./GeneralInformation";
import MoreInformation from "./MoreInformation";
import SafetyInformation from "./SafetyInformation";
import EquipmentInformation from "./EquipmentInformation";
import Description from "./Description";
import CarSlider1 from "./CarSlider1";
import CarSlider2 from "./CarSlider2";
import MoreCarsSwiper from "./MoreCarsSwiper";

const CarProducts = () => {
  return (
    <section className="mt-10">
      {/* Page Path Navigation */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
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
          <h2 className="text-[#003087] font-semibold">Ford Mondeo ST Line</h2>
        </div>
      </div>
      {/* Main Section */}
      <div className="mt-10  ">
        {/* Heading Car Name */}
        <div className="flex items-center gap-x-3 px-4">
          <h3 className="xs1:text-xl sm:text-2xl text-lg font-semibold whitespace-nowrap">
            Ford Mondeo ST Line
          </h3>
          <p className="xs1:text-xl sm:text-2xl text-lg text-[#808080] font-medium whitespace-nowrap">
            - 2019 year
          </p>
        </div>
        {/* Car Image Nd Variants */}
        <div className="w-full flex md:flex-row flex-col mt-5 lg:gap-x-5 md:gap-x-4 relative">
          <div className="  md:w-[72%] w-full   ">
            {/* Swiper div */}
            <div className="w-full px-4  ">
              <CarSlider1 />
            </div>
            {/* Car Details */}
            <div className="bg-white w-full  border border-black/25 relative px-4 xs1:py-6 sm:py-8 md:py-5 lg:py-8 pb-4 xs1:-top-20 -top-16  rounded-2xl  ">
  
              {/* Car Info 1st Row */}

              <div className="grid sm:grid-cols-4 grid-cols-6 items-center  mt-20 max-xs1:mt-24   gap-y-6     ">
                <div className=" text-center text-sm xs:space-y-1 space-y-2 border-r-2 border-r-black/25 max-sm:col-span-2  ">
                  <h2 className=" font-light ">Mileage</h2>
                  <p className=" font-bold mb-2 xs1:text-base text-sm">150,000 km</p>
                  {/* <div className="h-8 border-l-[1px] border-black"></div> */}
                </div>

                <div className="text-center text-sm xs:space-y-1 space-y-2 border-r-2 border-r-black/25 max-sm:col-span-2  ">
                  <h2 className=" font-light ">Year</h2>
                  <p className="font-bold mb-2 xs1:text-base text-sm">2019</p>
                </div>
                {/* <div className="h-8 border-l-[1px] border-black"></div> */}

                <div className="text-center text-sm xs:space-y-1 space-y-2  sm:border-r-2 sm:border-r-black/25 max-sm:col-span-2">
                  <h2 className=" font-light ">Power</h2>
                  <p className=" font-bold mb-2 xs1:text-base text-sm">75HP</p>
                </div>
                {/* <div className="h-8 border-l-[1px] border-black"></div> */}

                <div className="text-center text-sm xs:space-y-1 space-y-2  max-sm:col-span-2 max-sm:border-r-2 max-sm:border-r-black/25">
                  <h2 className=" font-light ">Fuel Type</h2>
                  <p className=" font-bold mb-2 xs1:text-base text-sm">Diesel</p>
                </div>

                {/* Car Info 2nd Row */}

                <div className="text-center text-sm xs:space-y-1 space-y-2  border-r-2 border-r-black/25 max-sm:col-span-2  ">
                  <h2 className=" font-light whitespace-nowrap ">
                    Gearbox type
                  </h2>
                  <p className=" font-bold mb-2 xs1:text-base text-sm">Manual</p>
                </div>

                <div className="flex flex-col items-center text-center text-sm xs:space-y-1  space-y-2  sm:border-r-2 sm:border-r-black/25 max-sm:col-span-2  ">
                  <h2 className=" font-light  ">EU control</h2>
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.91666 6.69875C1.62437 6.69953 1.33829 6.77847 1.09151 6.92644C0.844731 7.07441 0.647338 7.28537 0.522169 7.53491C0.397 7.78445 0.34917 8.06236 0.384213 8.33651C0.419256 8.61066 0.53574 8.86983 0.720189 9.08405L4.6522 13.6346C4.79239 13.7991 4.9721 13.9296 5.17639 14.0153C5.38068 14.1009 5.60367 14.1393 5.82681 14.1272C6.30407 14.103 6.73496 13.8618 7.00967 13.4652L15.1775 1.03777C15.1788 1.03571 15.1802 1.03365 15.1816 1.03161C15.2583 0.920446 15.2334 0.700138 15.0752 0.561738C15.0318 0.523731 14.9805 0.494532 14.9247 0.475938C14.8688 0.457343 14.8095 0.449748 14.7505 0.453619C14.6914 0.45749 14.6338 0.472746 14.5812 0.498448C14.5286 0.524149 14.4821 0.559751 14.4446 0.603061C14.4417 0.606466 14.4387 0.60982 14.4356 0.613122L6.19826 9.40586C6.16692 9.43932 6.12885 9.46656 6.08626 9.486C6.04368 9.50545 5.99744 9.5167 5.95021 9.51912C5.90299 9.52153 5.85572 9.51505 5.81117 9.50006C5.76662 9.48507 5.72566 9.46187 5.69068 9.4318L2.95687 7.08146C2.67294 6.83556 2.30184 6.69903 1.91666 6.69875Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-center text-center text-sm xs:space-y-1 space-y-2  border-r-2 border-r-black/25 max-sm:col-span-3 ">
                  <h2 className=" font-light whitespace-nowrap ">
                    Kjøpt ny i NORGE
                  </h2>
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.91666 6.69875C1.62437 6.69953 1.33829 6.77847 1.09151 6.92644C0.844731 7.07441 0.647338 7.28537 0.522169 7.53491C0.397 7.78445 0.34917 8.06236 0.384213 8.33651C0.419256 8.61066 0.53574 8.86983 0.720189 9.08405L4.6522 13.6346C4.79239 13.7991 4.9721 13.9296 5.17639 14.0153C5.38068 14.1009 5.60367 14.1393 5.82681 14.1272C6.30407 14.103 6.73496 13.8618 7.00967 13.4652L15.1775 1.03777C15.1788 1.03571 15.1802 1.03365 15.1816 1.03161C15.2583 0.920446 15.2334 0.700138 15.0752 0.561738C15.0318 0.523731 14.9805 0.494532 14.9247 0.475938C14.8688 0.457343 14.8095 0.449748 14.7505 0.453619C14.6914 0.45749 14.6338 0.472746 14.5812 0.498448C14.5286 0.524149 14.4821 0.559751 14.4446 0.603061C14.4417 0.606466 14.4387 0.60982 14.4356 0.613122L6.19826 9.40586C6.16692 9.43932 6.12885 9.46656 6.08626 9.486C6.04368 9.50545 5.99744 9.5167 5.95021 9.51912C5.90299 9.52153 5.85572 9.51505 5.81117 9.50006C5.76662 9.48507 5.72566 9.46187 5.69068 9.4318L2.95687 7.08146C2.67294 6.83556 2.30184 6.69903 1.91666 6.69875Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="text-center text-sm xs:space-y-1 space-y-2 max-sm:col-span-3 ">
                  <h2 className=" font-light ">Vehicle Type</h2>
                  <p className=" font-bold mb-2 xs1:text-base text-sm">Sedan</p>
                </div>
              </div>
              <div className="max-md:hidden">
                {/* Leasing Box */}
                <LeasingBox />
                {/* Price for charging at home */}
                <PriceChangeBox />
                {/* General Information */}
                <GeneralInformation />
                {/* More Information */}
                <MoreInformation />
                {/* Safety Information */}
                <SafetyInformation />
                {/* Equipment Information */}
                <EquipmentInformation />
                {/* Description */}
                <Description />
              </div>
            </div>
          </div>
          <div className="md:w-[32%] w-full ">
            {/* Car Details Box  */}
            <div className="bg-white w-full lg:px-4 md:px-2.5 px-5 py-4 rounded-md border border-black/25 ">
              <div className="flex items-center justify-between pr-2">
                <h2 className="text-[#EF2C2E] text-xl font-semibold ">
                  NOK 369,000
                </h2>
                <del>
                  <p className="text-[#444444] whitespace-nowrap">24,250 €</p>
                </del>
              </div>
              <h2 className="font-medium text-base mt-1 mb-4">€16,980</h2>
              <hr className="border border-black/20"/>
              <div className="flex lg:flex-row md:flex-col md:justify-center items-center  lg:justify-between justify-between mt-2 ">
                <h3 className="text-base font-semibold mt-1">Technodrom</h3>
                <Image src={Technodrom} alt="Logo-Image" />
              </div>
              <div className="flex lg:flex-row md:flex-col sm:justify-start sm:items-start md:justify-center md:items-center lg:justify-start lg:items-start ">
                <svg
                  width="100"
                  height="20"
                  viewBox="0 0 100 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.23915 2.34164C9.47864 1.60459 10.5214 1.60459 10.7608 2.34164L12.0655 6.35704C12.1726 6.68666 12.4798 6.90983 12.8264 6.90983H17.0484C17.8234 6.90983 18.1456 7.90152 17.5186 8.35704L14.1029 10.8387C13.8226 11.0424 13.7052 11.4035 13.8123 11.7331L15.117 15.7485C15.3565 16.4856 14.5129 17.0985 13.8859 16.643L10.4702 14.1613C10.1898 13.9576 9.81016 13.9576 9.52977 14.1613L6.11407 16.643C5.48709 17.0985 4.64351 16.4856 4.88299 15.7485L6.18768 11.7331C6.29478 11.4035 6.17745 11.0424 5.89706 10.8387L2.48135 8.35704C1.85438 7.90152 2.1766 6.90983 2.95158 6.90983H7.17363C7.52021 6.90983 7.82737 6.68666 7.93447 6.35704L9.23915 2.34164Z"
                    fill="#FFC700"
                  />
                  <path
                    d="M29.2392 2.34164C29.4786 1.60459 30.5214 1.60459 30.7608 2.34164L32.0655 6.35704C32.1726 6.68666 32.4798 6.90983 32.8264 6.90983H37.0484C37.8234 6.90983 38.1456 7.90152 37.5186 8.35704L34.1029 10.8387C33.8226 11.0424 33.7052 11.4035 33.8123 11.7331L35.117 15.7485C35.3565 16.4856 34.5129 17.0985 33.8859 16.643L30.4702 14.1613C30.1898 13.9576 29.8102 13.9576 29.5298 14.1613L26.1141 16.643C25.4871 17.0985 24.6435 16.4856 24.883 15.7485L26.1877 11.7331C26.2948 11.4035 26.1774 11.0424 25.8971 10.8387L22.4814 8.35704C21.8544 7.90152 22.1766 6.90983 22.9516 6.90983H27.1736C27.5202 6.90983 27.8274 6.68666 27.9345 6.35704L29.2392 2.34164Z"
                    fill="#FFC700"
                  />
                  <path
                    d="M49.2392 2.34164C49.4786 1.60459 50.5214 1.60459 50.7608 2.34164L52.0655 6.35704C52.1726 6.68666 52.4798 6.90983 52.8264 6.90983H57.0484C57.8234 6.90983 58.1456 7.90152 57.5186 8.35704L54.1029 10.8387C53.8226 11.0424 53.7052 11.4035 53.8123 11.7331L55.117 15.7485C55.3565 16.4856 54.5129 17.0985 53.8859 16.643L50.4702 14.1613C50.1898 13.9576 49.8102 13.9576 49.5298 14.1613L46.1141 16.643C45.4871 17.0985 44.6435 16.4856 44.883 15.7485L46.1877 11.7331C46.2948 11.4035 46.1774 11.0424 45.8971 10.8387L42.4814 8.35704C41.8544 7.90152 42.1766 6.90983 42.9516 6.90983H47.1736C47.5202 6.90983 47.8274 6.68666 47.9345 6.35704L49.2392 2.34164Z"
                    fill="#FFC700"
                  />
                  <path
                    d="M69.2392 2.34164C69.4786 1.60459 70.5214 1.60459 70.7608 2.34164L72.0655 6.35704C72.1726 6.68666 72.4798 6.90983 72.8264 6.90983H77.0484C77.8234 6.90983 78.1456 7.90152 77.5186 8.35704L74.1029 10.8387C73.8226 11.0424 73.7052 11.4035 73.8123 11.7331L75.117 15.7485C75.3565 16.4856 74.5129 17.0985 73.8859 16.643L70.4702 14.1613C70.1898 13.9576 69.8102 13.9576 69.5298 14.1613L66.1141 16.643C65.4871 17.0985 64.6435 16.4856 64.883 15.7485L66.1877 11.7331C66.2948 11.4035 66.1774 11.0424 65.8971 10.8387L62.4814 8.35704C61.8544 7.90152 62.1766 6.90983 62.9516 6.90983H67.1736C67.5202 6.90983 67.8274 6.68666 67.9345 6.35704L69.2392 2.34164Z"
                    fill="#FFC700"
                  />
                  <path
                    d="M89.2392 2.34164C89.4786 1.60459 90.5214 1.60459 90.7608 2.34164L92.0655 6.35704C92.1726 6.68666 92.4798 6.90983 92.8264 6.90983H97.0484C97.8234 6.90983 98.1456 7.90152 97.5186 8.35704L94.1029 10.8387C93.8226 11.0424 93.7052 11.4035 93.8123 11.7331L95.117 15.7485C95.3565 16.4856 94.5129 17.0985 93.8859 16.643L90.4702 14.1613C90.1898 13.9576 89.8102 13.9576 89.5298 14.1613L86.1141 16.643C85.4871 17.0985 84.6435 16.4856 84.883 15.7485L86.1877 11.7331C86.2948 11.4035 86.1774 11.0424 85.8971 10.8387L82.4814 8.35704C81.8544 7.90152 82.1766 6.90983 82.9516 6.90983H87.1736C87.5202 6.90983 87.8274 6.68666 87.9345 6.35704L89.2392 2.34164Z"
                    fill="#FFC700"
                  />
                </svg>
              </div>

              <div className="flex items-start gap-x-2 mt-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 9C16.5 13.14 13.14 16.5 9 16.5C4.86 16.5 1.5 13.14 1.5 9C1.5 4.86 4.86 1.5 9 1.5C13.14 1.5 16.5 4.86 16.5 9Z"
                    stroke="#1E1E1E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.7827 11.3848L9.45766 9.99732C9.05266 9.75732 8.72266 9.17982 8.72266 8.70732V5.63232"
                    stroke="#1E1E1E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="lg:text-sm md:text-[13px] max-xs1:text-sm ">
                  Mon - Fri (9:00 a.m. - 5:00 p.m)
                  <br />
                  Sat (9:00 a.m. - 1:00 p.m)
                </p>
              </div>
              <div className="flex items-start gap-x-2 mt-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00016 10.0726C10.2925 10.0726 11.3402 9.02493 11.3402 7.73258C11.3402 6.44023 10.2925 5.39258 9.00016 5.39258C7.70781 5.39258 6.66016 6.44023 6.66016 7.73258C6.66016 9.02493 7.70781 10.0726 9.00016 10.0726Z"
                    stroke="#1E1E1E"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M2.71527 6.3675C4.19277 -0.127498 13.8153 -0.119998 15.2853 6.375C16.1478 10.185 13.7778 13.41 11.7003 15.405C10.1928 16.86 7.80777 16.86 6.29277 15.405C4.22277 13.41 1.85277 10.1775 2.71527 6.3675Z"
                    stroke="#1E1E1E"
                    strokeWidth="1.5"
                  />
                </svg>
                <p className="lg:text-sm md:text-[13px] max-xs1:text-sm">
                  Bavenstedter Strasse 90,
                  <br />
                  DE-31135 Hildesheim
                </p>
              </div>
              {/* Call And Phone Number Details Div */}
              <div className=" py-4  rounded-md  justify-around items-center bg-[#EF2C2E] flex mt-4">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3077 15.7748C18.3077 16.0748 18.241 16.3832 18.0993 16.6832C17.9577 16.9832 17.7744 17.2665 17.5327 17.5332C17.1244 17.9832 16.6743 18.3082 16.166 18.5165C15.666 18.7248 15.1244 18.8332 14.541 18.8332C13.691 18.8332 12.7827 18.6332 11.8243 18.2248C10.866 17.8165 9.90768 17.2665 8.95768 16.5748C7.99935 15.8748 7.09102 15.0998 6.22435 14.2415C5.36602 13.3748 4.59102 12.4665 3.89935 11.5165C3.21602 10.5665 2.66602 9.6165 2.26602 8.67484C1.86602 7.72484 1.66602 6.8165 1.66602 5.94984C1.66602 5.38317 1.76602 4.8415 1.96602 4.3415C2.16602 3.83317 2.48268 3.3665 2.92435 2.94984C3.45768 2.42484 4.04102 2.1665 4.65768 2.1665C4.89102 2.1665 5.12435 2.2165 5.33268 2.3165C5.54935 2.4165 5.74102 2.5665 5.89102 2.78317L7.82435 5.50817C7.97435 5.7165 8.08268 5.90817 8.15768 6.0915C8.23268 6.2665 8.27435 6.4415 8.27435 6.59984C8.27435 6.79984 8.21602 6.99984 8.09935 7.1915C7.99102 7.38317 7.83268 7.58317 7.63268 7.78317L6.99935 8.4415C6.90768 8.53317 6.86602 8.6415 6.86602 8.77484C6.86602 8.8415 6.87435 8.89984 6.89102 8.9665C6.91602 9.03317 6.94102 9.08317 6.95768 9.13317C7.10768 9.40817 7.36602 9.7665 7.73268 10.1998C8.10768 10.6332 8.50768 11.0748 8.94102 11.5165C9.39102 11.9582 9.82435 12.3665 10.266 12.7415C10.6993 13.1082 11.0577 13.3582 11.341 13.5082C11.3827 13.5248 11.4327 13.5498 11.491 13.5748C11.5577 13.5998 11.6243 13.6082 11.6993 13.6082C11.841 13.6082 11.9493 13.5582 12.041 13.4665L12.6743 12.8415C12.8827 12.6332 13.0827 12.4748 13.2743 12.3748C13.466 12.2582 13.6577 12.1998 13.866 12.1998C14.0243 12.1998 14.191 12.2332 14.3743 12.3082C14.5577 12.3832 14.7494 12.4915 14.9577 12.6332L17.716 14.5915C17.9327 14.7415 18.0827 14.9165 18.1743 15.1248C18.2577 15.3332 18.3077 15.5415 18.3077 15.7748Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                  />
                </svg>
                <p className="text-white lg:text-sm md:text-xs">
                  +123 4567 7890
                </p>

                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.9405 7.2124L10.0505 12.1024C9.47305 12.6799 8.52805 12.6799 7.95055 12.1024L3.06055 7.2124"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {/* Main div */}
              <div className="flex lg:flex-row md:flex-col gap-y-2  gap-x-3 items-center mt-2">
                <div className="flex flex-1 items-center gap-x-2 border-[#003087] rounded-md border lg:py-2 lg:px-1 md:w-full md:py-3 py-3 justify-center  ">
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.7967 2.63248L12.1167 5.27248C12.2967 5.63998 12.7767 5.99248 13.1817 6.05998L15.5742 6.45748C17.1042 6.71248 17.4642 7.82248 16.3617 8.91748L14.5017 10.7775C14.1867 11.0925 14.0142 11.7 14.1117 12.135L14.6442 14.4375C15.0642 16.26 14.0967 16.965 12.4842 16.0125L10.2417 14.685C9.8367 14.445 9.1692 14.445 8.7567 14.685L6.5142 16.0125C4.9092 16.965 3.9342 16.2525 4.3542 14.4375L4.8867 12.135C4.9842 11.7 4.8117 11.0925 4.4967 10.7775L2.6367 8.91748C1.5417 7.82248 1.8942 6.71248 3.4242 6.45748L5.8167 6.05998C6.2142 5.99248 6.6942 5.63998 6.8742 5.27248L8.1942 2.63248C8.9142 1.19998 10.0842 1.19998 10.7967 2.63248Z"
                      stroke="#003087"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-[#003087] ">Favourite</p>
                </div>
                <div className="flex flex-1 items-center gap-x-2 border-[#003087] rounded-md border lg:py-2 lg:px-1 md:w-full md:py-3 py-3 justify-center ">
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_186_852)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.51451 6.88088C4.9025 6.88088 5.28177 6.99593 5.60438 7.21149C5.92698 7.42705 6.17842 7.73343 6.3269 8.09188C6.47537 8.45034 6.51422 8.84478 6.43853 9.22531C6.36284 9.60585 6.176 9.95539 5.90165 10.2297C5.6273 10.5041 5.27775 10.6909 4.89722 10.7666C4.51668 10.8423 4.12225 10.8035 3.76379 10.655C3.40533 10.5065 3.09895 10.2551 2.8834 9.93247C2.66784 9.60987 2.55279 9.23059 2.55279 8.8426C2.55334 8.32249 2.76019 7.82384 3.12797 7.45606C3.49574 7.08829 3.99439 6.88143 4.51451 6.88088ZM14.4841 1.12485C14.8721 1.12478 15.2514 1.23977 15.5741 1.45528C15.8967 1.67079 16.1482 1.97714 16.2968 2.33559C16.4453 2.69404 16.4842 3.08849 16.4086 3.46905C16.3329 3.84961 16.1461 4.19919 15.8718 4.47358C15.5974 4.74797 15.2479 4.93484 14.8674 5.01057C14.4868 5.08629 14.0924 5.04747 13.7339 4.899C13.3754 4.75054 13.069 4.4991 12.8534 4.17649C12.6378 3.85387 12.5228 3.47458 12.5228 3.08657C12.5233 2.56653 12.7302 2.06795 13.0978 1.70019C13.4655 1.33243 13.9641 1.12552 14.4841 1.12485ZM14.4841 12.9518C14.8721 12.9517 15.2515 13.0667 15.5741 13.2823C15.8968 13.4978 16.1483 13.8042 16.2968 14.1626C16.4453 14.5211 16.4842 14.9156 16.4085 15.2961C16.3329 15.6767 16.146 16.0263 15.8716 16.3007C15.5973 16.575 15.2477 16.7619 14.8671 16.8376C14.4865 16.9132 14.0921 16.8744 13.7336 16.7258C13.3751 16.5773 13.0688 16.3258 12.8532 16.0032C12.6377 15.6805 12.5227 15.3012 12.5228 14.9131C12.5234 14.3932 12.7303 13.8947 13.098 13.527C13.4656 13.1593 13.9641 12.9525 14.4841 12.9518L14.4841 12.9518ZM4.51451 11.9291C5.31997 11.9296 6.09349 11.6141 6.66888 11.0505L11.5747 13.8831C11.3156 14.6102 11.3376 15.408 11.6364 16.1198C11.9352 16.8316 12.4892 17.4061 13.1897 17.7304C13.8902 18.0548 14.6867 18.1057 15.4228 17.8731C16.1588 17.6404 16.7814 17.1412 17.1684 16.4732C17.5553 15.8052 17.6786 15.0167 17.5142 14.2624C17.3497 13.5082 16.9093 12.8426 16.2794 12.3964C15.6495 11.9501 14.8755 11.7553 14.1094 11.8503C13.3433 11.9453 12.6404 12.3231 12.1385 12.9097L7.32036 10.1277C7.65451 9.39873 7.69167 8.56825 7.42397 7.81231L12.1384 5.09027C12.6374 5.6719 13.3356 6.04618 14.0962 6.13972C14.8568 6.23326 15.6249 6.03931 16.2499 5.5959C16.8749 5.1525 17.3118 4.49162 17.4748 3.74283C17.6378 2.99405 17.5153 2.21137 17.1312 1.54826C16.7471 0.885147 16.1291 0.389425 15.3985 0.158287C14.6679 -0.0728496 13.8772 -0.02273 13.1816 0.29882C12.486 0.620369 11.9356 1.19016 11.6383 1.89646C11.341 2.60277 11.3183 3.39466 11.5746 4.11686L6.86013 6.83873C6.52383 6.44504 6.09388 6.14231 5.60987 5.95839C5.12587 5.77448 4.60337 5.7153 4.09049 5.78631C3.57762 5.85732 3.09085 6.05623 2.67502 6.36473C2.25919 6.67323 1.92767 7.08139 1.71098 7.55164C1.49429 8.02189 1.39941 8.53909 1.43506 9.05563C1.47072 9.57218 1.63576 10.0714 1.91501 10.5075C2.19425 10.9435 2.57871 11.3022 3.03298 11.5507C3.48726 11.7991 3.99674 11.9292 4.51451 11.9291V11.9291Z"
                        fill="#003087"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_186_852">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-[#003087]">Share</p>
                </div>
              </div>
              {/* Send Message */}
              <div className="flex bg-[#003087] rounded-lg text-white items-center justify-center gap-x-2 py-4 mt-2">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.25 15.875H5.75C3.5 15.875 2 14.75 2 12.125V6.875C2 4.25 3.5 3.125 5.75 3.125H13.25C15.5 3.125 17 4.25 17 6.875V12.125C17 14.75 15.5 15.875 13.25 15.875Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.25 7.25L10.9025 9.125C10.13 9.74 8.8625 9.74 8.09 9.125L5.75 7.25"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>Send Message</p>
              </div>
              {/* See all ads */}
              <div className="text-center rounded-lg py-3 border-[#003087] border mt-2">
                <p className="text-[#003087]">See all ads</p>
              </div>
              {/* Print Ad */}
              <div className="flex items-center justify-center gap-x-2 rounded-lg py-3 border-[#003087] border mt-2 text-[#003087] ">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.9375 5.75H13.0625V4.25C13.0625 2.75 12.5 2 10.8125 2H8.1875C6.5 2 5.9375 2.75 5.9375 4.25V5.75Z"
                    stroke="#003087"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.5 11.75V14.75C12.5 16.25 11.75 17 10.25 17H8.75C7.25 17 6.5 16.25 6.5 14.75V11.75H12.5Z"
                    stroke="#003087"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.25 8V11.75C16.25 13.25 15.5 14 14 14H12.5V11.75H6.5V14H5C3.5 14 2.75 13.25 2.75 11.75V8C2.75 6.5 3.5 5.75 5 5.75H14C15.5 5.75 16.25 6.5 16.25 8Z"
                    stroke="#003087"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.25 11.75H12.3425H5.75"
                    stroke="#003087"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.75 8.75H8"
                    stroke="#003087"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>Print Ad</p>
              </div>
            </div>
          </div>
        </div>
        {/* Same Compoment on Medium Screen */}
        <div className="bg-white w-full lg:px-4 md:px-2.5 px-5 py-4 rounded-md border border-black/25 md:hidden visible mt-3 mb-10">
          {/* Leasing Box */}
          <LeasingBox />
          {/* Price for charging at home */}
          <PriceChangeBox />
          {/* General Information */}
          <GeneralInformation />
          {/* More Information */}
          <MoreInformation />
          {/* Safety Information */}
          <SafetyInformation />
          {/* Equipment Information */}
          <EquipmentInformation />
        </div>
      </div>
      {/* Section 2 */}
      <div className=" w-full h-full mb-10 ">
        <h3 className=" mb-5 font-semibold text-3xl">More cars from this dealer</h3>
          <MoreCarsSwiper/>
      </div>
      <div className=" w-full h-full mb-10 ">
        <h3 className=" mb-5 font-semibold text-3xl">More cars from this dealer</h3>
          <MoreCarsSwiper/>
      </div>
    </section>
  );
};

export default CarProducts;
