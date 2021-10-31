import React from "react";

export const InputArea = (prop) => {
  const { positionTop, positionleft, placeholder } = prop;
  const inputStyle = {
    width: "200px",
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
