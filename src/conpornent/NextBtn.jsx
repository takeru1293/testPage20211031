import React from "react";

export const NextBtn = (prop) => {
  // 引数定義--------------------------------------------------------
  const { showPageInfo } = prop;
  const { showAAA, setShowAAA, showBBB, setShowBBB } = showPageInfo;

  // 処理定義--------------------------------------------------------
  const nextShowPage = () => {
    if (showAAA) {
      setShowAAA(false);
      setShowBBB(true);
    } else if (showBBB) {
      setShowBBB(false);
    }
  };
  // CSS定義--------------------------------------------------------
  const style = {
    position: "absolute",
    bottom: "5%",
    right: "5%"
  };

  const bntStyle = {
    width: "150px",
    height: "50px",
    fontSize: "20px"
  };

  // HTML定義--------------------------------------------------------
  return (
    <div style={style}>
      <button style={bntStyle} onClick={nextShowPage}>
        つぎへ
      </button>
    </div>
  );
};
