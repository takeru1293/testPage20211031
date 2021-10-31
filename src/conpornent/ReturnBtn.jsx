import React from "react";

export const ReturnBtn = (prop) => {
  // 引数定義--------------------------------------------------------
  const { showPageInfo } = prop;
  const { showAAA, setShowAAA, showBBB, setShowBBB } = showPageInfo;

  // 処理定義--------------------------------------------------------
  const retrunShowPage = () => {
    if (showAAA) {
      setShowAAA(false);
    } else if (showBBB) {
      setShowAAA(true);
      setShowBBB(false);
    }
  };

  // CSS定義--------------------------------------------------------
  const style = {
    position: "absolute",
    bottom: "5%",
    left: "5%"
  };

  const bntStyle = {
    width: "150px",
    height: "50px",
    fontSize: "20px"
  };

  // HTML定義--------------------------------------------------------
  return (
    <div style={style}>
      <button style={bntStyle} onClick={retrunShowPage}>
        戻る
      </button>
    </div>
  );
};
