import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import LoginPage from "./Pages/LoginPage/index.jsx";
import NewPage from "./Pages/NewPage";
import MonitoringPageDetails from "./Pages/MonitoringPageDetails";
import MonitoringPage from "./Pages/MonitoringPage/index.jsx";
import SideBar from "./components/SideBar/index.jsx";
import TopBar from "./components/TopBar/index.jsx";
import InputComp from "./components/Form/Input/index.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <SideBar />
        <TopBar>
          <NewPage />
        </TopBar>
      </>
    ),
  },
  {
    path: "/home",
    element: (
      <>
        <SideBar />
        <TopBar>
          <NewPage />
        </TopBar>
      </>
    ),
  },
  {
    path: "/login",
    element: <InputComp />,
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
