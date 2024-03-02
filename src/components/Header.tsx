import { Link } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { endSession, hasSession } from "../redux/sessionReducer";

function Header() {
   const sessionMail = useAppSelector(hasSession).auth.email;
   const dispatch = useAppDispatch();

   async function signOut() {
      dispatch(endSession());
   }

   return (
      <header className="h-[70px] flex items-center justify-between px-10 py-2 z-50 bg-white border-b">
         <div>
            <Link to="/">
               <h1 className="text-3xl font-bold cursor-pointer text-blue-500 ">File Drive</h1>
            </Link>
         </div>
         <div className="flex items-center space-x-6">
            <button className="flex items-center justify-center space-x-2 cursor-pointer border px-1 py-1 rounded-3xl hover:bg-gray-50 active:scale-[0.99] shadow-sm">
               <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
                  alt=""
                  className="w-7 h-7 p-0.5 rounded-full object-cover"
               />
               <span className="text-sm font-medium !mr-2 hidden sm:flex">{sessionMail}</span>
            </button>

            <button
               className="p-2 rounded-full cursor-pointer flex items-center justify-center active:scale-[0.98] shadow border"
               onClick={signOut}
            >
               <TbLogout className="text-xl" />
            </button>
         </div>
      </header>
   );
}

export default Header;
