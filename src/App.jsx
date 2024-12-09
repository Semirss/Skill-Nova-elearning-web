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
import Room1 from './_root/pages/subpages/Room1'
import Settings from './_root/pages/Settings'
import Admin from './_root/admin/Admin'
import Students from './_root/admin/Students'
import Quizzes from './_root/admin/quizzes'
import Questions from './_root/admin/Questions'
import Room2 from './_root/pages/subpages/Room2'
import Room3 from './_root/pages/subpages/Room3'
// import Room1 from './_root/pages/Room1'
// import Room2 from './_root/pages/subpages/Room2'
// import RoomsLayout from './_root/RoomsLayout'

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
          <Route path='/settings' element={<Settings />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/rooms/room1' element={<Room1 />}/>
          <Route path='/rooms/room2' element={<Room2 />}/>
          <Route path='/rooms/room3' element={<Room3 />}/>
          <Route path='/all courses' element={<AllCourses />}/>
        </Route>
        <Route path='/admin' element={<Admin />}/>
        <Route path='/admin/students' element={<Students />}/>
        <Route path='/admin/quizzes' element={<Quizzes />}/>
        <Route path='/admin/quizzes/html/questions' element={<Questions />}/>
      </Routes>
    </main>
  )
}

export default App
