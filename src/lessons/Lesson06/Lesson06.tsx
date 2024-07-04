import "./styles.css";

function Lesson06() {
  // 111111111111111111111111111111 type: string
  let userFullName: string = "John Johnson";
  // userFullName = 100; // mistake
  userFullName = "John Deer"; // this is not mistake
  let hello = "Hello, ${userFullName}"; // it became string forever
  // hello = 100; // mistake because hello became string and it cant be changed

  // 222222222222222222222222222222 type: number
  let number1: number = 100;
  //number1 = "lalala"; // mistake
  number1 = 35.324; // only one type - number. All numbers are numbers
  let number2: number = number1 / 0;

  // 3333333333333333333333333333333 type: boolean
  let isAdmin: boolean = true;
  isAdmin = false;

  // 4444444444444444444444444444444 type: array
  const animals: string[] = ["Tiger", "Lion", "Dog"];
  animals.push("Cat");
  //animals.push(true); // mistake
  const numbers: number[] = [1, 2, 3, 4, 5];

  // 5555555555555555555555555555555 type:tupel
  // to have 2 data types in 1 array:
  const userArray: [string, string, string, string, number, boolean] = [
    //it can be only 6 elements and exact types one after another
    "lala",
    "baba",
    "nana",
    "gaga",
    30,
    true,
  ];

  // 6666666666666666666666666666666666 type: function (exists only here as data type)
  // return and non return functions
  // we can forget about THIS, it is not used here
  // non returning functions
  const sayHi = (personName: string): void => {
    console.log("Hello, ${personName}");
  };
  sayHi(userFullName);
  //sayHi(100); // mistake

  // variant A
  //   const makeAlert = ():void => {
  //     alert("this is alert!");
  //   };

  // variant B
  const makeAlert: () => void = (): void => {
    alert("this is alert!");
  };

  // returning functions
  const add = (a: number, b: number): number => {
    return a + b;
  };
  console.log(add(1, 2));

  // 7777777777777777777777777777777777777 type: object
  interface Admin {
    isAdmin: boolean;
  }

  interface UserAnimal {
    //"?"-means that it is not obligated
    pet?: string;
  }

  // this is how we can add interface
  interface User {
    isFamily: boolean;
  }

  interface User extends Admin, UserAnimal {
    firstName: string;
    lastName: string;
    age: number;
    job: string;
    //isAdmin: boolean;
  }

  const user1: User = {
    firstName: "John",
    lastName: "Jphnson",
    age: 32,
    job: "QA",
    isAdmin: true,
    pet: "Dog",
    isFamily: true,
  };

  const user2: User = {
    firstName: "John",
    lastName: "Jphnson",
    age: 32,
    job: "QA",
    isAdmin: true,
    // no pet here and its ok
    isFamily: false,
  };

  // 888888888888888888888888888888888888 type: undefined
  let userData: undefined = undefined; // it can be only undefined, nothing else

  // 9999999999999999999999999999999999999 type: null
  let EmptyVar: null = null; // it can be only null, nothing else

  // 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 type: any
  let someVariabile: any = "Something"; // this can be anything
  someVariabile = 100;

  // 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11  type: type
  // here we create our own data types
  // used when we dont know with what we work, for example we wait something from server
  type userDataFromServer = User | undefined | null;
  let userDataFromServer: userDataFromServer = user1;
  userDataFromServer = undefined;
  userDataFromServer = null;
  //userDataFromServer = 190; // mistake

  //TYPISATION OF OBJECTS
  type GlobalAnimalProps = {
    isAnimal: boolean;
  };
  // we cant extends types
  type Animal = {
    type: string;
    age: number;
    color: string;
    isWild: boolean;
    // only here we can add new fields
    speed?: string;
  };

  // like this we cant add new fields (but we can in interface)
//   type Animal = {
//     speed: string;
//   };

type GlobalAnimal = GlobalAnimalProps 

  const animal1: Animal = {
    type: "Tiger",
    age: 12,
    color: "orange",
    isWild: true,
  };

  const animal2: Animal = {
    type: "Lion",
    age: 10,
    color: "orange",
    isWild: true,
    speed: "74 km/h",
  };


////////////////////////////////////////////////////////
// // 11 - type
// type UserDataFromServer = User | undefined | null;
// let userDataFromServer: UserDataFromServer = user1;
// userDataFromServer = undefined;
// userDataFromServer = null;
// // userDataFromServer = 190; // будет ошибка

// // Типизация обьектов
// type GlobalAnimalProps = {
//   isAnimal: boolean;
// };
// //  - мы не можем наследовать типы
// type Animal = {
//   type: string;
//   age: number;
//   color: string;
//   isWild: boolean;
//   speed?: string;
// };

// // type Animal = {
// //   speed: string;
// // }

// type GlobalAnimal  = GlobalAnimalProps & Animal;

// const animal1: GlobalAnimal = {
//   isAnimal: true,
//   type: "Tiger",
//   age: 12,
//   color: "orange",
//   isWild: true,
// };

// const animal2: GlobalAnimal = {
//   isAnimal: true,
//   type: "Lion",
//   age: 8,
//   color: "orange",
//   isWild: true,
//   speed: "74 km/h"
// };



  return <div> Lesson 6 </div>;
}

export default Lesson06;

