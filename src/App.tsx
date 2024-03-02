import React, { useRef, useState } from "react";
import FileList from "./components/FileList";
import Header from "./components/Header";
import UploadFileModel from "./components/UploadFileModel";
import { useAppSelector } from "./redux/store";
import { getFiles, FileType } from "./redux/FilesReducer";

function App() {
   const fileInputRef = useRef<HTMLInputElement>(null);
   const files = useAppSelector(getFiles);
   const [isModelOpen, setIsModelOpen] = useState<boolean>(false);
   const [fileData, setFileData] = useState<FileType>({ name: "", type: "", size: 0, file: "" });

   function selectFile(e: React.ChangeEvent<HTMLInputElement>) {
      const file = e.target.files;
      if (file) {
         const reader = new FileReader();

         reader.addEventListener("load", function () {
            setFileData({ name: file[0].name, type: file[0].type, size: file[0].size, file: this.result });
         });
         reader.readAsDataURL(file[0]);
         setIsModelOpen(true);
         return 1;
      }

      return 0;
   }

   return (
      <div className="poppins-regular">
         <Header />
         <div>
            <div className="flex items-center justify-between px-4 md:px-10 py-6 ">
               <div>
                  <h1 className="text-2xl capitalize">Your Files</h1>
               </div>
               <div>
                  <button
                     className="px-7 py-2.5 bg-blue-500 text-white rounded-md text-sm capitalize font-medium active:scale-[0.98] shadow-sm"
                     onClick={() => fileInputRef.current?.click()}
                  >
                     upload file
                  </button>
                  <input type="file" ref={fileInputRef} onChange={selectFile} hidden />
               </div>
            </div>
            {isModelOpen && (
               <div className="absolute top-0 w-full h-full bg-black/10 overflow-hidden flex items-center justify-center z-50">
                  <UploadFileModel IsModelOpen={setIsModelOpen} file={fileData} />
               </div>
            )}

            <div className="md:px-10 pb-4 pt-1 space-y-1">
               <div className="w-full px-6 py-2.5 rounded flex items-center space-x-8 border border-gray-200  shadow-sm hover:bg-gray-100">
                  <span className="text-sm">Index</span>
                  <div className="flex-1">
                     <span className="text-sm">Filename</span>
                  </div>
                  <div className="flex items-center space-x-6 text-sm">
                     <span>Type</span>
                     <span>Download</span>
                     <span>Delete</span>
                  </div>
               </div>

               {files.map((file, index) => {
                  return <FileList name={file.name} type={file.type} file={file.file} index={index} key={index} />;
               })}
            </div>
         </div>
      </div>
   );
}

export default App;
