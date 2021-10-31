import React from "react";
import { NextBtn } from "../conpornent/NextBtn";
import { Title } from "../conpornent/Title";
import { TitleBar } from "../conpornent/TitleBar/TitleBar";

export const AAAController = (prop) => {
  const { showPageInfo } = prop;

  return (
    <div class="pageStyle">
      <Title title="AAA画面" />
      <TitleBar />
      <NextBtn showPageInfo={showPageInfo} />
    </div>
  );
};
