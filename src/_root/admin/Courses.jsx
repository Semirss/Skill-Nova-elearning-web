import axios from 'axios';
import { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";

const Courses = () => {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [isVisibleCourses, setIsVisibleCourses] = useState(false);
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [details, setDetails] = useState('');
    // const navigate = useNavigate();
    // const userID = localStorage.getItem('userID');

    const courseVisibility = () => {
        setIsVisibleCourses(!isVisibleCourses);
        const courses = document.querySelector('.course');
        courses.style.pointerEvents = "none";
        courses.style.filter = "blur(3px)";
    }

    // const updateCourse = async (courseID, courseData) => {
    //     try {
    //         const response = await axios.post('http://localhost:80/Skill-nova-BackEnd/index.php', {
    //             updateCourseID: courseID,
    //             courseData
    //         });
    //         console.log('Update Course Response:', response.data);
    //     } catch (error) {
    //         console.error('Error updating course:', error);
    //     }
    // };

    const deleteCourse = async (courseID) => {
        try {
            const response = await axios.post('http://localhost:80/Skill-nova-BackEnd/index.php', {
                action: 'deleteCourse',
                courseID
            });
            console.log('Delete Course Response:', response.data);
            setData(data.filter(item => item.courseID !== courseID));
        } catch (error) {
            console.error('Error deleting course:', error);
        }
    };

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:80/Skill-nova-BackEnd/index.php?action=fetchData');
                console.log('Full API response:', response);
                setData(response.data);
                // console.log('Data fetched:', response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, []);

    const AddCourse = async (event) => {
        const courses = document.querySelector('.course');
        event.preventDefault();
        const API_URL = "http://localhost/Skill-nova-BackEnd/index.php";
    
        const requestData = {
            action: 'addCourse',
            title,
            image,
            description,
            duration,
            details
        };
    
        console.log('Sending request:', requestData);
    
        try {
            const response = await axios.post(`${API_URL}`, requestData);
            console.log('Raw response:', response);
    
            const data = response.data;
            console.log('Received response:', data);
            console.log('data.success:', data.success); 
            console.log('data.message:', data.message);
    
            if (data.success) {
                alert("Added successfully!");
                // navigate('/admin-page/courses');
                courseVisibility();
                courses.style.filter = "none";
                window.location.reload();
            } else {
                alert(`failed: ${data.message}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // setMessage("An error occurred. Please try again.");
            alert("An error occurred. Please try again.");
        }
    }
    return (
        <div className="admin absolute top-0 w-full min-h-screen bg-gray-100">
          <header className="bg-primary h-14 w-full text-secondary flex items-center px-12">
            <h1 className="text-2xl font-bold">Skill Nova</h1>
          </header>
          <main className="course ms-24 me-10 mt-12 flex flex-col gap-12">
            <section className="relative">
              <h1 className="text-xl font-semibold mb-4">All Courses</h1>
              <div className="relative all-courses pt-9">
                <ul>
                  {data.map((item, index) => (
                    index < 3 && (
                      <li key={index} className="relative w-[80%] bg-white border border-gray-300 rounded-lg shadow-md p-6">
                        <section className="flex flex-col gap-4">
                          <div className="flex justify-center">
                            <img src={item.image} alt="" className="w-3/5 h-auto object-cover rounded-md"/>
                          </div>
                          <div className="flex flex-col gap-1">
                            <h1 className="font-bold text-lg">{item.title}</h1>
                            <small className="text-gray-500">{item.duration}</small>
                          </div>
                          <div className="flex justify-center">
                            <button onClick={() => deleteCourse(item.courseID)} className="bg-red-500 text-white py-2 px-4 rounded-lg">Delete Course</button>
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
                      index > 2 && (
                        <li key={index} className="relative w-[80%] bg-white border border-gray-300 rounded-lg shadow-md p-6">
                          <section className="flex flex-col gap-4">
                            <div className="flex justify-center">
                              <img src={item.image} alt="" className="w-3/5 h-auto object-cover rounded-md"/>
                            </div>
                            <div className="flex flex-col gap-1">
                              <h1 className="font-bold text-lg">{item.title}</h1>
                              <small className="text-gray-500">{item.duration}</small>
                            </div>
                            <div className="flex justify-center">
                              <button onClick={() => deleteCourse(item.courseID)} className="bg-red-500 text-white py-2 px-4 rounded-lg">Delete Course</button>
                            </div>
                          </section>
                        </li>
                      )
                    ))}
                  </ul>
                  <p className="absolute right-24 pt-3 cursor-pointer text-blue-500" onClick={hideCourses}>Show less</p>
                </div>
              )}
            </section>
            <div className="w-40 h-10 mb-14 pt-1 text-center text-white rounded-xl bg-blue-600 shadow-md">
              <button onClick={courseVisibility}>Add Course</button>
            </div>
          </main>
          {isVisibleCourses && (
            <div className="flex flex-col gap-5 bg-primary text-white fixed left-12 right-12 md:left-[7rem] md:right-20 lg:left-[10rem]
            lg:right-36 xl:left-[15rem] xl:right-64 top-16 justify-center items-center h-[36rem] p-6 rounded-lg shadow-lg">
              <h1 className="text-3xl font-bold mb-4">Add Courses</h1>
              <form onSubmit={AddCourse} className="flex flex-col gap-4 w-full max-w-md">
                <div className="flex flex-col gap-1">
                  <label htmlFor="title" className="ps-2">Course Title</label>
                  <input type="text" name="title" id="title" className="text-black p-2 rounded-md"
                  value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="image" className="ps-2">Image Url</label>
                  <input type="text" name="image" id="image" className="text-black p-2 rounded-md"
                  value={image} onChange={(e) => setImage(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="description" className="ps-2">Course Description</label>
                  <input type="text" name="description" id="description" className="text-black p-2 rounded-md"
                  value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="duration" className="ps-2">Course Duration</label>
                  <input type="text" name="duration" id="duration" className="text-black p-2 rounded-md"
                  value={duration} onChange={(e) => setDuration(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="details" className="ps-2">Details Url</label>
                  <input type="text" name="details" id="details" className="text-black p-2 rounded-md"
                  value={details} onChange={(e) => setDetails(e.target.value)}/>
                </div>
                <button type="submit" className="w-20 mt-2 ms-48 border-[1px] bg-blue-500 text-white py-2 px-4 rounded-lg">Add</button>
              </form>
            </div>
          )}
        </div>
    )
};

export default Courses;
