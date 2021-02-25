import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { HeaderLinksMain, HeaderMenuLink } from "./styles";

const linkDefs = ["users", "posts"];

const HeaderLinks: FC = () => {
  const { t } = useTranslation();

  return (
    <HeaderLinksMain>
      {linkDefs.map((l) => (
        <HeaderMenuLink key={l} to={`/${l}`} activeClassName={"active"}>
          {t(`header.links.${l}`)}
        </HeaderMenuLink>
      ))}
    </HeaderLinksMain>
  );
};

export default HeaderLinks;
