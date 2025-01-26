import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import AuthLayout from './_auth/authLayout'
import SignInForm from './_auth/form/SignInForm'
import PagesLayout from './_root/PagesLayout'
import Dashboard from './_root/pages/Dashboard'
import Home from './_root/pages/Home'
import AllCourses from './_root/pages/AllCourses'
import Rooms from './_root/pages/Rooms'
import Settings from './_root/pages/Settings'
import Admin from './_root/admin/Admin'
import Students from './_root/admin/Students'
import Questions from './_root/admin/Questions'
import Details1 from './_root/pages/subpages/Courses/course details/details1'
import Details2 from './_root/pages/subpages/Courses/course details/Details2'
import Details3 from './_root/pages/subpages/Courses/course details/Details3'
import Course1 from './_root/pages/subpages/courses/Course1'
import Course2 from './_root/pages/subpages/Courses/course2'
import AdminLogIn from './_root/admin/AdminLogIn'
import SignUpForm from './_auth/form/SignUpForm'
import AllRooms from './_root/admin/AllRooms'
import Answer from './_root/admin/Answer'
import Room from './_root/pages/subpages/Room'
import AdminRoom from './_root/admin/AdminRoom'
import Course3 from './_root/pages/subpages/Courses/Course3'
import Courses from './_root/admin/Courses'

function App() {

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
          <Route path='/rooms/room' element={<Room />}/>
          <Route path='/all courses' element={<AllCourses />}/>
          <Route path='/all courses/course-details-1' element={<Details1 />}/>
          <Route path='/all courses/course-details-2' element={<Details2 />}/>
          <Route path='/all courses/course-details-3' element={<Details3 />}/>
          <Route path='/all courses/course-1' element={<Course1 />}></Route>
          <Route path='/all courses/course-2' element={<Course2 />}></Route>
          <Route path='/all courses/course-3' element={<Course3 />}></Route>
        </Route>
        <Route path='/admin' element={<Navigate to='/admin/login' />} />
        <Route path='/admin/login' element={<AdminLogIn />}/>
        <Route path='/admin-page' element={<Admin />}/>
        <Route path='/admin-page/all-rooms' element={<AllRooms />}/>
        <Route path='/admin-page/courses' element={<Courses />}/>
        <Route path='admin-page/all-rooms/room' element={<AdminRoom />}></Route>
        <Route path='/admin-page/all-rooms/room/answer' element={<Answer />}/>
        <Route path='/admin/students' element={<Students />}/>
        <Route path='/admin/quizzes/html/questions' element={<Questions />}/>
      </Routes>
    </main>
  )
}

export default App
