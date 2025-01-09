const Students = () => {
  return (
    <div className="relative">
        <div className="bg-primary h-14 w-screen text-secondary ps-12 pt-4 admin absolute top-0">
            <h1 className="">Skill Nova</h1>
        </div>
        <div className="absolute top-0 left-28 max-w-[30rem]">
            <table className="mt-28">
                <thead>
                    <th>Full Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Course</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Student</td>
                        <td>stud01</td>
                        <td>stud1@gmail.com</td>
                        <td>HTML</td>
                    </tr>
                    <tr>
                        <td>Student</td>
                        <td>stud02</td>
                        <td>stud2@gmail.com</td>
                        <td>CSS</td>
                    </tr>
                    <tr>
                        <td>Student</td>
                        <td>stud03</td>
                        <td>stud3@gmail.com</td>
                        <td>JS</td>
                    </tr>
                    <tr>
                        <td>Student</td>
                        <td>stud04</td>
                        <td>stud4@gmail.com</td>
                        <td>Python</td>
                    </tr>
                </tbody>
            </table>
        </div>
        {/* <table className="absolute top-28 left-10 max-w-[30rem]">
            <thead>
                <th>Full Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Course</th>
            </thead>
            <tbody>
                <tr>
                    <td>Student 1</td>
                    <td>stud01</td>
                    <td>stud1@gmail.com</td>
                    <td>HTML</td>
                </tr>
                <tr>
                    <td>Student 2</td>
                    <td>stud02</td>
                    <td>stud2@gmail.com</td>
                    <td>CSS</td>
                </tr>
                <tr>
                    <td>Student 3</td>
                    <td>stud03</td>
                    <td>stud3@gmail.com</td>
                    <td>JS</td>
                </tr>
                <tr>
                    <td>Student 4</td>
                    <td>stud04</td>
                    <td>stud4@gmail.com</td>
                    <td>Python</td>
                </tr>
            </tbody>
        </table> */}
    </div>
  )
}

export default Students