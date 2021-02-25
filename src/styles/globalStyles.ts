import { css } from "@emotion/react";
import { COLORS } from "../utils/constants";

export const GlobalStyles = css`
  :root {
    font-size: 16px;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
  }

  body {
    height: 100vh;
    color: ${COLORS.font};
    background-color: ${COLORS.white};
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    line-height: 1.2;
  }
`;
