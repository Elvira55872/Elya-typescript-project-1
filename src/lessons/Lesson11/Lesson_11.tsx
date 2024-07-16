import { useState, ChangeEvent } from "react";
import axios from "axios";
import { v4 } from "uuid";
import * as Yup from 'yup';

import LoginForm from "components/LoginForm/LoginForm";

import { Lesson11Wrapper } from "./styles";
import {} from "./types";

function Lesson_11() {
  return (
    <Lesson11Wrapper>
      <LoginForm />
    </Lesson11Wrapper>
  );
}

export default Lesson_11;
