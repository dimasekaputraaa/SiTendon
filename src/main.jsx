import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewPage from "./Pages/NewPage";
import MonitoringPageDetails from "./Pages/MonitoringPageDetails";
import MonitoringPage from "./Pages/MonitoringPage/index.jsx";
import LandingPage from "./Pages/LandingPage/index.jsx";
import LoginPage from "./Pages/LoginPage/index.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/form",
    element: <NewPage />,
  },
  {
    path: "/detail",
    element: <MonitoringPageDetails />,
  },
  {
    path: "/monitoring",
    element: <MonitoringPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
