import { useState } from "react";

import SimponsCard from "components/SimponsCard/SimponsCard";
import LoginForm from "components/LoginForm/LoginForm";
import Input from "components/Input/Input";
import Feedback from "components/Feedback/Feedback";

import "./styles.css";

function Homework07() {
  const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);

  const onLike = (): void => {
    setLike((prevValue: number) => prevValue + 1);
  };

  const onDislike = (): void => {
    setDislike((prevValue: number) => prevValue + 1);
  };
  const resetResults = (): void => {
    setLike(0);
    setDislike(0);
  };

  return (
    <div className="homework07-wrapper">
      <SimponsCard
        avatar="https://static.printler.com/cache/b/4/3/5/4/a/b4354af4c63060662b75534d520a7f5c182617e5.jpg"
        firstName="Homer"
        lastName="Simpson"
        job="engeneer"
        hobby="beer"
      />
      <LoginForm />
      <Input
        id="$5dfsgs57"
        name="Your info"
        type="text"
        placeholder="write here something"
        label="Your info"
      />
      <Feedback
        like={like}
        dislike={dislike}
        onLike={onLike}
        onDislike={onDislike}
        resetResults={resetResults}
      />
    </div>
  );
}

export default Homework07;
