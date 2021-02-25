import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { AppContent } from "../../../styles/layout";
import HeaderLinks from "../HeaderLinks/HeaderLinks";
import {
  HeaderContent,
  HeaderLogoText,
  HeaderLogout,
  HeaderMain,
} from "./styles";

const Header: FC = () => {
  const { t } = useTranslation();

  return (
    <HeaderMain>
      <AppContent>
        <HeaderContent>
          <HeaderLogoText>{t("header.logoText")}</HeaderLogoText>
          <HeaderLinks />
          <HeaderLogout>{t("header.logout")}</HeaderLogout>
        </HeaderContent>
      </AppContent>
    </HeaderMain>
  );
};

export default Header;
