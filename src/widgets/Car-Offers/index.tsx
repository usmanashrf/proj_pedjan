import { carsOfferData } from "@/assets/data/discount-offer-data";
import { carsSoldData } from "@/assets/data/sold-item-data";
import CarSlider from "@/components/CarSlider";
import Image from "next/image";
import React from "react";
import CarBgImage from "@/assets/images/car-offer.png";

const CarsOffers = () => {
  return (
    <section className="mt-20 xs:min-h-[1130px] min-h-[897px] mb-4 ">
      {/* Car background image */}
      <Image
        src={CarBgImage}
        alt="car-background"
        height={1120}
        className="xs:min-h-[1130px] min-h-[897px] absolute z-10 left-0 right-0 object-cover"
      />
      <div className="absolute left-0 right-0 bg-gradient-to-r from-[#EF2C2E]/20 to-[#EF2C2E]/0 z-20 xs:min-h-[1130px] min-h-[897px] w-full"></div>
      <div className="relative z-20">
        {/* main div conating both sliders and gradient */}
        <div className="flex relative">
          {/* Sliders */}
          <div className="md:w-[80%] w-full ">
            <div className="relative z-10 top-2 pt-10">
              <h3 className="text-[#EF2C2E] font-semibold text-2xl mb-5">
                Discounted Vehicles
              </h3>
              <div>
                <CarSlider data={carsOfferData} />
              </div>
              <div className="relative z-10 top-2">
                <h3 className="text-[#EF2C2E] font-semibold text-2xl mb-2">
                  Sold in the last 24 hours{" "}
                </h3>
                <div className="pt-2">
                  <CarSlider data={carsSoldData} />
                </div>
              </div>
            </div>
          </div>

          {/* Gradient Box */}
            <div className=" absolute right-0 bottom-8  top-0 w-[19%] bg-gradient-to-b from-[#EF2C2E] to bg-[#003087] rounded-md mt-[140px] md:block hidden "></div>
        </div>
      </div>
    </section>
  );
};

export default CarsOffers;
