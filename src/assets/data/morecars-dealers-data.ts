export type CarDetails = {
    id: number;
    name: string;
    imageSrc: string;
    altText: string;
    price: string;
    details: {
      year: number;
      kilometers: number;
      engine: string;
    };
  };

export const carsDealersData : CarDetails[] = 
[
    {
      id: 1,
      name: "Ford Mondeo ST",
      imageSrc: "/Car-Image.jpg",
      altText: "Car-1",
      price: "20,300 €",
      details: {
        year: 2019,
        kilometers: 185,
        engine: "Petrol",
      },
    },
    {
      id: 2,
      name: "Ford Mondeo ST",
      imageSrc: "/Car-Image.jpg",
      altText: "Car-2",
      price: "20,300 €",
      details: {
        year: 2019,
        kilometers: 185,
        engine: "Petrol",
      },
    },
    {
      id: 3,
      name: "Ford Mondeo ST",
      imageSrc: "/Car-Image.jpg",
      altText: "Car-2",
      price: "20,300 €",
      details: {
        year: 2019,
        kilometers: 185,
        engine: "Petrol",
      },
    },
    {
      id: 4,
      name: "Ford Mondeo ST",
      imageSrc: "/Car-Image.jpg",
      altText: "Car-2",
      price: "20,300 €",
      details: {
        year: 2019,
        kilometers: 185,
        engine: "Petrol",
      },
    },
  ]
