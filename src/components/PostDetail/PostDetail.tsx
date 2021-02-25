import React, { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import postApi from "../../api/post";
import { Post } from "../../models/post";
import { H2 } from "../../styles/title";
import Loader from "../common/Loader/Loader";
import Page from "../common/Page/Page";
import { PostDetailText } from "./styles";
import PostDetailComments from "./PostDetailComments/PostDetailComments";
import commentApi from "../../api/comment";
import { Comment } from "../../models/comment";

const PostDetail: FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(false);
  const [postData, setPostData] = useState<Post>();
  const [commentsData, setCommentsData] = useState<Comment[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const responsePost = await postApi.getPost(id);
        const responseComments = await commentApi.getPostComments(id);
        setPostData(responsePost.data);
        setCommentsData(responseComments.data);
      } catch (err) {
        toast.error(t("common.loadError"));
      }
      setLoading(false);
    })();
  }, [t, id]);

  return (
    <Page pageHeaderContent={<H2>{postData?.title}</H2>}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <PostDetailText>{postData?.body}</PostDetailText>
          <PostDetailComments data={commentsData} />
        </>
      )}
    </Page>
  );
};

export default PostDetail;
