import React, { FC, ReactNode } from "react";
import { AppContent } from "../../../styles/layout";
import BackButton from "../BackButton/BackButton";
import { PageHeaderContent, PageHeaderMain } from "./styles";

// TODO: BackButton
const PageHeader: FC<{ content?: ReactNode; isBackButton?: boolean }> = ({
  content,
  isBackButton,
}) => {
  return (
    <PageHeaderMain>
      <AppContent>
        {isBackButton && <BackButton />}
        <PageHeaderContent>{content}</PageHeaderContent>
      </AppContent>
    </PageHeaderMain>
  );
};

export default PageHeader;
