import React from "react";
import { carsData } from "@/lib/car_data"; // Adjust the path as needed
import { ChevronRight, ChevronLeft } from 'lucide-react';
import CarBox from "@/components/CarBox";

const CarsGrid = () => {
  return (
    <section className="pt-20 ">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 ">
        {carsData.map((car) => (
          <CarBox year={car.details.year}
            key={car.id}
            id={car.id}
            imageSrc={car.imageSrc}
            imagealtText={car.altText}
            price={car.price}
            name={car.name}
            kilometers={car.details.kilometers}
            engine={car.details.engine} />
        ))}
      </div >
      <div>

      </div>
      {/* Main Grid */}


      {/* Buttons */}
      <div className="flex justify-center items-center space-x-4 mt-10 ">
        <button className="bg-[#EF2C2E] text-white h-9 w-9 flex justify-center items-center rounded-md">
          <ChevronLeft size={19} />
        </button>
        <button className="bg-[#EF2C2E] text-white h-9 w-9 flex justify-center items-center rounded-md">
          <ChevronRight size={19} />
        </button>
      </div>
    </section>
  );
};

export default CarsGrid;