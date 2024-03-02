import { Provider } from "react-redux";
import store from "./store";
import React from "react";

function ReduxProvider({ children }: { children: React.ReactNode }) {
   return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;
