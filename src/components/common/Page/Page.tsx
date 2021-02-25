import React, { FC, ReactNode } from "react";
import { AppContent } from "../../../styles/layout";
import Header from "../Header/Header";
import PageHeader from "../PageHeader/PageHeader";
import { PageMain } from "./styles";

const Page: FC<{ pageHeaderContent?: ReactNode }> = ({
  pageHeaderContent,
  children,
}) => {
  return (
    <PageMain>
      <Header />
      <PageHeader content={pageHeaderContent} />
      <AppContent>{children}</AppContent>
    </PageMain>
  );
};

export default Page;
