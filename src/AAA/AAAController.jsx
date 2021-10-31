import React from "react";
import { NextBtn } from "../conpornent/NextBtn";
import { ReturnBtn } from "../conpornent/ReturnBtn";

export const AAAController = (prop) => {
  const { showPageInfo } = prop;
  return (
    <>
      <div>AAA画面</div>
      <NextBtn showPageInfo={showPageInfo} />
      <ReturnBtn />
    </>
  );
};
