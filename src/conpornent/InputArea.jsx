import React from "react";

export const InputArea = (prop) => {
  const { positionTop, positionleft, placeholder, width } = prop;
  const inputStyle = {
    width: width,
    height: "30px",
    position: "absolute",
    top: positionTop,
    left: positionleft,
    fontSize: "20px"
  };

  const areaStyle = {
    width: "100%",
    height: "30px"
  };

  return (
    <div style={areaStyle}>
      <input style={inputStyle} type="text" placeholder={placeholder} />
    </div>
  );
};
