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
  // HTML定義--------------------------------------------------------
  return (
    <div>
      <button onClick={nextShowPage}>つぎへ</button>
    </div>
  );
};
