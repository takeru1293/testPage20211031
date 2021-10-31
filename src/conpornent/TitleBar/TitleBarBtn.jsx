import React from "react";

export const TitleBarBtn = (prop) => {
  const { titleName } = prop;
  return (
    <div>
      <button>{titleName}</button>
    </div>
  );
};
