import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import DestinationPage from "./pages/DestinationPage";
import OmOss from "./pages/OmOss";
import LogInPage from "./pages/LogInPage";
import RegisterUserPage from "./pages/RegisterUserPage";
import MyPage from "./pages/MyPage";
import UserPage from "./pages/UserPage";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/destination/:id" element={<DestinationPage />} />
        <Route path="/omoss" element={<OmOss/>} />
        <Route path="/logginn" element={<LogInPage/>} />
        <Route path="/registrering" element={<RegisterUserPage/>} />
        <Route path="/mypage/*" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
