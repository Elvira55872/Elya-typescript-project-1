import Card from "homeworks/Homework13/components/Card/Card";
import Button from "components/Button/Button";

import { InputContainer, TextArea } from "./styles";
import { ChangeEvent, createContext, useState } from "react";

export const TextareaContext = createContext<string>("");

function BlogMahagement() {
  const [textareaValue, setTextareaValue] = useState("");
  const [message, setMessage] = useState("");

  const getInputValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value);
  };

  const postMessage = () => {
    setMessage(textareaValue);
  };

  return (
    <TextareaContext.Provider value={message}>
      <InputContainer>
        <TextArea
          name="commentTextArea"
          value={textareaValue}
          onChange={getInputValue}
        ></TextArea>
        <Button name="Post" type="button" onClick={postMessage} />
      </InputContainer>
      <Card />
    </TextareaContext.Provider>
  );
}

export default BlogMahagement;
