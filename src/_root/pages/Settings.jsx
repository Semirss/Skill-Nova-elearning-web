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
        const settingsH1 = document.querySelector('.settings-h1');

        profile.style.pointerEvents = "none";
        profile.style.filter = "blur(3px)"
        deleteAcc.style.pointerEvents = "none";
        deleteAcc.style.filter = "blur(3px)";
        settingsH1.style.filter = "blur(3px)";
        settingsH1.style.pointerEvents = "none";
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
            const data = response.data;
    
            if (data.success) {
                alert("Updated successfully!");
                navigate('/')
            } else {
                alert(`failed: ${data.message}`);
            }
        } catch {
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
        try {
            const response = await axios.post('http://localhost:80/Skill-nova-BackEnd/index.php', {
                action: 'deleteProfile',
                userID,
            });
            console.log('Full API response:', response);
            alert("Deleted successfully");

            navigate('/')
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="settings p-10 bg-gray-100 min-h-screen">
            <h1 className="settings-h1 text-3xl font-bold mb-8 text-center">Settings</h1>
            <div className="profile p-6 bg-white shadow-md rounded-lg mb-8">
                <h5 className="text-xl font-semibold mb-4">Profile</h5>
                <div className="flex flex-col gap-4">
                    <div className="border-l-4 border-blue-500 p-4 bg-gray-50 rounded-md">
                        <p className="text-lg font-medium">{data.fullName}</p>
                        <small className="text-gray-500">Full name</small>
                    </div>
                    <div className="border-l-4 border-blue-500 p-4 bg-gray-50 rounded-md">
                        <p className="text-lg font-medium">{data.userName}</p>
                        <small className="text-gray-500">User name</small>
                    </div>
                    <div className="border-l-4 border-blue-500 p-4 bg-gray-50 rounded-md">
                        <p className="text-lg font-medium">{data.email}</p>
                        <small className="text-gray-500">Email</small>
                    </div>
                </div>
                <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300" onClick={changeProfile}>Change Profile</button>
            </div>
            <div>
                {isVisible && (
                    <div className="z-20 form-container flex flex-col gap-5 bg-white text-black fixed top-32 p-8 shadow-lg rounded-lg w-11/12 md:w-1/2 lg:w-1/3
                    mx-auto left-12 right-12 md:left-[22rem] md:right-20 lg:left-[20rem] lg:right-36 xl:left-[30rem] xl:right-64">
                        <h1 className="text-2xl font-bold mb-4">Change Profile</h1>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="fName" className="font-medium">Full Name</label>
                                <input type="text" name="fullName" id="fName" className="p-2 border rounded-md"
                                value={fullName} onChange={(e) => setFullName(e.target.value)}/>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="uName" className="font-medium">User Name</label>
                                <input type="text" name="userName" id="uName" className="p-2 border rounded-md"
                                value={userName} onChange={(e) => setUserName(e.target.value)}/>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="email" className="font-medium">Email</label>
                                <input type="email" name="email" id="email" className="p-2 border rounded-md"
                                value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="password" className="font-medium">Password</label>
                                <input type="password" name="password" id="password" className="p-2 border rounded-md"
                                value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <button type="submit" className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">Save</button>
                        </form>
                    </div>
                )}
            </div>
            <div className="delete-account p-6 bg-white shadow-md rounded-lg">
                <h5 className="text-xl font-semibold mb-4">Delete Account</h5>
                <div className="mb-6">
                    <p className="text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
                        ullam velit eos saepe ut molestiae alias reprehenderit
                        ipsam repudiandae omnis, atque molestias voluptate quae, officiis,
                    </p>
                    <button onClick={deleteAccount} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300">
                        Delete Account
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Settings