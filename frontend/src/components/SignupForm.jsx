import React from 'react'
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai"
 import {toast} from "react-hot-toast"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function SignupForm({setIsLoggedIn}) {
const navigate=useNavigate()
    const [formData,setFormData] =  useState({
          firstname:"",
          lastname:"",
          email:"",
          password:"",
          confirmPassword:"",
    })

    const [showPassword,setShowPassword] = useState(false)
    const [confirmshowPasswords,confirmsetShowPasswords] = useState(false)

    const [accountType,setAccountType]=useState("student")



    function changeHandler(event){
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault()
       if(formData.password !== formData.confirmPassword){
        toast.error("Password doesn't match")
    }
    else{
        setIsLoggedIn(true)
        toast.success("Account created successfully")
        const accountData={
            ...formData
        }


        
    const finalData={
        ...accountData,
        accountType
    }
    console.log("printing finalData")
    console.log(finalData)
    navigate("/dashboard")
}


    }
   


  return (
    
    <div>
        {/* student instructor button  */}
      <div className="flex bg-slate-700 p-1 gap-z-1 my-6 rounded-full max-w-max">
        <button onClick={()=>setAccountType("student")}
          className={`${accountType==="student" ?"bg-slate-800 text-slate-200"
            :"bg-transparent text-slate-300"
          } py-2 px-5 rounded-full transition-all duration-200` }  >Student</button>
      
        <button onClick={()=>setAccountType("instructor") }
         className={`${accountType==="instructor" ?"bg-slate-800 text-slate-200"
            :"bg-transparent text-slate-300"
          } py-2 px-5 rounded-full transition-all duration-200` }
            >Instructor</button>
    
      </div>

    {/* form start Here  */}

    <form onSubmit={submitHandler}>

    {/* first name and lastname  */}
        <div className="flex justify-between mt-[10px] ">


        <label>
            <p className="text-[0.875rem] text-slate-300 mb-1  leading-[1.35rem]">First Name <sup className="text-pink-400">*</sup></p>
            <input required
            type="text"
            name="firstname"
            onChange={changeHandler}
            placeholder="Enter your first name"
            value={formData.firstname}
            className="bg-slate-700 rounded-[0.5rem] text-slate-300 w-full   p-[12px]"></input>
        </label>


   <label >
            <p className="text-[0.875rem] text-slate-300 mb-1  leading-[1.35rem]">Last Name <sup className="text-pink-400">*</sup></p>
            <input required
            type="text"
            name="lastname"
            onChange={changeHandler}
            placeholder="Enter your last name"
            value={formData.lastname}
            className="bg-slate-700 rounded-[0.5rem] text-slate-300 w-full p-[12px]"></input>
        </label>
        </div>

        {/* email address */}

    <label className=" ">
                <p className="text-[0.875rem] text-slate-300 mb-1  leading-[1.35rem]">Email Address <sup className="text-pink-400">*</sup></p>
                <input required
                type="email"
                name="email"
                onChange={changeHandler}
                placeholder="Enter your email Address"
                value={formData.email}
                className="bg-slate-700 rounded-[0.5rem] text-slate-300 w-full p-[12px]"></input>
     </label>


{/* createPassword and confirm password  */}
    <div className="w-full flex justify-between  mt-[10px]">
        
   <label className="relative  ">
            <p className="text-[0.875rem] text-slate-300 mb-1  leading-[1.35rem]">Create Password<sup className="text-pink-400">*</sup></p>
            <input required
            type={showPassword?("text"):("Password")}
            name="password"
            onChange={changeHandler}
            placeholder="Create Password"
            value={formData.password}
            className="bg-slate-700 rounded-[0.5rem] text-slate-300 w-full p-[12px]"></input>
        <span
         className="absolute right-3 top-[38px]  cursor-pointer"
         onClick={()=>setShowPassword((prev)=>!prev)}>
            {!showPassword?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}

        </span>

        </label>
           {/* confirm password  */}

           <label className="relative">
            <p className="text-[0.875rem] text-slate-300 mb-1  leading-[1.35rem]">Confirm Password<sup className="text-pink-400">*</sup></p>
            <input required
            type={confirmshowPasswords?("text"):("Password")}
            name="confirmPassword"
            onChange={changeHandler}
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            className="bg-slate-700 rounded-[0.5rem] text-slate-300 w-full p-[12px]"></input>
        <span 
         className="absolute right-3 top-[40px]  cursor-pointer"
        onClick={()=>confirmsetShowPasswords((prev)=>!prev)}>
            {!confirmshowPasswords?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"></AiOutlineEyeInvisible >):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
        </span>
        </label>
    </div>
    <button className="bg-yellow-500 w-full rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">Create Account</button>
    </form>
    
    </div>
  )
}


export default SignupForm
