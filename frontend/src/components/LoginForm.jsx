import React from 'react'
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai"
import {useState} from "react"
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import {toast} from "react-hot-toast"
import axios from 'axios'

function LoginForm({setIsLoggedIn}) {
const navigate=useNavigate()
    const [formData,setFormData]=useState({
        email:"",
        password:""
    })
    
    const[showPassword,setShowPassword]=useState(false)

    function changeHandler(event){
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

  async function submitHandler(event){
        
       event.preventDefault();

        const logindata = {
            ...formData
        }

        try {
            const res = await axios.post('http://localhost:3000/api/v1/users/login', logindata);
    
            const token = res.data.token;
            localStorage.setItem('token', token);
    
            if(res.status === 201 || res.status == 200){
                setIsLoggedIn(true)
                toast.success('Login successfull')
                navigate("/dashboard")
            }
        } catch (error) {
            console.error('Login error:', error);
            toast.error('Login failed. Please check your credentials and try again.')
            
        }
        
         
    }
  return (
    <div>
        <form  onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
            {/* email address  */}
            <label className="w-full">
     <p className="text-[0.875rem] text-slate-300 mb-1  leading-[1.35rem]">Email Address <sup className="text-pink-200">*</sup> </p>
                <input 
                type="email"
                value={formData.email}
                onChange={changeHandler}
                placeholder="Enter Email Address"
                name="email"
                className="bg-slate-700 rounded-[0.5rem] text-slate-300 w-full p-[12px]">
                </input>
            </label>

            {/* password  */}


            <label  className="w-full relative" >
     <p className="text-[0.875rem] text-slate-300 mb-1  leading-[1.35rem]"> Password <sup className="text-pink-200">*</sup> </p>
                <input 
                type={showPassword?"text":"password"}
                value={formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="password"
                 className=" bg-slate-700 rounded-[0.5rem]  text-slate-300 w-full p-[12px]"
                >
                </input>
                <span 
                className="absolute right-3 top-[38px]  cursor-pointer"
                onClick={()=>setShowPassword((prev)=>!prev)}>
                    {showPassword ?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)  }
                </span>
            <Link to="#">
            <p className="text-xs mt-1 text-blue-400 max-w-max ml-auto">Forgot Password 
                </p></Link>
            </label>


  
            <button className="bg-yellow-500 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">Login</button>



        </form>
    </div>
  )
}

export default LoginForm
