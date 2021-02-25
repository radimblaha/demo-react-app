import React, { FC, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { PostsTableContainer } from "./styles";
import Loader from "../../common/Loader/Loader";
import { OverflowX } from "../../../styles/layout";
import postApi from "../../../api/post";
import { Post } from "../../../models/post";
import { useHistory } from "react-router";

const cols = ["id", "title"];

const PostsTable: FC = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Post[]>([]);

  const tableCols = useMemo(
    () => cols.map((col) => <th key={col}>{t(`posts.table.${col}`)}</th>),
    [t]
  );

  const tableRows = useMemo(
    () =>
      data.map((record) => (
        <tr key={record.id} onClick={() => history.push(`/posts/${record.id}`)}>
          <td>{record.id}</td>
          <td>{record.title}</td>
        </tr>
      )),
    [data, history]
  );

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await postApi.getPosts();
        setData(response.data);
      } catch (err) {
        toast.error(t("common.loadError"));
      }
      setLoading(false);
    })();
  }, [t]);

  return (
    <OverflowX>
      {loading ? (
        <Loader />
      ) : (
        <PostsTableContainer>
          <thead>
            <tr>{tableCols}</tr>
          </thead>

          <tbody>{tableRows}</tbody>
        </PostsTableContainer>
      )}
    </OverflowX>
  );
};

export default PostsTable;
