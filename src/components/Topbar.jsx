const Topbar = () => {
  const userName = localStorage.getItem('userName');
  const firstLetter = userName.charAt(0).toUpperCase();
  return (
    <div className="relative">
        <h1 className="absolute left-80 top-7 z-10">Hello User</h1>
        <div className="topbar">
          <form action="">
              <input className="w-80 rounded-xl p-2" type="text" placeholder="Search"/>
          </form>
          <div className="profile-pic">
              <p className="text-white ps-4 pt-1">{firstLetter}</p>
          </div>
        </div>
    </div>
  )
}

export default Topbar