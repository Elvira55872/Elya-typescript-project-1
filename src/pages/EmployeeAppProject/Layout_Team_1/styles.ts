import styled from "@emotion/styled";
import { NavLink, Link as SimpleLink } from "react-router-dom";

export enum COLORS_TEAM_1 {
  BACKGROUND_BLUE = "#112233",
  HEADER_WHITE = "#FAF9FF",
  CARD_WHITE = "#FFFFFF",
}

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${COLORS_TEAM_1.BACKGROUND_BLUE};
  font-family: Arial, Helvetica, sans-serif;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  /* border-bottom: 1px solid black; */
  background-color: ${COLORS_TEAM_1.HEADER_WHITE};
  padding: 20px 40px;
  color: white;
`;

export const Logo = styled.div`
  height: 100%;
  width: 80px;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 30px;
  height: 100%;
  align-items: center;
`;

export const Link = styled(NavLink)`
  color: white;
  font-size: 20px;
  font-weight: normal;
  text-decoration: none;
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  padding: 40px;
`;
