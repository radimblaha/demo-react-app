import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { COLORS } from "../../../utils/constants";
import { BackButtonMain } from "./styles";

const BackButton: FC = () => (
  <BackButtonMain>
    <FontAwesomeIcon icon={faArrowLeft} color={COLORS.font} />
  </BackButtonMain>
);

export default BackButton;
