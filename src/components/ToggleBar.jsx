const ToggleBar = () => {
    function toggleMenu() {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
  return (
    <div className="toggle-bar">
        <div className="toggle-menu flex relative pt-20 bg-primary text-white">
            <div className="absolute top-7 left-10">SKILL NOVA</div>
            <div htmlFor="toggle" onClick={toggleMenu} className="toggle-icon">
                <div className="bg-white w-6 h-0.5"></div>
                <div className="bg-white w-6 h-0.5"></div>
                <div className="bg-white w-6 h-0.5"></div>
            </div>
        </div>
        <nav className="nav-menu">
            <nav className="navbar-top">
                <ul>
                    <img src="/assets/images/home.png" width={22} height={22} alt="Home Icon" />
                    <a href="">
                        <li>Home</li>
                    </a>
                </ul>
                <ul>
                    <img src="/assets/images/dashboard.png" alt="Dashboard Icon" />
                    <a href="">
                        <li>Dashboard</li>   
                    </a>
                </ul>
                <ul>
                    <img src="/assets/images/courses.png" alt="Courses Icon" />
                    <a href="">
                        <li>All Courses</li>   
                    </a>
                </ul>
                <ul>
                    <img src="/assets/images/rooms.png" alt="Rooms Icon" />
                    <a href="">
                        <li>Rooms</li>    
                    </a>
                </ul>
            </nav>
            <hr className="mt-20"/>
            <nav className="navbar-bottom">
                <ul>
                    <img src="/assets/images/setting.png" alt="" />
                    <a href="">
                        <li>Settings</li>
                    </a>
                </ul>
                <ul>
                    <img src="/assets/images/logout.png" alt="" />
                    <a href="">
                        <li>Logout</li>
                    </a>
                </ul>
            </nav>
        </nav>
    </div>
  )
}

export default ToggleBar