// import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import AuthLayout from './_auth/authLayout'
import SignInForm from './_auth/form/signInForm'
import SignUpForm from './_auth/form/signUpForm'
import PagesLayout from './_root/PagesLayout'
import Dashboard from './_root/pages/Dashboard'
import Home from './_root/pages/Home'
import AllCourses from './_root/pages/AllCourses'
import Rooms from './_root/pages/Rooms'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={<SignInForm />}/>
          <Route path='/sign-Up' element={<SignUpForm />}/>
        </Route>

        <Route path='/' element={<Home />}/>
        
        <Route element={<PagesLayout />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/all courses' element={<AllCourses />} />
          <Route path='/rooms' element={<Rooms />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
