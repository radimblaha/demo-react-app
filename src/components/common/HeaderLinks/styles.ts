import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { BREAKPOINTS, COLORS } from "../../../utils/constants";

export const HeaderLinksMain = styled.nav`
  margin: 1rem 0;

  .active {
    color: ${COLORS.white} !important;
    font-weight: bold;
  }

  @media screen and (min-width: ${BREAKPOINTS.tablet}) {
    display: flex;
    margin: 0;
  }
`;

export const HeaderMenuLink = styled(NavLink)`
  width: 100%;
  padding: 0.25rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.purpleGray};
  text-decoration: none;
  text-align: center;

  &:hover {
    color: ${COLORS.white};
  }

  @media screen and (min-width: ${BREAKPOINTS.tablet}) {
    display: flex;
    padding: 0 0.5rem;
  }
`;
