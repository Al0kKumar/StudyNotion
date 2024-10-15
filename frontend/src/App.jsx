 
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {Routes , Route} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import {useState} from 'react'
import PrivateRoute from './components/PrivateRoute'

function App() {
 
  const [isLoggedIn , setIsLoggedIn] = useState(false)

  // console.log(isLoggedIn)


  return (
     <div className="h-screen w-screen bg-slate-900 flex flex-col">
       
   <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>

    <Routes>
      <Route path="/" element={<Home isLoggedIn={isLoggedIn } ></Home>}> </Route>
      <Route path="/login" element={<Login  setIsLoggedIn={setIsLoggedIn} ></Login>}> </Route>
      <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}></Signup>}> </Route>
      {/* Here we create a protected routes  */}
      <Route path="/Dashboard" element={
        
        <PrivateRoute  isLoggedIn={isLoggedIn} > <Dashboard></Dashboard></PrivateRoute>}> </Route>
    </Routes>





     </div>
  )
}

export default App
