import React, { FC } from "react";
import { useTranslation } from "react-i18next";

const Loader: FC = () => {
  const { t } = useTranslation();

  return <>{t("common.loading")}</>;
};

export default Loader;
