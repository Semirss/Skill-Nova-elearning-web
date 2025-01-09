// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const Admin = () => {
  // const [isVisible, setIsVisible] = useState(0);
  // const [title, setTitle] = useState('');
  // const [image, setImage] = useState('');
  // const [description, setDescription] = useState('');
  // const [duration, setDuration] = useState('');
  // const [details, setDetails] = useState('');

  // const [courseID, setCourseID] = useState('');
  // const [roomTitle, setRoomTitle] = useState('');
  // const [roomDescription, setRoomDescription] = useState('');

  // const [isVisibleRooms, setIsVisibleRooms] = useState(false);
  // const [isVisibleCourses, setIsVisibleCourses] = useState(false);
  // const navigate = useNavigate();
  // const admin = (num) => {
  //   const auth = document.querySelector('.auth-form');

  //   setIsVisible(num);
  //   auth.style.display = "none";
  // }
  // const changeRooms = () => {
  //   setIsVisibleRooms(!isVisibleRooms);
  //   const admin = document.querySelector('.admin');
  //   admin.style.pointerEvents = "none";
  //   admin.style.filter = "blur(3px)";
  // }
  // const changeCourses = () => {
  //   setIsVisibleCourses(!isVisibleCourses);
  //   const admin = document.querySelector('.admin');
  //   admin.style.pointerEvents = "none";
  //   admin.style.filter = "blur(3px)";
  // }

  // const AddCourse = async (event) => {
  //   event.preventDefault();
  //   const API_URL = "http://localhost/Skill-nova-BackEnd/index.php";

  //   const requestData = {
  //       action: 'addCourse',
  //       title,
  //       image,
  //       description,
  //       duration,
  //       details
  //   };

  //   console.log('Sending request:', requestData);

  //   try {
  //       const response = await axios.post(`${API_URL}`, requestData);
  //       console.log('Raw response:', response);

  //       const data = response.data;
  //       console.log('Received response:', data);
  //       console.log('data.success:', data.success); 
  //       console.log('data.message:', data.message);

  //       if (data.success) {
  //           alert("Added successfully!");
  //           navigate('/admin-page/all-rooms');
  //       } else {
  //           alert(`failed: ${data.message}`);
  //       }
  //   } catch (error) {
  //       console.error('Error submitting form:', error);
  //       // setMessage("An error occurred. Please try again.");
  //       alert("An error occurred. Please try again.");
  //   }
  // }

  // const AddRoom = async (event) => {
  //   event.preventDefault();
  //   const API_URL = "http://localhost/Skill-nova-BackEnd/index.php";

  //   const requestData = {
  //       action: 'addRoom',
  //       courseID,
  //       roomTitle,
  //       roomDescription
  //   };

  //   console.log('Sending request:', requestData);

  //   try {
  //       const response = await axios.post(`${API_URL}`, requestData);
  //       console.log('Raw response:', response);

  //       const data = response.data;
  //       console.log('Received response:', data);
  //       console.log('data.success:', data.success); 
  //       console.log('data.message:', data.message);

  //       if (data.success) {
  //           alert("Added successfully!");
  //           navigate('/admin-page/all-rooms');
  //       } else {
  //           alert(`failed: ${data.message}`);
  //       }
  //   } catch (error) {
  //       console.error('Error submitting form:', error);
  //       // setMessage("An error occurred. Please try again.");
  //       alert("An error occurred. Please try again.");
  //   }
  // }

  return (
    <div className="relative">
      <div className="admin absolute top-0">
        <div className="bg-primary h-14 w-screen text-secondary ps-12 pt-4">
          <h1 className="">Skill Nova</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mt-20 ms-20 me-20">
          <a href="/admin/students" className="h-52 flex gap-0 items-center bg-blue-100">
            <h1 className="text-center mt-4">Students</h1>
            <img src="/assets/images/students.png" className="w-full h-full border-white border-2" alt="" />
          </a>
          <a href="/admin-page/courses" className="h-52 cursor-pointer flex gap-0 items-center bg-blue-100">
            <h1 className="ps-2">Courses</h1>
            <img src="/assets/images/add-courses.png" alt="" className="w-full h-full border-white border-2" />
          </a>
          <a href="admin-page/all-rooms" className="h-52 cursor-pointer flex gap-0 items-center bg-blue-100">
            <h1 className="ps-2">Rooms</h1>
            <img src="/assets/images/add-rooms.png" alt="" className="w-full h-full border-white border-2"/>
          </a>
          <a href="/admin/quizzes" className="h-52 cursor-pointer flex gap-0 items-center bg-blue-100">
            <h1 className="ps-2">Create Quizzes</h1>
            <img src="/assets/images/quizzes.png" alt="" className="w-full h-full border-white border-2"/>
          </a>
        </div>
      </div>

      {/* {isVisibleCourses && (
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
      )} */}

      {/* {isVisibleRooms && (
        <div className="flex flex-col gap-5 bg-primary text-white fixed left-12 right-12 md:left-[7rem] md:right-20 lg:left-[10rem] lg:right-36 xl:left-[15rem] 
        xl:right-64 top-32 justify-center items-center h-96">
          <h1>Add Rooms</h1>
          <form onSubmit={AddRoom} className="flex flex-col gap-4">
              <div className="flex flex-col gap-0.5">
                  <label htmlFor="id" className="ps-2">Course ID</label>
                  <input type="number" name="id" id="id" className="text-black"
                  value={courseID} onChange={(e) => setCourseID(e.target.value)}/>
              </div>
              <div className="flex flex-col gap-0.5">
                  <label htmlFor="title" className="ps-2">Course Title</label>
                  <input type="text" name="title" id="title" className="text-black"
                  value={roomTitle} onChange={(e) => setRoomTitle(e.target.value)}/>
              </div>
              <div className="flex flex-col gap-0.5">
                  <label htmlFor="description" className="ps-2">Description</label>
                  <input type="text" name="description" id="description" className="text-black"
                  value={roomDescription} onChange={(e) => setRoomDescription(e.target.value)}/>
              </div>
              <button type="submit" className="w-20 mt-2 ms-20 border-[1px]">Add</button>
          </form>
        </div>
      )} */}
    </div>
  )
}

export default Admin