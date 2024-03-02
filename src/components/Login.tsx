import React, { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useAppDispatch } from "../redux/store";
import { createSession } from "../redux/sessionReducer";

function Login() {
   const dispatch = useAppDispatch();

   const [loading, setLoading] = useState<boolean>(false);
   const [form, setForm] = useState({ email: "", password: "" });

   function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
      setForm({ ...form, [e.target.name]: e.target.value });
   }

   function login(e: React.MouseEvent<HTMLButtonElement>) {
      e.preventDefault();
      try {
         if (!form.email || !form.password) return;

         setLoading(true);
         setTimeout(() => {
            dispatch(
               createSession({
                  token: "siwou$nf-fh858*-5f6f!huih./djh_%*%ndh",
                  auth: {
                     email: form.email,
                     password: form.password,
                  },
               })
            );
         }, 2000);
      } catch (error) {
         console.log(error);
      }
   }
   return (
      <div className="flex items-center justify-center py-16 px-4">
         <div className="w-[400px] space-y-6">
            <div>
               <h1 className="text-2xl font-medium uppercase text-center">Log in to File Drive</h1>
            </div>

            <form action="" className="space-y-3">
               <div className="border rounded">
                  <input
                     type="text"
                     onChange={handleInput}
                     name="email"
                     value={form.email}
                     placeholder="Enter mail address"
                     className="w-full bg-transparent px-4 py-2"
                  />
               </div>
               <div className="border rounded">
                  <input
                     type="password"
                     onChange={handleInput}
                     name="password"
                     value={form.password}
                     placeholder="Enter password"
                     className="w-full bg-transparent px-4 py-2"
                  />
               </div>

               <button
                  className="w-full flex items-center justify-center py-2 uppercase bg-blue-500 text-white rounded active:scale-[0.98]"
                  onClick={login}
               >
                  {loading ? (
                     <RotatingLines
                        visible={true}
                        width="24"
                        strokeWidth="3"
                        strokeColor="#fff"
                        animationDuration="0.75"
                        ariaLabel="rotating-lines-loading"
                     />
                  ) : (
                     "log in"
                  )}
               </button>
            </form>
         </div>
      </div>
   );
}

export default Login;
