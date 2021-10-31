import React from "react";
import { NextBtn } from "../conpornent/NextBtn";
import { ReturnBtn } from "../conpornent/ReturnBtn";

export const BBBController = (prop) => {
  const { showPageInfo } = prop;
  return (
    <div>
      <>
        <div>BBB画面</div>
        <NextBtn showPageInfo={showPageInfo} />
        <ReturnBtn />
      </>
    </div>
  );
};
