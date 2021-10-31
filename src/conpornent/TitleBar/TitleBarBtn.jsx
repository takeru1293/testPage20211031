import React from "react";

const style = {
  fontSize: "30px",
  textDecoration: "none",
  color: "#fff",
  fontWeight: "bold",
  width: "20%",
  height: "100%",
  textAlign: "center",
  borderRadius: "0px",
  float: "left",
  margin: "0px",
  border: "solid"
};

export const TitleBarBtn = (prop) => {
  const { titleName } = prop;
  return (
    <button className="titlename" style={style}>
      {titleName}
    </button>
  );
};
