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
  return (
    <LayoutWrapper>
      <Header>
        <Logo>
          <Link to="/">
            <LogoImg
              src="https://cdn.pixabay.com/photo/2017/09/03/00/44/png-2709031_640.png"
              alt="App logo"
            />
          </Link>
        </Logo>
        <NavigationContainer>
          <Link
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/"
          >
            Home
          </Link>
          <Link
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/contactUs"
          >
            Contact Us
          </Link>
          <Link
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/about"
          >
            About
          </Link>
          <Link
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/login"
          >
            Log In
          </Link>

          <Link
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/clients"
          >
            Clients
          </Link>
        </NavigationContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <FooterLogo>
        <Link to="/">
            <LogoImg
              src="https://cdn.pixabay.com/photo/2017/09/03/00/44/png-2709031_640.png"
              alt="App logo"
            />
          </Link>
        </FooterLogo>
        <FooterNavigation>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/contactUs">Contact Us</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/login">Log In</FooterLink>
          <FooterLink to="/clients">Clients</FooterLink>
        </FooterNavigation>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;
