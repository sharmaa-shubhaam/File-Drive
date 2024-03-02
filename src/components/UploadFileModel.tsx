import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useAppDispatch } from "../redux/store";
import { updateFiles, FileType } from "../redux/FilesReducer";

type UploadFileModelProps = {
   IsModelOpen: any;
   file: FileType;
};

function UploadFileModel({ IsModelOpen, file }: UploadFileModelProps) {
   const [loading, setLoading] = useState<boolean>(false);
   const disptach = useAppDispatch();

   async function uploadFile() {
      try {
         setLoading(true);
         setTimeout(() => {
            disptach(updateFiles(file));
            setLoading(false);
            IsModelOpen(false);
         }, 1000);
      } catch (error) {}
   }

   return (
      <div className="px-10 py-5 bg-white rounded-md space-y-5 max-w-[450px]">
         <div className="text-center">
            <h2 className="text-xl">Upload a File</h2>
         </div>
         <div className="text-sm space-y-1">
            <p>Name: {file.name}</p>
            <p>Type: {file.type}</p>
            <p>Size: {file.size}</p>
         </div>
         <div className="space-y-1">
            <label htmlFor="file" className="text-sm text-gray-600">
               Enter Filename - optional
            </label>
            <div className="border rounded bg-white">
               <input
                  type="text"
                  placeholder="Filename"
                  className="text-sm w-full px-3 py-2 bg-transparent"
                  autoCorrect="false"
                  autoComplete="true"
                  autoFocus
                  onChange={(e) => {
                     file.name = e.target.value;
                  }}
               />
            </div>
         </div>
         <div className="flex items-center space-x-12">
            <button
               className="text-sm bg-black/50 text-white w-[150px] py-2.5 rounded active:scale-95"
               onClick={() => IsModelOpen(false)}
            >
               Cancel
            </button>
            <button
               className="text-sm flex items-center justify-center bg-blue-500 text-white w-[150px] py-2.5 rounded active:scale-95 capitalize"
               onClick={uploadFile}
            >
               {loading ? (
                  <RotatingLines
                     visible={true}
                     width="20"
                     strokeWidth="3"
                     strokeColor="#fff"
                     animationDuration="0.75"
                     ariaLabel="rotating-lines-loading"
                  />
               ) : (
                  "upload"
               )}
            </button>
         </div>
      </div>
   );
}

export default UploadFileModel;
