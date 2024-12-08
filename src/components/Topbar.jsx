const Topbar = () => {
  return (
    <div className="relative">
        <h1 className="absolute left-80 top-7 z-10">Hello User</h1>
        <div className="topbar">
          <form action="">
              <input className="w-80 rounded-xl p-2" type="text" placeholder="Search"/>
          </form>
          <div className="profile-pic">
              <p className="text-white ps-4 pt-1">A</p>
          </div>
        </div>
    </div>
  )
}

export default Topbar