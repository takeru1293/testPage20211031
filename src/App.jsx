import "./styles.css";
import React, { useState } from "react";
import { AAAController } from "./AAA/AAAController";
import { BBBController } from "./BBB/BBBController";

export const App = () => {
  const [showAAA, setShowAAA] = useState(true);
  const [showBBB, setShowBBB] = useState(false);
  const showPageInfoLB = [setShowAAA, setShowBBB];

  const renderPage = () => {
    let page;
    if (showAAA) page = <AAAController pageChange={showPageInfoLB} />;
    else if (showBBB) page = <BBBController pageChange={showPageInfoLB} />;
    return page;
  };

  return <>{renderPage()}</>;
};
