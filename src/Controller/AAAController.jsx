import React from "react";
import { NextBtn } from "../conpornent/NextBtn";
import { Title } from "../conpornent/Title";
import { TitleBar } from "../conpornent/TitleBar/TitleBar";
import { InputArea } from "../conpornent/InputArea";

export const AAAController = (prop) => {
  const { showPageInfo } = prop;
  const inputAreaStyle = {
    padding: "20px 20px",
    position: "relative"
  };
  const inputTop = "70px";

  return (
    <div className="pageStyle">
      <Title title="AAA画面" />
      <TitleBar />
      <div style={inputAreaStyle}>
        <h3>おなまえ</h3>
        <InputArea
          positionTop={inputTop}
          positionleft="20px"
          placeholder="山田"
        />
        <InputArea
          positionTop={inputTop}
          positionleft="280px"
          placeholder="太郎"
        />
      </div>
      <NextBtn showPageInfo={showPageInfo} />
    </div>
  );
};
