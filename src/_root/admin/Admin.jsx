const Admin = () => {
  const links = [
    { href: "/admin/students", title: "Students", imgSrc: "/assets/images/students.png", imgAlt: "Students" },
    { href: "/admin-page/courses", title: "Courses", imgSrc: "/assets/images/add-courses.png", imgAlt: "Courses" },
    { href: "admin-page/all-rooms", title: "Rooms", imgSrc: "/assets/images/add-rooms.png", imgAlt: "Rooms" },
    { href: "/admin/quizzes", title: "Create Quizzes", imgSrc: "/assets/images/quizzes.png", imgAlt: "Create Quizzes" }
  ];

  return (
    <div className="relative min-h-screen bg-gray-100">
      <header className="bg-primary h-14 w-full text-secondary px-12 py-4 shadow-md">
        <h1 className="text-2xl font-bold">Skill Nova</h1>
      </header>
      <main className="container mx-auto mt-20 px-4 md:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {links.map((link, index) => (
            <a key={index} href={link.href}
              className="h-52 w-52 flex flex-col items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
              <h1 className="text-lg font-semibold mb-2 text-gray-800">{link.title}</h1>
              <img src={link.imgSrc} alt={link.imgAlt}
                className="w-24 h-24 border-white border-2 rounded-full"/>
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Admin