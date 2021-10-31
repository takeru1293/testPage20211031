import React from "react";
import { TitleBarBtn } from "./TitleBarBtn";

export const TitleBar = () => {
  const style = {
    backgroundColor: "#ffbbff",
    height: "75px",
    width: "100%"
  };

  return (
    <div style={style}>
      <TitleBarBtn titleName="aaaaaaa" />
      <TitleBarBtn titleName="bbbbbbb" />
      <TitleBarBtn titleName="ccccccc" />
      <TitleBarBtn titleName="ddddddd" />
      <TitleBarBtn titleName="ddddddd" />
    </div>
  );
};
