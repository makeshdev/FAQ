import React from "react";
import { FaqApp } from "./FaqApp";
import "../App.css";

export const Index = ({ data }) => {
  return (
    <>
      <div className="accordion">
        <h2>FAQ</h2>
        {data.map((item) => (
          <FaqApp
            key={item.id}
            heading={item.heading}
            paragraph={item.paragraph}
          />
        ))}
      </div>
    </>
  );
};
