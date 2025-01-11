const Students = () => {
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
                        <th className="border-b-2 p-2">Course</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border-b p-2">Student</td>
                        <td className="border-b p-2">stud01</td>
                        <td className="border-b p-2">stud1@gmail.com</td>
                        <td className="border-b p-2">HTML</td>
                    </tr>
                    <tr>
                        <td className="border-b p-2">Student</td>
                        <td className="border-b p-2">stud02</td>
                        <td className="border-b p-2">stud2@gmail.com</td>
                        <td className="border-b p-2">CSS</td>
                    </tr>
                    <tr>
                        <td className="border-b p-2">Student</td>
                        <td className="border-b p-2">stud03</td>
                        <td className="border-b p-2">stud3@gmail.com</td>
                        <td className="border-b p-2">JS</td>
                    </tr>
                    <tr>
                        <td className="border-b p-2">Student</td>
                        <td className="border-b p-2">stud04</td>
                        <td className="border-b p-2">stud4@gmail.com</td>
                        <td className="border-b p-2">Python</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
)
}

export default Students