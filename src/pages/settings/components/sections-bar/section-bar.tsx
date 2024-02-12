import React, { useState } from "react";
import "./section-bar.styles.scss";
import sectionData from "./section-bar.data";

const SectionBar = () => {
  const [active, setActive] = useState<number>(sectionData[2].id);
  return (
    <div className="section-bar">
      {sectionData.map((section) => (
        <div
          onClick={() => {
            setActive(section.id);
          }}
          key={section.id}
          className={`sb__section ${
            active === section.id ? "sb__section-active" : ""
          }`}
        >
          <img src={section.icon} alt="" />
          <div className="sb__name-contents">
            <p className="sb__name">{section.title}</p>
            <span className="sb__contents">{section.content}</span>
          </div>
          <div
            className={active === section.id ? "sb__bar-active" : "sb__bar"}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default SectionBar;
