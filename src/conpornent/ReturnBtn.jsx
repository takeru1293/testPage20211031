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
  // HTML定義--------------------------------------------------------
  return (
    <div>
      <button onClick={retrunShowPage}>戻る</button>
    </div>
  );
};
