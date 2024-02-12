import React from "react";
import "./settings.styles.scss";
import SectionBar from "./components/sections-bar/section-bar";
import SectionBox from "./components/section-box/section-box";

const Settings = () => {
  return (
    <div className="settings">
      <div className="page__title">Settings</div>
      <div className="page__body">
        <SectionBar />
        <SectionBox />
      </div>
    </div>
  );
};

export default Settings;
