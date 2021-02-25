import styled from "@emotion/styled";
import { COLORS } from "../../../utils/constants";

export const PostDetailCommentsComment = styled.div`
  background-color: ${COLORS.lightPurple};
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 5px;
`;

export const PostDetailCommentsName = styled.div`
  font-weight: 500;
`;

export const PostDetailCommentsEmail = styled.span`
  font-weight: 300;
`;

export const PostDetailCommentsContent = styled.div`
  margin-top: 1rem;
`;
