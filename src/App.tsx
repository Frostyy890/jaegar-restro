import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import Sidebar from "./components/sidebar/sidebar";
import Dashboard from "./pages/dashboard/dashboard";
import Login from "pages/login/login";
import Signup from "pages/sign-up/sign-up";
import { useAppSelector } from "./redux/store";

function App() {
  // const token = localStorage.getItem("token");
  const { token } = useAppSelector((state) => state.auth);
  return (
    <div className="App">
      {/* <Sidebar /> */}
      <Routes>
        {token ? (
          <Route element={<Sidebar />}>
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
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
