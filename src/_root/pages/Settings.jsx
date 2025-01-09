import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const Settings = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const userID = localStorage.getItem('userID');

    const changeProfile = () => {
        setIsVisible(!isVisible);
        const profile = document.querySelector('.profile');
        const deleteAcc = document.querySelector('.delete-account');
        profile.style.pointerEvents = "none";
        profile.style.filter = "blur(3px)"
        deleteAcc.style.pointerEvents = "none";
        deleteAcc.style.filter = "blur(3px)";
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const API_URL = "http://localhost/Skill-nova-BackEnd/index.php";
    
        const requestData = {
            action: 'changeProfile',
            fullName,
            userName,
            email,
            password,
            userID
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
                alert("Updated successfully!");
                navigate('/')
            } else {
                alert(`failed: ${data.message}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // setMessage("An error occurred. Please try again.");
            alert("An error occurred. Please try again.");
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:80/Skill-nova-BackEnd/index.php?userID=${userID}`);
                console.log('Full setting API response:', response);
                setData(response.data);

                const data = response.data;
                console.log('Received response:', data);
                console.log('data.success:', data.success); 
                console.log('data.message:', data.message);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (userID) {
            fetchData();
        }
    }, []);
    
    const deleteAccount = async () => {
        // const userID = localStorage.getItem('userID');
        try {
            const response = await axios.post('http://localhost:80/Skill-nova-BackEnd/index.php', {
                action: 'deleteProfile',
                userID,
            });
            console.log('Full API response:', response);
            // setData(response.data);
            console.log('Data fetched:', response.data);
            alert("Deleted successfully");

            navigate('/')
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

  return (
    <div className="settings">
        <h1 className="mt-10">Settings</h1>
        <div className="profile pt-10 ps-12">
            <h5 className="">Profile</h5>
            <div className="pt-5 ps-7 flex flex-col gap-5">
                <div className="border-s-4 border-[#000047]">
                    <p className="ps-2">{data.fullName}</p>
                    <small className="text-xs ps-2">Full name</small>
                </div>
                <div className="border-s-4 border-[#000047]">
                    <p className="ps-2">{data.userName}</p>
                    <small className="text-xs ps-2">User name</small>
                </div>
                <div className="border-s-4 border-[#000047]">
                    <p className="ps-2">{data.email}</p>
                    <small className="text-xs ps-2">Email</small>
                </div>
            </div>
            <button className="text-nowrap ms-12" onClick={changeProfile}>Change Profile</button>
        </div>
        <div>
            {isVisible && (
                <div className="form-container flex flex-col gap-5 bg-primary text-white fixed left-12 right-12 md:left-[22rem] md:right-20 lg:left-[25rem] lg:right-36 xl:left-[30rem] 
                xl:right-64 top-32 justify-center items-center h-96">
                    <h1>Change Profile</h1>
                    <form onSubmit={handleSubmit} action="" className="flex flex-col gap-4">
                        <div className="flex flex-col gap-0.5">
                            <label htmlFor="fName" className="ps-2">Full Name</label>
                            <input type="text" name="fullName" id="fName" className="text-black"
                            value={fullName} onChange={(e) => setFullName(e.target.value)}/>
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <label htmlFor="uName" className="ps-2">User Name</label>
                            <input type="text" name="userName" id="uName" className="text-black"
                            value={userName} onChange={(e) => setUserName(e.target.value)}/>
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <label htmlFor="email" className="ps-2">Email</label>
                            <input type="email" name="email" id="email" className="text-black"
                            value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <label htmlFor="password" className="ps-2">Password</label>
                            <input type="password" name="password" id="password" className="text-black"
                            value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <button type="submit" className="w-20 mt-2 ms-14 border-[1px]">Save</button>
                    </form>
                </div>
            )}
        </div>
        <div className="delete-account pt-28 ps-12 h-96">
            <h5>Delete Account</h5>
            <div className="ps-7 pt-5">
                <p className="w-3/4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
                    ullam velit eos saepe ut molestiae alias reprehenderit
                    ipsam repudiandae omnis, atque molestias voluptate quae, officiis,
                </p>
                <button onClick={deleteAccount} className="ms-0 mb-24">
                    <a href="/">Delete Account</a>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Settings