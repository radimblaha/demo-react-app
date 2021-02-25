import styled from "@emotion/styled";
import { COLORS } from "../utils/constants";

export const Table = styled.table<{ size?: "small" | "middle" }>`
  width: 100%;
  border-spacing: 0;

  tr {
    transition: background-color 0.2s ease-in-out;
  }

  thead {
    tr {
      background-color: ${COLORS.lightPurple};
    }
  }

  th {
    font-weight: normal;
    white-space: pre;
    width: 1%;

    &:first-of-type {
      font-weight: bold;
    }
  }

  td {
    border-bottom: 1px solid ${COLORS.lightPurple};

    > div {
      width: max-content;
    }
  }

  td,
  th {
    text-align: start;
    padding: ${({ size }) => {
      switch (size) {
        case "small":
          return "0.4rem 0.2rem";
        default:
          return "0.75rem 1rem";
      }
    }};
  }

  th {
    padding: ${({ size }) => {
      switch (size) {
        case "small":
          return "0.4rem";
        default:
          return "1rem";
      }
    }};
  }
`;
