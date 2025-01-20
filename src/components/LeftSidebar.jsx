const LeftSidebar = () => {
    const handleLogout = () => {
        localStorage.removeItem("userName");
        localStorage.removeItem("userID");
    }
  return (
    <div className="left-sidebar">
        <div className="ps-14 pt-8">SKILL NOVA</div>
        <nav className="navbar-top">
            <ul className="ls">
                <img src="/assets/images/home.png" width={22} height={22} alt="Home Icon" />
                <a href="/">
                    <li>Home</li>
                </a>
            </ul>
            <ul className="ls">
                <img src="/assets/images/dashboard.png" alt="Dashboard Icon" />
                <a href="dashboard">
                    <li>Dashboard</li>   
                </a>
            </ul>
            <ul className="ls">
                <img src="/assets/images/courses.png" alt="Courses Icon" />
                <a href="/all courses">
                    <li>All Courses</li>   
                </a>
            </ul>
            <ul className="ls">
                <img src="/assets/images/rooms.png" alt="Rooms Icon" />
                <a href="/rooms">
                    <li>Rooms</li>    
                </a>
            </ul>
        </nav>
        <hr className="mt-20"/>
        <nav className="navbar-bottom">
        <ul className="ls">
        <img src="/assets/images/setting.png" alt="" />
                <a href="/settings">
                    <li>Settings</li>
                </a>
            </ul>
            <ul className="ls" onClick={handleLogout}>
                <img src="/assets/images/logout.png" alt="" />
                <a href="/sign-in">
                    <li>Logout</li>
                </a>
            </ul>
        </nav>
    </div>
  )
}

export default LeftSidebar