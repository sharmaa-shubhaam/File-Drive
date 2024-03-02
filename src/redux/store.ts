import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import FilesReducer from "./FilesReducer";

const store = configureStore({
   reducer: {
      files: FilesReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
