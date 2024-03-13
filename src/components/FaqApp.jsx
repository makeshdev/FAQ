import React, { useState } from "react";
import "../App.css";

export const FaqApp = ({ heading, paragraph }) => {
  const [show, setShow] = useState(false);

  const clickHere = () => {
    setShow(!show);
  };
  return (
    <>
      <div className={`box ${show ? "active" : ""}`}>
        <div className="heading" onClick={clickHere}>
          {heading}
        </div>
        <div className="body">{paragraph}</div>
      </div>
    </>
  );
};
