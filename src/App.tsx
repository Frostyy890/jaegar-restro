import React, { lazy } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import Login from "./pages/login/login.page";
import Signup from "./pages/sign-up/sign-up.page";
import { useAppSelector } from "./redux/store";
const HomePage = lazy(() => import("./pages/homepage/home.page"));
const Dashboard = lazy(() => import("./pages/dashboard/dashboard.page"));
const Settings = lazy(() => import("./pages/settings/settings.page"));

function App() {
  const { token } = useAppSelector((state) => state.auth);
  return (
    <div className="App">
      {/* <Sidebar /> */}
      <Routes>
        {token ? (
          <Route element={<Sidebar />}>
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/homepage" />} />
          </Route>
        ) : (
          <>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
