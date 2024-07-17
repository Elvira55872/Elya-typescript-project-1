import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";
import Layout from "components/Layout/Layout";
import Home from "pages/EmployeeApp/Home/Home";
import About from "pages/EmployeeApp/About/About";
import LogIn from "pages/EmployeeApp/LogIn/LogIn";
import ContactUs from "pages/EmployeeApp/ContactUs/ContactUs";
import Clients from "pages/EmployeeApp/Clients/Clients";
import Client_1 from "pages/EmployeeApp/Clients/Client_1/Client_1";
import Client_2 from "pages/EmployeeApp/Clients/Client_2/Client_2";
import Client_3 from "pages/EmployeeApp/Clients/Client_3/Client_3";

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

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/clients/client_1" element={<Client_1 />} />
            <Route path="/clients/client_2" element={<Client_2 />} />
            <Route path="/clients/client_3" element={<Client_3 />} />
            <Route path="*" element="Page Not Found!!!" />
          </Routes>
        </Layout>
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
