import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ReduxProvider from "./redux/index.tsx";
import AppRoute from "./route.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <BrowserRouter>
         <ReduxProvider>
            <AppRoute />
         </ReduxProvider>
      </BrowserRouter>
   </React.StrictMode>
);
