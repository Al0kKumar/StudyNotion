import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/login.png'
function Login({setIsLoggedIn}) {
  return (
     <div>
        <Template
        title="Welcome Back"
        desc1="Build Skills  for today , tomorrow and beyong"
        desc2="Education to future-proof you career"
        image={loginImg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
        
        
        
        ></Template>
     </div>
  )
}

export default Login
