import { useState } from "react";

const Admin = () => {
  const [isVisibleRooms, setIsVisibleRooms] = useState(false);
  const [isVisibleCourses, setIsVisibleCourses] = useState(false);
  const changeRooms = () => {
    setIsVisibleRooms(!isVisibleRooms);
    const admin = document.querySelector('.admin');
    admin.style.pointerEvents = "none";
    admin.style.filter = "blur(3px)";
  }
  const changeCourses = () => {
    setIsVisibleCourses(!isVisibleCourses);
    const admin = document.querySelector('.admin');
    admin.style.pointerEvents = "none";
    admin.style.filter = "blur(3px)";
  }
  return (
    <div className="relative">
      <div className="auth-form hidden">
        <form action="">
            <h1>Log In</h1>
            <div className="input-field">
                <label>User Name: 
                    <input
                        type="text"
                        id="uName"
                        name="userName"
                    />
                </label>
                <br />
                <label>Password: 
                    <input
                        type="text"
                        id="password"
                        name="password"
                    />
                </label>
            </div>
            <button>Login</button>
        </form>
      </div>
      <div className="admin absolute top-0">
        <div className="bg-primary h-14 w-screen text-secondary ps-12 pt-4">
          <h1 className="">Skill Nova</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mt-20 ms-20 me-20">
          <a href="/admin/students" className="h-52 flex gap-0 items-center bg-blue-100">
            <h1 className="text-center mt-4">Students</h1>
            <img src="/assets/images/students.png" className="w-full h-full border-white border-2" alt="" />
          </a>
          <div className="h-52 cursor-pointer flex gap-0 items-center bg-blue-100" onClick={changeCourses}>
            <h1 className="ps-2">Add Courses</h1>
            <img src="/assets/images/add-courses.png" alt="" className="w-full h-full border-white border-2" />
          </div>
          <div className="h-52 cursor-pointer flex gap-0 items-center bg-blue-100" onClick={changeRooms}>
            <h1 className="ps-2">Add Rooms</h1>
            <img src="/assets/images/add-rooms.png" alt="" className="w-full h-full border-white border-2"/>
          </div>
          <a href="/admin/quizzes" className="h-52 cursor-pointer flex gap-0 items-center bg-blue-100">
            <h1 className="ps-2">Create Quizzes</h1>
            <img src="/assets/images/quizzes.png" alt="" className="w-full h-full border-white border-2"/>
          </a>
        </div>
      </div>

      {isVisibleCourses && (
        <div className="flex flex-col gap-5 bg-primary text-white fixed left-12 right-12 md:left-[7rem] md:right-20 lg:left-[10rem] lg:right-36 xl:left-[15rem] 
        xl:right-64 top-32 justify-center items-center h-96">
          <h1>Add Courses</h1>
          <form action="" className="flex flex-col gap-4">
              <div className="flex flex-col gap-0.5">
                  <label htmlFor="title" className="ps-2">Course Title</label>
                  <input type="text" name="title" id="title" className="text-black"/>
              </div>
              <div className="flex flex-col gap-0.5">
                  <label htmlFor="description" className="ps-2">Course Description</label>
                  <input type="text" name="description" id="description" className="text-black" />
              </div>
              <div className="flex flex-col gap-0.5">
                  <label htmlFor="duration" className="ps-2">Course Duration</label>
                  <input type="text" name="duration" id="duration" className="text-black"/>
              </div>
              <button type="submit" className="w-20 mt-2 ms-20 border-[1px]">Add</button>
          </form>
        </div>
      )}

      {isVisibleRooms && (
        <div className="flex flex-col gap-5 bg-primary text-white fixed left-12 right-12 md:left-[7rem] md:right-20 lg:left-[10rem] lg:right-36 xl:left-[15rem] 
        xl:right-64 top-32 justify-center items-center h-96">
          <h1>Add Rooms</h1>
          <form action="" className="flex flex-col gap-4">
              <div className="flex flex-col gap-0.5">
                  <label htmlFor="title" className="ps-2">Course Title</label>
                  <input type="text" name="title" id="title" className="text-black"/>
              </div>
              <div className="flex flex-col gap-0.5">
                  <label htmlFor="description" className="ps-2">Description</label>
                  <input type="text" name="description" id="description" className="text-black"/>
              </div>
              {/* <div className="flex flex-col gap-0.5">
                  <label htmlFor="questions" className="ps-2">Questions</label>
                  <input type="text" name="questions" id="questions" />
              </div> */}
              {/* <div className="flex flex-col gap-0.5">
                  <label htmlFor="answers" className="ps-2">Answers</label>
                  <input type="text" name="answers" id="answers" />
              </div> */}
              <button type="submit" className="w-20 mt-2 ms-20 border-[1px]">Add</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Admin