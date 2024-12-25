const AdminLogIn = () => {
  return (
    <div className="relative">
      <div className="auth-form bg-white border-[.2px] border-primary fixed left-12 right-12 xl:left-[24rem] 
      xl:right-96 top-32 justify-center items-center h-[25rem] rounded-lg">
        <form action="" className="flex flex-col gap-5 items-center text-blue-950">
          <h1>Log In</h1>
          <div className="flex flex-col items-center gap-2">
            <label htmlFor="uName" className="-ms-28">User Name</label>
            <input type="text"id="uName" name="userName" className="w-[200px] text-black"/>
          </div>
          <div className="flex flex-col items-center gap-2">
            <label htmlFor="password" className="-ms-32">Password</label>
            <input type="text"id="password" name="password" className="w-[200px] text-black"/>
          </div>
          <button className="border-[1px] w-[80px]">
            <a href="/admin-page">Login</a>
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminLogIn