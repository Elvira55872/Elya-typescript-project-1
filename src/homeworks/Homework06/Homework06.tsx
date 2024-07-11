import { v4 } from "uuid";

import { CarCard, CarCardsContainer } from "./styles";
import { Car } from "./types";

function Homework06() {
  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  const carsList = cars.map((value: Car) => {
    return (
      <CarCard key={v4()}>
        <p>{value.brand}</p>
        <p>{value.price}</p>
        <p>{value.isDiesel ? "Diesel" : "Benzin"}</p>
      </CarCard>
    );
  });

  return <CarCardsContainer>{carsList}</CarCardsContainer>;
}

export default Homework06;
