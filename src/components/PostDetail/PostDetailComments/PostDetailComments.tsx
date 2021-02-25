import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Comment } from "../../../models/comment";
import { OverflowX } from "../../../styles/layout";
import { H3 } from "../../../styles/title";
import {
  PostDetailCommentsComment,
  PostDetailCommentsContent,
  PostDetailCommentsEmail,
  PostDetailCommentsName,
} from "./styles";

const PostDetailComments: FC<{ data: Comment[] }> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <>
      <H3>{t("postsDetail.comments.title")}</H3>
      {data.map((record) => (
        <OverflowX key={record.id}>
          <PostDetailCommentsComment>
            <PostDetailCommentsName>
              {record.name}{" "}
              <PostDetailCommentsEmail>
                ({record.email})
              </PostDetailCommentsEmail>
            </PostDetailCommentsName>
            <PostDetailCommentsContent>{record.body}</PostDetailCommentsContent>
          </PostDetailCommentsComment>
        </OverflowX>
      ))}
    </>
  );
};

export default PostDetailComments;
