import React from 'react'
import Template from '../components/Template'
import signup from '../assets/signup.png'
function Signup({setIsLoggedIn}) {
  return (
    <div>
    <Template
    title="Join the millions  learning  to code with studynotion  for free"
    desc1="Build Skills  for today , tomorrow and beyong"
    desc2="Education to future-proof you career"
    image={signup}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}
    ></Template>
 </div>
  )
}

export default Signup
