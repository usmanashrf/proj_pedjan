import VolksCarImage from "@/assets/images/volks-car.png"
import { StaticImageData } from "next/image";

type Car = {
    id: number;
    name: string;
    imageSrc: string | StaticImageData;
    altText: string;
    price: string;
    details: {
      year: number;
      kilometers: number;
      engine: string;
    };
  };
  
  export default Car;
  
  export const carsSearchData : Car[]  = [
    {
      "id": 1,
      "name": "Volkswagen Tiguan",
      "imageSrc": VolksCarImage,
      "altText": "Car-1",
      "price": "20,300 €",
      "details": {
        "year": 2019,
        "kilometers": 185.000,
        "engine": "Petrol"
      }
    },
    {
        "id": 2,
        "name": "Ford Mondeo ST",
        "imageSrc": "/Car-Image.jpg",
        "altText": "Car-2",
        "price": "20,300 €",
        "details": {
          "year": 2019,
          "kilometers": 185.000,
          "engine": "Petrol"
        }
      },
      {
        "id": 3,
        "name": "Volkswagen Tiguan",
        "imageSrc": VolksCarImage,
        "altText": "Car-2",
        "price": "20,300 €",
        "details": {
          "year": 2019,
          "kilometers": 185.000,
          "engine": "Petrol"
        }
      },
  ]