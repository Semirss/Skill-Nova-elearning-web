import axios from "axios";
import { useEffect, useState } from "react"

const AllCourses = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get('http://localhost:80/Skill-nova-BackEnd/index.php?action=fetchData');
              setData(response.data);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };
  
      fetchData();
    }, []);
  


  const showCourses = () => {
    const showAll = document.querySelector('.show-all');

    setShow(!show)
    showAll.style.display = "none";
  }
  const hideCourses = () => {
    const showAll = document.querySelector('.show-all');
    setShow(!show);

    showAll.style.display = "block";
  }
  return (
    <div className="courses gap-12 mt-12">
      <div className="relative">
        <h1>All Courses</h1>
        <div className="relative all-courses pt-9">
          <ul>
            {data.map((item, index) => (
              index < 3 && (
                <li key={index} className="relative w-[80%] bg-white border-[1.9px] border-gray-300 rounded-lg mb-4">
                  <section className="inline-flex flex-col gap-7 h-[100%] w-[100%] p-4">
                    <div className="max-w-[100%] relative mx-0 my-auto flex justify-center">
                      <img src={item.image} alt="" className="w-[60%] h-[100%] max-w-[60%] max-h-[100%] object-cover"/>
                    </div>
                    <div className="flex flex-col gap-1 max-w-[100%] ms-9">
                      <h1 className="font-bold text-lg">{item.title}</h1>
                      <small className="text-gray-500">{item.duration}</small>
                    </div>
                    <div className="mb-10 flex bg-primary text-white ms-9 me-9 rounded-xl">
                      <a href={`${item.details}?courseID=${item.courseID}`} className="w-[100%] text-center h-8 pt-1">View Details</a>
                    </div>
                  </section>
                </li>
              )
            ))}
          </ul>
          <p className="show-all pt-3 absolute right-24 cursor-pointer text-blue-500" onClick={showCourses}>Show all</p>
        </div>
        {show && (
          <div className="courses-2 relative all-courses pt-16">
            <ul>
              {data.map((item, index) => (
                index >= 3 && (
                  <li key={index} className="relative w-[80%] bg-white border-[1.9px] border-gray-300 rounded-lg mb-4">
                    <section className="inline-flex flex-col gap-7 h-[100%] w-[100%] p-4">
                      <div className="max-w-[100%] relative mx-0 my-auto flex justify-center">
                        <img src={item.image} alt="" className="w-[60%] h-[100%] max-w-[60%] max-h-[100%] object-cover"/>
                      </div>
                      <div className="flex flex-col gap-1 max-w-[100%] ms-9">
                        <h1 className="font-bold text-lg">{item.title}</h1>
                        <small className="text-gray-500">{item.duration}</small>
                      </div>
                      <div className="mb-10 flex bg-primary text-white ms-9 me-9 rounded-xl">
                        <a href={`${item.details}?courseID=${item.courseID}`} className="w-[100%] text-center h-8 pt-1">View Details</a>
                      </div>
                    </section>
                  </li>
                )
              ))}
            </ul>
            <p className="absolute right-24 pt-3 cursor-pointer text-blue-500" onClick={hideCourses}>Show less</p>
          </div>
        )}
      </div>
      <div className="featured relative mt-12">
        <p className="text-xl font-semibold">Featured</p>
        <div className="relative">
          <ul className="mb-14 flex flex-col gap-5">
            {data.map((item, index) => (
              <li key={index} className="relative w-[60%] max-h-[100%] bg-white border-[1.9px] border-gray-300 rounded-lg mt-5 p-4">
                <section className="inline-flex w-[100%] gap-2 ms-3">
                  <div className="max-w-[100%] relative mx-0 my-auto">
                    <img src={item.image} alt="html" className="w-[100%] h-12 max-h-[10%] object-cover"/>
                  </div>
                  <div className="flex flex-col">
                    <a href="/all courses/course-details-1" className="font-bold text-lg">{item.title}</a>
                    <p className="text-gray-500">{item.description}</p>
                  </div>
                </section>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AllCourses