import "./styles.css";
import {v4} from "uuid"

function Homework06() {
  type Car = {
    brand: string;
    price: number;
    isDiesel: boolean;
  };

  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  const carsList = cars.map((value) => {
    return (
      <div className="car-card" key={v4()}>
        <p>{value.brand}</p>
        <p>{value.price}</p>
        <p>{value.isDiesel ? "Diesel" : "Benzin"}</p>
      </div>
    );
  });

  return <div className="car-cards-container">{carsList}</div>;
}

export default Homework06;
