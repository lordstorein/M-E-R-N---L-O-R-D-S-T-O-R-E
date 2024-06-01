import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useEffect } from "react";
import {toast} from "react-toastify"

export const Signup = ()=>{

  const [user, setUser] = useState({
    username:"",
    email:"",
    password:""
  });
  
  const {checkToken} = useAuth()
  const {storeTokenInLS} = useAuth()
  const navigate = useNavigate()

  useEffect(()=>{
    const path = checkToken()
    if(path){
      navigate(path)
    }
  }, [checkToken, navigate])


  const handleInput = (e)=>{
    let name = e.target.name
    let value = e.target.value

    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();  // This should be inside the function body
    console.log(user);

    try {   
      const response = await fetch('https://mern-api-livid.vercel.app/api/auth/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const res_data = await response.json()
        storeTokenInLS(res_data.token)
        setUser({
          username: "",
          email: "",
          password: ""
        });
        toast.success("Registration successful")
        navigate("/aftereffect");
      }else{
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
      }

    } catch (error) {
      console.log("register failed", error);
    }
};


    return <>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 font-inter">
  <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
    <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Signup To Your Account</div>
    
    <div className="mt-10">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-6">
          <label htmlFor="username" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Username:</label>
          <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            </div>

            <input id="username" type="text" name="username" value={user.username} onChange={handleInput} className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Username" required />
          </div>
        </div>

        <div className="flex flex-col mb-6">
          <label htmlFor="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label>
          <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            </div>

            <input id="email" type="email" name="email" value={user.email} onChange={handleInput} className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="E-Mail Address" required />
          </div>
        </div>

        <div className="flex flex-col mb-6">
          <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
          <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            </div>
 
            <input id="password" type="password" name="password" value={user.password} onChange={handleInput} className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Password" required />
          </div>
        </div>

        <div className="flex items-center mb-6 -mt-4">
          <div className="flex ml-auto">
            
          </div>
        </div>

        <div className="flex w-full">
        
         <button type="submit" className="flex items-center justify-center outline-none text-white text-sm bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in ">
        
           Signup 
             
          </button>
          
        </div>
      </form>
    </div>
    <div className="flex justify-center items-center mt-6">
        <span className="ml-2">Already have an account? <Link to='/login'> <u className='text-blue-500 '> Login </u></Link></span>
    </div>
  </div>
</div>
    </>
}