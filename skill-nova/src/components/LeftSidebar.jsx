const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
        <div className="ps-14 pt-8">SKILL NOVA</div>
        <nav className="navbar-top">
            <ul>
                <img src="assets/images/home.png" width={22} height={22} alt="Home Icon" />
                <a href="">
                    <li>Home</li>
                </a>
            </ul>
            <ul>
                <img src="assets/images/dashboard.png" alt="Dashboard Icon" />
                <a href="">
                    <li>Dashboard</li>   
                </a>
            </ul>
            <ul>
                <img src="assets/images/courses.png" alt="Courses Icon" />
                <a href="">
                    <li>All Course</li>   
                </a>
            </ul>
            <ul>
                <img src="assets/images/rooms.png" alt="Rooms Icon" />
                <a href="">
                    <li>Rooms</li>    
                </a>
            </ul>
        </nav>
        <hr className="mt-20"/>
        <nav className="navbar-bottom">
            <ul>
                <img src="assets/images/setting.png" alt="" />
                <a href="">
                    <li>Settings</li>
                </a>
            </ul>
            <ul>
                <img src="assets/images/logout.png" alt="" />
                <a href="">
                    <li>Logout</li>
                </a>
            </ul>
        </nav>
    </div>
  )
}

export default LeftSidebar