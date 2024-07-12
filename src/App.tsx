import GlobalStyles from "styles/GlobalStyles";

import Homework07 from "homeworks/Homework07/Homework07";
import Homework06 from "homeworks/Homework06/Homework06";
import Lesson06 from "lessons/Lesson06/Lesson06";
import Lesson07 from "lessons/Lesson07/Lesson07";
import Lesson_08 from "lessons/Lesson08/Lesson08";
import Homework08 from "homeworks/Homework08/Homework08";

import { AppStyledDiv } from "./AppStyles";

function App() {
  return (
    <AppStyledDiv>
      <GlobalStyles />
      {/* <Lesson06 /> */}
      {/* <Homework06/> */}
      {/* <Lesson07 /> */}
      {/* <Homework07 /> */}
      {/* <Lesson_08 /> */}
      <Homework08 />
    </AppStyledDiv>
  );
}

export default App;
