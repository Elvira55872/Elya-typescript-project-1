import { useState, ChangeEvent, useEffect } from "react";

import Input from "components/Input/Input";

import { Lesson09Wrapper, InputControl } from "./styles";
import Button from "components/Button/Button";

function Lesson_09() {
  // // searchInputValue - значение инпута которое вводим
  // // setsearchInputValue - функция которая задает значение
  // const [searchInputValue, setsearchInputValue] = useState<string>("");

  // const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
  //   // console.log("инпут ивент");
  //   // console.log(event.target.value);

  //   setsearchInputValue(event.target.value);
  // };

  // // console.log(searchInputValue);

  // const onSearch = () => {
  //   console.log(searchInputValue)
  // };

// !! //////////////////////////////////////////////////////////////////////////

  // // 1 стадия жизни mounting
  // // 1 аргумент - функция, которая должна выполнится в определенный жизненный цикл компонента
  // // 2 аргумент - массив зависимостей, с помощью него мы можем определить жизненный цикл компонента
  // // Если мы прокидываем пустой массив во 2 аргументе, то мы определяем 1 фазу жизненного цикла - Mounting
  // useEffect(()=>{
  //   console.log("mounting")
  // }, [])

  //  // 2 фаза - Updating
  //  useEffect(()=>{
  //   console.log("mounting")
  // }, [searchInputValue])

  // // 3 фаза - Unmounting
  // useEffect(()=>{return ()=> {
  //   console.log("Unmounting");
  // }  }, [])

  return (
    <Lesson09Wrapper>
      {/* <InputControl>
        <Input id="gdgdfd" label="Search"  value={searchInputValue} onChange={onChangeInput}/>
      </InputControl> */}
      {/* <input
        id="hfhfhf"
        name="search"
        // value - значение самого инпута, которое ввел пользователь
        value={searchInputValue}
        // onChange - функция которая срабатывает при вводе чего тто в инпут
        onChange={onChangeInput}
      />
      <Button name="Search" onClick={onSearch} /> */}
    </Lesson09Wrapper>
  );
}

export default Lesson_09;
