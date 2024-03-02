import { Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { hasSession, previousSession } from "./redux/sessionReducer";
import { useEffect } from "react";

function AppRoute() {
   const session = useAppSelector(hasSession).token;
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(previousSession());
   }, [session]);

   return (
      <>
         <Routes>
            <Route path="/" element={session ? <App /> : <Login />} />
         </Routes>
      </>
   );
}

export default AppRoute;
