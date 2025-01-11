import axios from "axios";
import { useEffect, useState } from "react";

const Students = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:80/Skill-nova-BackEnd/index.php?action=getStudents');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
      }, []);

return (
    <div className="relative">
        <div className="bg-primary h-14 w-full text-secondary ps-12 pt-4 admin fixed top-0">
            <h1 className="">Skill Nova</h1>
        </div>
        <div className="mt-32 mx-auto max-w-4xl p-4">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr>
                        <th className="border-b-2 p-2">Full Name</th>
                        <th className="border-b-2 p-2">User Name</th>
                        <th className="border-b-2 p-2">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className="border-b p-2">{item.fullName}</td>
                            <td className="border-b p-2">{item.userName}</td>
                            <td className="border-b p-2">{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
)
}

export default Students