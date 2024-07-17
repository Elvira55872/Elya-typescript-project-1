import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  flex: 1;
  gap: 30px;
`;

export const ButtonContainer = styled.div`
width: fit-content;
`;

export const ClientsList = styled.ul`
padding: 20px;
`;

export const Link = styled(NavLink)`
  color: black;
  font-size: 20px;
  font-weight: normal;
  text-decoration: none;
`;

export const Titel = styled.h1`
`;