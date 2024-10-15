import React from 'react'
 import logo from "../assets/logo.svg"

 import {Link} from "react-router-dom" 
 
 import {toast} from "react-hot-toast"

 function Navbar(props){
  let isLoggedIn = props.isLoggedIn
  let setIsLoggedIn = props.setIsLoggedIn
  return (
    <div className="flex justify-between  items-center w-11/12 max-w-[1160px] py-4 mx-auto">

      <Link to="/">
   <img src={logo} alt="logo" width={160} height={32} loading="lazy"/>
      </Link>

    <nav > 
      <ul className=" text-slate-300 flex gap-x-6">
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/" >About</Link>
        </li>

        <li>
          <Link to="/" >Contant</Link>
        </li>

      </ul>
    </nav>

    {/* Here we create all the button  login, signup, logout, dashboard */}
    <div className="flex items-center gap-x-4">

      {
        // agar me login nahi hu toa login button show hoga 
        !isLoggedIn &&
        <Link to="/login">
          <button className="bg-slate-700 text-white py-[8px] px-[12px] rounded-[8px] border  border-slate-700">Login</button>
        </Link>
      }      
      { !isLoggedIn &&

        <Link to="/signup">
          <button className="bg-slate-700 text-white py-[8px] px-[12px] rounded-[8px] border  border-slate-700">signup</button>
        </Link>
      }

      {   isLoggedIn&&   
       <Link to="/">
          <button 
          className="bg-slate-700 text-white py-[8px] px-[12px] rounded-[8px] border  border-slate-700"
          onClick={()=>{
            setIsLoggedIn(false);
            toast.success("Logout Successfully")
          }}>Logout</button>
        </Link>
      }

{     isLoggedIn &&
        <Link to="/dashboard">
          <button    className="bg-slate-700 text-white py-[8px] px-[12px] rounded-[8px] border  border-slate-700">Dashboard</button>
        </Link>
      }


    </div>
    </div>
  )
 }

 export default Navbar; //default export