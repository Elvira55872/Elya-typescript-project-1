import { useContext } from "react";
import { MessageWrapper } from "./styles";
import { TextareaContext } from "../BlogManagement/BlogManagement";

function Message() {
  const textareaValue = useContext<string>(TextareaContext);

  return <MessageWrapper>{textareaValue}</MessageWrapper>;
}

export default Message;
