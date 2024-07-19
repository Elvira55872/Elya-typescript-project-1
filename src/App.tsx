import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";
import Layout from "components/Layout/Layout";
import Home from "pages/EmployeeApp/Home/Home";
import About from "pages/EmployeeApp/About/About";
import LogIn from "pages/EmployeeApp/LogIn/LogIn";
import ContactUs from "pages/EmployeeApp/ContactUs/ContactUs";
import Clients from "pages/EmployeeApp/Clients/Clients";
import Apple from "pages/EmployeeApp/Clients/Apple/Apple";
import Google from "pages/EmployeeApp/Clients/Google/Google";
import Facebook from "pages/EmployeeApp/Clients/Facebook/Facebook";

import Homework07 from "homeworks/Homework07/Homework07";
import Homework06 from "homeworks/Homework06/Homework06";
import Lesson06 from "lessons/Lesson06/Lesson06";
import Lesson07 from "lessons/Lesson07/Lesson07";
import Lesson_08 from "lessons/Lesson08/Lesson08";
import Homework08 from "homeworks/Homework08/Homework08";
import Lesson_09 from "lessons/Lesson09/Lesson09";
import Lesson_10 from "lessons/Lesson10/Lesson_10";
import Lesson_11 from "lessons/Lesson11/Lesson_11";
import Homework_11 from "homeworks/Homework11/Homework11";

import Layout_Team_1 from "pages/EmployeeAppProject/Layout_Team_1/Layout_Team_1";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        {/* <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/clients/client_1" element={<Apple />} />
            <Route path="/clients/client_2" element={<Google />} />
            <Route path="/clients/client_3" element={<Facebook />} />
            <Route path="*" element="Page Not Found!!!" />
          </Routes>
        </Layout> */}
        <Layout_Team_1>
          <Routes>
            <Route />
            <Route />
          </Routes>
        </Layout_Team_1>
        {/* <Lesson06 /> */}
        {/* <Homework06/> */}
        {/* <Lesson07 /> */}
        {/* <Homework07 /> */}
        {/* <Lesson_08 /> */}
        {/* <Homework08 /> */}
        {/* <Lesson_09/> */}
        {/* <Lesson_10/> */}
        {/* <Lesson_11/> */}
        {/* <Homework_11/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
