import React from 'react'
import frameImage from '../assets/frame.png'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import {FcGoogle} from 'react-icons/fc'
function Template({title,desc1,desc2,image,formtype,setIsLoggedIn}) {
  return (
    <div className="flex justify-between  w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 ">

      <div className="w-11/12  max-w-[450px">
        <h1 className="text-slate-200 font-semibold  text-[1.875rem] leading-[2.25rem]">{title}</h1>


        <p className="text-[1.125rem] leading-[1.75rem] mt-4 ">
             <span className="text-slate-300">{desc1}</span>
             <br></br>
             <span className="text-blue-500 italic">{desc2}</span>
        
         </p>


        {/* login and signup form */}

        {formtype ==="signup"?(<SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>):(<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>) 
        }


        <div className="flex w-full items-center my-4 gap-x-2">
            <div className='h-[1px] w-full bg-slate-300'></div>
            <p className="text-slate-300 font-medium leading-[1.357rem]">OR</p>
            <div  className='h-[1px] w-full bg-slate-300'></div>
        </div>

            <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-slate-300 border border-slate-300 px-[12px] py-[8px]  gap-x-2 mt-6">
                <FcGoogle></FcGoogle>
                <p>Signup with google </p>
            </button>
 
      </div>

      {/* second div for image portion  */}
      <div className='relative w-11/12 max-w-[450px]'>

        <img src={frameImage} alt="pattern" width={558} height={504} loading="lazy"></img>
        <img src={image} alt="pattern"  width={558} height={504} loading="lazy"
        className="absolute  -top-4 right-4"></img>

      </div>


    </div>
  )
}

export default Template
