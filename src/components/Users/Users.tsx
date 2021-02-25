import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { H2 } from "../../styles/title";
import Page from "../common/Page/Page";
import UsersTable from "./UsersTable/UsersTable";

const Users: FC = () => {
  const { t } = useTranslation();

  return (
    <Page pageHeaderContent={<H2>{t("users.title")}</H2>}>
      <UsersTable />
    </Page>
  );
};

export default Users;
