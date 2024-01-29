import React, { useState } from "react";
import "./header.styles.scss";

const DashboardHeader = () => {
  const today = new Date();
  const date = new Intl.DateTimeFormat("en-us", {
    dateStyle: "full",
  });
  return (
    <header className="dash-header container header nav-container">
      <div className="name-date-col">
        <h3 className="page-name">Dashboard</h3>
        <span className="date">{date.format(today)}</span>
      </div>
    </header>
  );
};

export default DashboardHeader;
