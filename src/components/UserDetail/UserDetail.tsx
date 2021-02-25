import React, { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import userApi from "../../api/user";
import { User } from "../../models/user";
import { H2 } from "../../styles/title";
import Loader from "../common/Loader/Loader";
import Page from "../common/Page/Page";
import { UserDetailItem } from "./styles";

const UserDetail: FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<User>();

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await userApi.getUser(id);
        setData(response.data);
      } catch (err) {
        toast.error(t("common.loadError"));
      }
      setLoading(false);
    })();
  }, [t, id]);

  return (
    <Page pageHeaderContent={<H2>{data?.name}</H2>}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <UserDetailItem>{data?.email}</UserDetailItem>
          <UserDetailItem>
            {data?.address.street}, {data?.address.suite}, {data?.address.city}
          </UserDetailItem>
        </>
      )}
    </Page>
  );
};

export default UserDetail;
