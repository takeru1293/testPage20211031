import React from "react";
import { NextBtn } from "../conpornent/NextBtn";
import { ReturnBtn } from "../conpornent/ReturnBtn";
import { Title } from "../conpornent/Title";

export const AAAController = (prop) => {
  const { showPageInfo } = prop;

  const pageStyle = {};

  return (
    <>
      <Title title="AAA画面" />
      <div class="pageStyle">
        <NextBtn showPageInfo={showPageInfo} />
        <ReturnBtn showPageInfo={showPageInfo} />
      </div>
    </>
  );
};
