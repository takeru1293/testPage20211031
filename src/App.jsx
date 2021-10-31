import "./styles.css";
import React, { useState } from "react";
import { AAAController } from "./Controller/AAAController";
import { BBBController } from "./Controller/BBBController";

export const App = () => {
  const [showAAA, setShowAAA] = useState(true);
  const [showBBB, setShowBBB] = useState(false);
  const showPageInfo = { showAAA, setShowAAA, showBBB, setShowBBB };

  const renderPage = () => {
    let page;
    if (showAAA) page = <AAAController showPageInfo={showPageInfo} />;
    else if (showBBB) page = <BBBController showPageInfo={showPageInfo} />;
    return page;
  };

  return <>{renderPage()}</>;
};
