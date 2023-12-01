import { StaticImageData } from "next/image";
import FordCarImage1 from "@/assets/images/ford-car1.png";
import FordCarImage2 from "@/assets/images/ford-car2.png";
import FordCarImage3 from "@/assets/images/ford-car3.png";
import FordCarImage4 from "@/assets/images/ford-car4.png";
import FordCarImage5 from "@/assets/images/ford-car5.png";

export type CarVariantsType = {
  id: string;
  title: string;
  imageSrc: StaticImageData;
};

export const carVariantsData = [
  {
    id: "1",
    title: "Ford",
    imageSrc: FordCarImage1,
  },
  {
    id: "2",
    title: "Toyota",
    imageSrc: FordCarImage2,
  },
  {
    id: "3",
    title: "Nissan",
    imageSrc: FordCarImage3,
  },
  {
    id: "4",
    title: "BMW",
    imageSrc: FordCarImage4,
  },
  {
    id: "5",
    title: "BMW",
    imageSrc: FordCarImage5,
  },
];
