import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReduxProvider from "./redux/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <BrowserRouter>
         <ReduxProvider>
            <Routes>
               <Route path="/" element={<App />} />
            </Routes>
         </ReduxProvider>
      </BrowserRouter>
   </React.StrictMode>
);
