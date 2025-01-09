import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Details1 = () => {
  const [isShowed, setIsShowed] = useState(false)
  const [message, setMessage] = useState('');
  const userID = localStorage.getItem('userID');

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const courseID = queryParams.get('courseID');

  const showCourses = () => {
    const hide = document.querySelector('.hide');
    const show = document.querySelector('.show');

    setIsShowed(!isShowed);
    hide.style.display = "flex";
    show.style.display = "none";
  }
  const hideCourses = () => {
    const hide = document.querySelector('.hide');
    const show = document.querySelector('.show');

    setIsShowed(!isShowed);
    hide.style.display = "none";
    show.style.display = "block";
  }

  const [isVisible, setIsVisible] = useState(false);

  // const courses = () => {
  //   setIsVisible(!isShowed);
  // }
  // setIsVisible(!isShowed);

  const enrollStudent = async (event) => {
    setIsVisible(!isVisible);

    event.preventDefault();
    const API_URL = "http://localhost/Skill-nova-BackEnd/index.php";

    try {
      const response = await axios.post(`${API_URL}`, {
        action: 'enrollStudent',
        userID: userID,
        // studentID: studentID,
        courseID: courseID
      });
      console.log('Raw response:', response);

      const data = response.data;
      console.log('Received Student response:', data);
      console.log('data.success:', data.success);
      console.log('data.message:', data.message);
      console.log(data.studentID);

      if (data.success) {
        setMessage(data.message);
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage("An error occurred. Please try again.");
    }
  }
  

  return (
    <div className="course-1 mt-12">
      <h1 className="font-bold text-lg">HTML Course</h1>
      {!isVisible && (
        <div className="relative mt-12 flex flex-col gap-16 lg:gap-32 lg:flex-row me-10">
          <div className="relative flex flex-col gap-5">
            <h1 className="font-bold">About</h1>
            <ul className="flex flex-col gap-5 ms-5">
              <li>Explore the basics of HTML with this course</li>
              <li>Who is it For<br />
                <p className="ms-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi</p>
                <p className="ms-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi</p>
              </li>
              <li>What You will Achieve<br />
                <p className="ms-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi</p>
                <p className="ms-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi</p>
              </li>
            </ul>
            <hr className="border-[.5px] border-gray-300"/>
            <div className="flex flex-col gap-3">
              <h1 className="font-bold">Instructors</h1>
              <p className="ms-5">Admin</p>
            </div>
            <div>
              <button onClick={enrollStudent}>Enroll</button>
            </div>
          </div>
          <div className="relative flex flex-col">
            <h1 className="font-bold">Overview</h1>
            <div className="bg-white border-[1.9px] border-gray-300 rounded-lg flex mt-5 w-[100%]">
              <div className="flex flex-col gap-1 ms-0 me-28">
                <section className="flex flex-col gap-2 mt-5 ms-7 mb-7" id="week1">
                  <h1 className="font-bold">Week 1</h1>
                  <ul className="ms-5 flex flex-col gap-3">
                    <li>Introduction</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                  </ul>
                </section>
                {isShowed && (
                  <section className="flex flex-col gap-2 ms-7 mb-7" id="week2">
                    <h1 className="font-bold">Week 2</h1>
                    <ul className="ms-5 flex flex-col gap-3">
                      <li>lorem</li>
                      <li>lorem</li>
                      <li>lorem</li>
                      <li>lorem</li>
                    </ul>
                  </section>
                )}
              </div>
              <div className="relative mt-3 me-7">
                <p className="show cursor-pointer rotate-90 text-xl" onClick={showCourses}>&lt;</p>
                <p className="hide hidden cursor-pointer rotate-90 text-xl" onClick={hideCourses}>&gt;</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {isVisible && (
        <div className="auth-form bg-primary fixed left-12 right-12 md:left-[22rem] md:right-20 lg:left-[25rem] lg:right-36 xl:left-[30rem] 
        xl:right-64 top-52 h-96">
          <div className="pt-16">
            <h1 className="font-bold text-xl">{message}</h1>
            <button>
              <a href="/all courses/course-3">Go to course</a>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Details1