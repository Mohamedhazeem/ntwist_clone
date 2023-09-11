import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { Mine } from "./pages/Mine.tsx";

import { Layout } from "./pages/Layout.tsx";
import { useLocation } from "react-router-dom";
import { Sustainability } from "./pages/Sustainability.tsx";
import { Mineral } from "./pages/Mineral.tsx";
import { Oil } from "./pages/Oil.tsx";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Layout />
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "mine",
        element: <Mine />,
      },
      {
        path: "sustainability",
        element: <Sustainability />,
      },
      {
        path: "mineral",
        element: <Mineral />,
      },
      {
        path: "oil",
        element: <Oil />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
