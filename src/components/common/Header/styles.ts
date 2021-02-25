import styled from "@emotion/styled";
import { BREAKPOINTS, COLORS } from "../../../utils/constants";

export const HeaderMain = styled.div`
  background-color: ${COLORS.darkPurple};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  @media screen and (min-width: ${BREAKPOINTS.tablet}) {
    height: 4rem;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${COLORS.white};
  font-weight: 300;

  @media screen and (min-width: ${BREAKPOINTS.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const HeaderLogoText = styled.div`
  color: ${COLORS.white};
  font-weight: bold;
  text-transform: uppercase;
`;

export const HeaderLogout = styled.div`
  color: ${COLORS.purpleGray};
`;
