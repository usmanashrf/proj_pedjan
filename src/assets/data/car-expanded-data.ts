// data.ts
import FordCarImage from "@/assets/images/car image.png"
import VikoCarImage from "@/assets/images/volks-car.png"
import KiaCarImage from "@/assets/images/kia-car-image.png"
import KiaProceedCarImage from "@/assets/images/car image.png"
import FordCarImage1 from "@/assets/images/ford-car.png" 
import FordMondeoCarImage from "@/assets/images/ford-mondeo.png"
import FordMondeoCarImage1 from "@/assets/images/ford-mondeo1.png"

import { StaticImageData } from "next/image";

export interface CarExpandedData {
    title: string;
    datePublished: string;
    price: number;
    discountedPrice: number;
    bgColor:string;
    carProperties: {
      VehicleType: string;
      GearboxType: string;
      Kilometers: number;
      Manufacture_year: string;
      Power: string;
      Doors_number: number;
      cm3: number;
      FuelType: string;
    };
    remarks: string[];
    carImages: { imageSrc: string | StaticImageData }[];
  }
  
  export const carExpdandedData: CarExpandedData[] = [
  {
    title: 'Volkswagen Tiguan R-Line 4x4 WEBASTO',
    datePublished: '12/10/2023',
    price: 20300,
    discountedPrice: 20300,
    bgColor:'bg-[#EDEEF0]',
    carProperties: {
      VehicleType: 'Sedan',
      GearboxType: 'Auto',
      Kilometers: 150000,
      Manufacture_year: '2019',
      Power: '55/75',
      Doors_number: 4,
      cm3: 2000,
      FuelType: 'Diesel',
    },
    remarks: ['Damaged', 'Not Registered', 'Guarantee'],
    carImages: [
      { imageSrc: VikoCarImage },
      { imageSrc: FordCarImage },
      { imageSrc: FordCarImage },
      { imageSrc: FordCarImage },
      { imageSrc: FordCarImage },
      { imageSrc: FordCarImage },
      { imageSrc: FordCarImage },
    ],
  },
  {
    title: 'Kia Proceed 1.6 GDi EXCLUSIVE',
    datePublished: '12/10/2023',
    price: 20300,
    discountedPrice: 20300,
    bgColor:'bg-red-200/50',
    carProperties: {
      VehicleType: 'Sedan',
      GearboxType: 'Auto',
      Kilometers: 150000,
      Manufacture_year: '2019',
      Power: '55/75',
      Doors_number: 4,
      cm3: 2000,
      FuelType: 'Diesel',
    },
    remarks: ['Damaged', 'Not Registered', 'Guarantee'],
    carImages: [
      { imageSrc: KiaCarImage },
      { imageSrc: FordCarImage },
      { imageSrc: FordCarImage },
      { imageSrc: FordCarImage },
      { imageSrc: FordCarImage },
      { imageSrc: FordCarImage },
      { imageSrc: FordCarImage },
    ],
  },
  {
    title: 'Kia Proceed GT 1.6 T-GDI',
    datePublished: '12/10/2023',
    price: 20300,
    discountedPrice: 20300,
    bgColor:'bg-[#EDEEF0]',
    carProperties: {
      VehicleType: 'Sedan',
      GearboxType: 'Auto',
      Kilometers: 150000,
      Manufacture_year: '2019',
      Power: '55/75',
      Doors_number: 4,
      cm3: 2000,
      FuelType: 'Diesel',
    },
    remarks: ['Damaged', 'Not Registered', 'Guarantee'],
    carImages: [
      { imageSrc: KiaProceedCarImage },
      { imageSrc: FordCarImage },
      { imageSrc: FordCarImage },
      { imageSrc: FordCarImage },
      { imageSrc: FordCarImage },
      { imageSrc: FordCarImage },
      { imageSrc: FordCarImage },
    ],
  },
  {
    title: 'Ford Mondeo ST Line 1.6 TDCi ',
    datePublished: '12/10/2023',
    price: 20300,
    discountedPrice: 20300,
    bgColor:'bg-red-200/50',
    carProperties: {
      VehicleType: 'Sedan',
      GearboxType: 'Auto',
      Kilometers: 150000,
      Manufacture_year: '2019',
      Power: '55/75',
      Doors_number: 4,
      cm3: 2000,
      FuelType: 'Diesel',
    },
    remarks: ['Damaged', 'Not Registered', 'Guarantee'],
    carImages: [
      { imageSrc: FordCarImage1 },
      { imageSrc: FordCarImage },
      { imageSrc: FordCarImage },
      { imageSrc: FordCarImage },
      { imageSrc: FordCarImage },
      { imageSrc: FordCarImage },
      { imageSrc: FordCarImage },
    ],
  },
  {
    title: 'Ford Mondeo 2.0 TDCi  TITANIUM ',
    datePublished: '12/10/2023',
    price: 20300,
    discountedPrice: 20300,
    bgColor:'bg-gradient-to-b from-[#003087]/30 to-[#EDEEF0]/50',
    carProperties: {
      VehicleType: 'Sedan',
      GearboxType: 'Auto',
      Kilometers: 150000,
      Manufacture_year: '2019',
      Power: '55/75',
      Doors_number: 4,
      cm3: 2000,
      FuelType: 'Diesel',
    },
    remarks: ['Damaged', 'Not Registered', 'Guarantee'],
    carImages: [
      { imageSrc: FordMondeoCarImage },
      { imageSrc: FordCarImage },
      { imageSrc: FordCarImage },
      { imageSrc: FordCarImage },
      { imageSrc: FordCarImage },
      { imageSrc: FordCarImage },
      { imageSrc: FordCarImage },
    ],
  },
  {
    title: 'Ford Mondeo 2.0 TDCi TITANIUM ',
    datePublished: '12/10/2023',
    price: 20300,
    discountedPrice: 20300,
    bgColor:'bg-gradient-to-b from-[#003087]/30 via-[#EDEEF0] to-[#003087]/30',
    carProperties: {
      VehicleType: 'Sedan',
      GearboxType: 'Auto',
      Kilometers: 150000,
      Manufacture_year: '2019',
      Power: '55/75',
      Doors_number: 4,
      cm3: 2000,
      FuelType: 'Diesel',
    },
    remarks: ['Damaged', 'Not Registered', 'Guarantee'],
    carImages: [
      { imageSrc: FordMondeoCarImage1 },
      { imageSrc: FordCarImage },
      { imageSrc: FordCarImage },
      { imageSrc: FordCarImage },
      { imageSrc: FordCarImage },
      { imageSrc: FordCarImage },
      { imageSrc: FordCarImage },
    ],
  }
];
  
 