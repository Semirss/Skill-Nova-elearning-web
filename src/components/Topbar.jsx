const Topbar = () => {
  const userName = localStorage.getItem('userName');
  const firstLetter = userName.charAt(0).toUpperCase();
  return (
    <div className="relative">
        
        <div className="topbar">
         <h3 style={{color:"#fff"}} className=" left-60 top-7 z-10">Welcome {userName}</h3>
          <div className="profile-pic">
              <p style={{textAlign:"center"}} className="text-white  pt-2">{firstLetter}</p>
          </div>
        </div>
    </div>
  )
}

export default Topbar