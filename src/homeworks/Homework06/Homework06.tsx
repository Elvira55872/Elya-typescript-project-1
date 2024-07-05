import "./styles.css";

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

  console.log(cars[0].isDiesel);

  const carsList = cars.map((value) => {
    return (
      <div className="car-card">
        <p>{value.brand}</p>
        <p>{value.price}</p>
        <p>{value.isDiesel ? "Diesel" : "Benzin"}</p>
      </div>
    );
  });

  return <div className="car-cards-container">{carsList}</div>;
}

export default Homework06;
