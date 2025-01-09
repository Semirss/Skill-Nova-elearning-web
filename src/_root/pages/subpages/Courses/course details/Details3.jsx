import { useState } from "react";

const Details3 = () => {
    const [isShowed, setIsShowed] = useState(false)
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
  
    return (
      <div className="course-1 mt-12">
        <h1 className="font-bold text-lg">JS Course</h1>
        <div className="relative mt-12 flex flex-col gap-16 lg:gap-32 lg:flex-row me-10">
          <div className="relative flex flex-col gap-5">
            <h1 className="font-bold">About</h1>
            <ul className="flex flex-col gap-5 ms-5">
              <li>Explore the basics of JS with this course</li>
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
              <button>Enroll Now</button>
            </div>
          </div>
          <div className="relative flex flex-col">
            <h1 className="font-bold">Overview</h1>
            <div className="bg-white border-[1.9px] border-gray-300 rounded-lg flex mt-5 w-[100%]">
              <div className="flex flex-col gap-1 ms-0 me-28">
                <section className="flex flex-col gap-2 mt-5 ms-7 mb-7" id="week1">
                  <h1 className="font-bold">Week 1</h1>
                  <ul className="ms-5 flex flex-col gap-3">
                    <li>
                      <a href="">Introduction</a>
                    </li>
                    <li><a href="">lorem</a></li>
                    <li><a href="">lorem</a></li>
                    <li><a href="">lorem</a></li>
                  </ul>
                </section>
                {isShowed && (
                  <section className="flex flex-col gap-2 ms-7 mb-7" id="week2">
                    <h1 className="font-bold">Week 2</h1>
                    <ul className="ms-5 flex flex-col gap-3">
                      <li><a href="">lorem</a></li>
                      <li><a href="">lorem</a></li>
                      <li><a href="">lorem</a></li>
                      <li><a href="">lorem</a></li>
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
      </div>
    )
}

export default Details3