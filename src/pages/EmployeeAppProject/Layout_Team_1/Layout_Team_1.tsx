import { useNavigate } from "react-router-dom";

import {
  LayoutWrapper,
  Header,
  Main,
  Link,
  Logo,
  LogoImg,
  NavigationContainer,
} from "./styles";
import { LayoutProps, Employee } from "./types";

function Layout_Team_1({ children }: LayoutProps) {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <LayoutWrapper>
      <Header>
        <Logo onClick={goToHomePage}>
          <LogoImg src="https://static.vecteezy.com/system/resources/thumbnails/012/986/755/small/abstract-circle-logo-icon-free-png.png" alt="" />
        </Logo>
        <NavigationContainer>
          <Link
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
            to=""
          >
            Create Employee
          </Link>
          <Link
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
            to=""
          >
            Employees
          </Link>
        </NavigationContainer>
      </Header>
      <Main>{children}</Main>
    </LayoutWrapper>
  );
}

export default Layout_Team_1;
