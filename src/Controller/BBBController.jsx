import React from "react";
import { NextBtn } from "../conpornent/NextBtn";
import { ReturnBtn } from "../conpornent/ReturnBtn";
import { Title } from "../conpornent/Title";

export const BBBController = (prop) => {
  const { showPageInfo } = prop;
  return (
    <div>
      <Title title="BBB画面" />
      <NextBtn showPageInfo={showPageInfo} />
      <ReturnBtn showPageInfo={showPageInfo} />
    </div>
  );
};
