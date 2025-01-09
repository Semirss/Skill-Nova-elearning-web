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
        <div className="admin absolute top-0">
            <div className="bg-primary h-14 w-screen text-secondary ps-12 pt-4">
                <h1 className="">Skill Nova</h1>
            </div>
            <div className="course ms-12 mt-12 flex flex-col gap-24">
                <div className="relative">
                    <h1>All Courses</h1>
                    <div className="relative all-courses pt-9">
                        <ul>
                            {data.map((item, index) => (
                                index < 3 && (
                                <li key={index} className="relative w-[80%] bg-white border-[1.9px] border-gray-300 rounded-lg">
                                    <section className="inline-flex flex-col gap-7 h-[100%] w-[100%]">
                                        <div className="max-w-[100%] relative mx-0 my-auto flex justify-center">
                                            <img src={item.image} alt="" className="w-[60%] h-[100%] max-w-[60%] max-h-[100%]"/>
                                        </div>
                                        <div className="flex flex-col gap-1 max-w-[100%] ms-9">
                                            <h1 className="font-bold">{item.title}</h1>
                                            <small>{item.duration}</small>
                                        </div>
                                        <div className="mb-10 flex gap-10 bg-primary text-white ms-9 me-9 rounded-xl">
                                            <a href="#" onClick={() => deleteCourse(item.courseID)} className="w-[100%] text-center h-8 pt-1">Delete Course</a>
                                        </div>
                                    </section>
                                </li>
                                )
                            ))}
                        </ul>
                        <p className="show-all pt-3 absolute right-24 cursor-pointer" onClick={showCourses}>Show all</p>
                    </div>
                    {show && (
                    <div className="courses-2 relative all-courses pt-16">
                        <ul>
                        {data.map((item, index) => (
                            index > 2 && (
                            <li key={index} className="relative w-[80%] bg-white border-[1.9px] border-gray-300 rounded-lg">
                                <section className="inline-flex flex-col gap-7 h-[100%] w-[100%]">
                                <div className="max-w-[100%] relative mx-0 my-auto flex justify-center">
                                    <img src={item.image} alt="" className="w-[60%] h-[100%] max-w-[60%] max-h-[100%]"/>
                                </div>
                                <div className="flex flex-col gap-1 max-w-[100%] ms-9">
                                    <h1 className="font-bold">{item.title}</h1>
                                    <small>{item.duration}</small>
                                </div>
                                <div className="mb-10 flex gap-10 bg-primary text-white ms-9 me-9 rounded-xl">
                                    <a href="#" onClick={() => deleteCourse(item.courseID)} className="w-[100%] text-center h-8 pt-1">Delete Course</a>
                                </div>
                                </section>
                            </li>
                            )
                        ))}
                        </ul>
                        <p className="absolute right-24 pt-3 cursor-pointer" onClick={hideCourses}>Show less</p>
                    </div>
                    )}
                </div>
                <div className='w-40 h-8 mb-14 pt-1 text-center text-white rounded-xl'>
                    <button onClick={courseVisibility}>Add Course</button>
                </div>
            </div>
            {isVisibleCourses && (
                <div className="flex flex-col gap-5 bg-primary text-white fixed left-12 right-12 md:left-[7rem] md:right-20 lg:left-[10rem] lg:right-36 xl:left-[15rem] 
                xl:right-64 top-32 justify-center items-center h-[30rem]">
                <h1>Add Courses</h1>
                <form onSubmit={AddCourse} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-0.5">
                        <label htmlFor="title" className="ps-2">Course Title</label>
                        <input type="text" name="title" id="title" className="text-black"
                        value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <label htmlFor="image" className="ps-2">Image Url</label>
                        <input type="text" name="image" id="image" className="text-black"
                        value={image} onChange={(e) => setImage(e.target.value)}/>
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <label htmlFor="description" className="ps-2">Course Description</label>
                        <input type="text" name="description" id="description" className="text-black"
                        value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <label htmlFor="duration" className="ps-2">Course Duration</label>
                        <input type="text" name="duration" id="duration" className="text-black"
                        value={duration} onChange={(e) => setDuration(e.target.value)}/>
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <label htmlFor="details" className="ps-2">Details Url</label>
                        <input type="text" name="details" id="details" className="text-black"
                        value={details} onChange={(e) => setDetails(e.target.value)}/>
                    </div>
                    <button type="submit" className="w-20 mt-2 ms-20 border-[1px]">Add</button>
                </form>
                </div>
            )}
        </div>
    );
};

export default Courses;
