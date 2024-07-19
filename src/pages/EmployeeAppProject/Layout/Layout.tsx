import { useNavigate } from "react-router-dom";

import {
  LayoutWrapper,
  Header,
  Main,
  Footer,
  Link,
  Logo,
  FooterLogo,
  LogoImg,
  NavigationContainer,
  FooterNavigation,
  FooterLink,
} from "./styles";
import { LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <LayoutWrapper>
      <Header>
        <Logo onClick={goToHomePage}>
          <LogoImg
            src=""
            alt=""
          />
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
      <Footer>
        <FooterLogo>
          <LogoImg
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
            alt="App logo"
          />
        </FooterLogo>
        <FooterNavigation>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/clients">Clients</FooterLink>
          <FooterLink to="/contactUs">Contact Us</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/login">Log In</FooterLink>
        </FooterNavigation>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;
