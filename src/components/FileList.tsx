import { HiOutlineDownload } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";
import { useAppDispatch } from "../redux/store";
import { deleteAndUpdateFiles } from "../redux/FilesReducer";

type FileListProps = {
   name: string | null;
   type: string | null;
   index: number;
   file: string | ArrayBuffer | null;
};

function FileList(props: FileListProps) {
   const disptach = useAppDispatch();

   function deleteFile() {
      disptach(deleteAndUpdateFiles(props.name || ""));
   }

   function downloadFile() {
      let link = document.createElement("a");
      let url = URL.createObjectURL(new Blob([props.file || ""]));
      link.href = url;
      link.setAttribute("download", `${props.name}.${props.type}`);

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
   }

   return (
      <div className="w-full px-6 py-2.5 rounded flex items-center space-x-10 border border-gray-200  shadow-sm hover:bg-gray-100">
         <span className="text-sm !ml-3">{props.index + 1}.</span>
         <div className="flex-1">
            <h2 className="text-sm font-medium">{props.name}</h2>
         </div>
         <div className="flex items-center space-x-12">
            <span className="text-sm text-gray-400">.{props.type}</span>
            <div
               className="cursor-pointer flex items-center space-x-2 active:scale-95 p-1.5 rounded-full hover:bg-green-400 hover:text-white"
               onClick={downloadFile}
            >
               <HiOutlineDownload className="text-xl" />
            </div>
            <div
               className="cursor-pointer flex items-center space-x-2 active:scale-95 p-1.5 rounded-full hover:bg-red-400 hover:text-white"
               onClick={deleteFile}
            >
               <AiOutlineDelete className="text-xl" />
            </div>
         </div>
      </div>
   );
}

export default FileList;
