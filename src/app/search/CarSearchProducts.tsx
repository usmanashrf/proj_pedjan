import { carVariantsData } from "@/assets/data/car-variants-data";
import CarBox from "@/components/CarBox";
import CarCardExpanded from "@/components/CarCardExpanded";
import { carsData } from "@/lib/car_data";
import React from "react";
import FordCarImage from '@/assets/images/car image.png'
import { carsSearchData } from "@/assets/data/car_search-products-data";
import { carExpdandedData } from "@/assets/data/car-expanded-data";

const CarSearchProducts = () => {
  return (
    <div className="bg-white w-full rounded-lg border border-black/25 px-4 py-4 max-sm2:-mt-5">
      {/* Here grid starts */}
      <div className="grid md:grid-cols-3 grid-cols-2  gap-x-2 gap-y-2 ">
        {/* grid 1 car box */}
        
            <div
            key={carsSearchData[0].id}>
              <CarBox
                year={carsSearchData[0].details.year}
                kilometers={carsSearchData[0].details.kilometers}
                engine={carsSearchData[0].details.engine}
                name={carsSearchData[0].name}
                price={carsSearchData[0].price}
                imageSrc={carsSearchData[0].imageSrc}
                id={carsSearchData[0].id}
                imagealtText={carsSearchData[0].altText}
              />
            </div>
            <div
            key={carsSearchData[1].id}>
              <CarBox
                year={carsSearchData[1].details.year}
                kilometers={carsSearchData[1].details.kilometers}
                engine={carsSearchData[1].details.engine}
                name={carsSearchData[1].name}
                price={carsSearchData[1].price}
                imageSrc={carsSearchData[1].imageSrc}
                id={carsSearchData[1].id}
                imagealtText={carsSearchData[1].altText}
              />
            </div>
            <div className=" max-md:hidden"
            key={carsSearchData[2].id}>
              <CarBox
                year={carsSearchData[2].details.year}
                kilometers={carsSearchData[2].details.kilometers}
                engine={carsSearchData[2].details.engine}
                name={carsSearchData[2].name}
                price={carsSearchData[2].price}
                imageSrc={carsSearchData[2].imageSrc}
                id={carsSearchData[2].id}
                imagealtText={carsSearchData[2].altText}
              />
            </div>
       

        {/* grid 2 car box */}
        <div className="col-span-2 sm:col-span-3 space-y-4">
          {carExpdandedData.map((carsExpandeddata, index)=> {
            return (
            <div key={index}>
                <CarCardExpanded title={carsExpandeddata.title}
                price={carsExpandeddata.price}
                discountedPrice={carsExpandeddata.discountedPrice}
                datePublished={carsExpandeddata.datePublished}
                carProperties={carsExpandeddata.carProperties}
                carImages={carsExpandeddata.carImages}
                remarks={carsExpandeddata.remarks}
                bgColor={carsExpandeddata.bgColor}/>
            </div>
            )
          })}
        
        </div>
       
      </div>
    </div>
  );
};

export default CarSearchProducts;
