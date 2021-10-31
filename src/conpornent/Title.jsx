import React from "react";

export const Title = (prop) => {
  const { title } = prop;
  const style = {
    fontSize: "40px",
    color: "#888888",
    textAlign: "center"
  };

  return <div style={style}>{title}</div>;
};
