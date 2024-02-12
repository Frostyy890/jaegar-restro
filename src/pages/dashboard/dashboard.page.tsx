import React from "react";
import "./dashboard.styles.scss";
import DashboardHeader from "./components/header/header";
import StatCard from "./components/stat-cards/card";
import OrderedByName from "./components/most-ordered/byName/ordered-by-name";
import OrderedByType from "./components/most-ordered/byType/ordered-by-type";
import Table from "./components/table/table";

const Dashboard = () => {
  return (
    <div id="dashboard">
      <div className="main-container">
        <div className="dashboard__header">
          <DashboardHeader />
        </div>
        <div className="cards-container">
          <StatCard />
          <StatCard />
          <StatCard />
        </div>
        <Table />
      </div>
      <div className="side-container">
        <OrderedByName />
        <OrderedByType />
      </div>
    </div>
  );
};

export default Dashboard;
