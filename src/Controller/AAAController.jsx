import React from "react";
import { NextBtn } from "../conpornent/NextBtn";
import { Title } from "../conpornent/Title";

export const AAAController = (prop) => {
  const { showPageInfo } = prop;

  const pageStyle = {};

  return (
    <div class="pageStyle">
      <Title title="AAA画面" />
      <NextBtn showPageInfo={showPageInfo} />
    </div>
  );
};
