import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type FileType = {
   name: string | null;
   type: string | null;
   size: number | null;
   file: string | ArrayBuffer | null;
};

const initialFiles: FileType[] = [];

const FilesReducer = createSlice({
   name: "files",
   initialState: initialFiles,
   reducers: {
      updateFiles: (state, action: PayloadAction<FileType>) => {
         const getIndex: number = action.payload.type?.lastIndexOf("/") || 0;
         action.type = action.payload.type?.substring(getIndex + 1 || 0) || "";

         return [...state, { ...action.payload, type: action.type }];
      },
      deleteAndUpdateFiles: (state, action: PayloadAction<string>) => {
         return state.filter((file) => file.name !== action.payload);
      },
   },
});

export const getFiles = (state: RootState) => state.files;
export const { updateFiles, deleteAndUpdateFiles } = FilesReducer.actions;

export default FilesReducer.reducer;
