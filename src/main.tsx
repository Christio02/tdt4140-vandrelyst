import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import DestinationPage from "./pages/DestinationPage";
import LogInPage from "./pages/LogInPage";
import RegisterUserPage from "./pages/RegisterUserPage";
import UserPage from "./pages/UserPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/destination/:id" element={<DestinationPage />} />
        <Route path="/logginn" element={<LogInPage />} />
        <Route path="/registrering" element={<RegisterUserPage />} />
        <Route path="/mypage/*" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
