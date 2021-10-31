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
  const anotationStlye = {
    position: "absolute",
    top: "175px",
    left: "470px",
    fontSize: "30px"
  };
  const inputNameTop = "70px";
  const inputNameWidth = "200px";
  const inputAddressTop = "200px";

  return (
    <div className="pageStyle">
      <Title title="AAA画面" />
      <TitleBar />
      <div style={inputAreaStyle}>
        <h3>おなまえ</h3>
        <InputArea
          positionTop={inputNameTop}
          positionleft="20px"
          placeholder="山田"
          width={inputNameWidth}
        />
        <InputArea
          positionTop={inputNameTop}
          positionleft="300px"
          placeholder="太郎"
          width={inputNameWidth}
        />
        <h3>メールアドレス</h3>
        <InputArea
          positionTop={inputAddressTop}
          positionleft="20px"
          placeholder="mailadoress"
          width="400px"
        />
        <h3 style={anotationStlye}>@</h3>
        <InputArea
          positionTop={inputAddressTop}
          positionleft="500px"
          placeholder="gmail.com"
          width="200px"
        />
      </div>
      <NextBtn showPageInfo={showPageInfo} />
    </div>
  );
};
