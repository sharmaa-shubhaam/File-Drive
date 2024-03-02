import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

type Session = {
   token: string | undefined;
   auth: {
      email: string | undefined;
      password: string | undefined;
   };
};

const sessionReducer = createSlice({
   name: "session",
   initialState: <Session>{
      token: undefined,
      auth: {
         email: undefined,
         password: undefined,
      },
   },
   reducers: {
      previousSession: (state) => {
         return (state = {
            token: localStorage.getItem("token")?.toString(),
            auth: {
               email: localStorage.getItem("email")?.toString(),
               password: localStorage.getItem("password")?.toString(),
            },
         });
      },
      createSession: (state, action: PayloadAction<Session>) => {
         localStorage.setItem("token", action.payload.token || "");
         localStorage.setItem("email", action.payload.auth.email || "");
         localStorage.setItem("password", action.payload.auth.password || "");

         return action.payload;
      },
      endSession: (state) => {
         localStorage.clear();

         return {
            token: undefined,
            auth: {
               email: undefined,
               password: undefined,
            },
         };
      },
   },
});

export const hasSession = (state: RootState) => state.session;
export const { createSession, endSession, previousSession } = sessionReducer.actions;

export default sessionReducer.reducer;
