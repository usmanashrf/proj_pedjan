import Hyundai from "@/assets/images/hyundai.jpg"
import Trio from "@/assets/images/trio.jpg"
import Auto_League from "@/assets/images/auto-league.jpg"
import Grande_Tre from "@/assets/images/grande-tre.jpg"
import Techodrom_Dao from "@/assets/images/techno.jpg"



import { StaticImageData } from "next/image";

export type SectionData = {
    title:string;
    id:number;
    imageSrc:StaticImageData;
    no_of_ads:number;

}

export const bussinessSectionData : SectionData[] = [
    {
        id:1,
        imageSrc:Hyundai,
        no_of_ads:13,
        title:"Hyundai - Serbia"

    },
    {
        id:2,
        imageSrc:Trio,
        no_of_ads:13,
        title:"Trio Motors LLC"

    },
    {
        id:3,
        imageSrc:Auto_League,
        no_of_ads:17,
        title:"Auto League 75"

    },
    {
        id:4,
        imageSrc:Grande_Tre,
        no_of_ads:5,
        title:"Grande Tre"

    },
    {
        id:2,
        imageSrc:Techodrom_Dao,
        no_of_ads:0,
        title:"Technodrom doo"

    },
]