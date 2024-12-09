import { useState } from "react"

const Settings = () => {
    const [isVisible, setIsVisible] = useState(false);
    const changeProfile = () => {
        setIsVisible(!isVisible)
        const profile = document.querySelector('.profile')
        const deleteAcc = document.querySelector('.delete-account')
        profile.style.pointerEvents = "none";
        profile.style.filter = "blur(3px)"
        deleteAcc.style.pointerEvents = "none";
        deleteAcc.style.filter = "blur(3px)";
    }
  return (
    <div className="settings">
        <h1 className="mt-10">Settings</h1>
        <div className="profile pt-10 ps-12">
            <h5 className="">Profile</h5>
            <div className="pt-5 ps-7 flex flex-col gap-5">
                <div className="border-s-4 border-[#000047]">
                    <p className="ps-2">John</p>
                    <small className="text-xs ps-2">Full name</small>
                </div>
                <div className="border-s-4 border-[#000047]">
                    <p className="ps-2">Jo123</p>
                    <small className="text-xs ps-2">User name</small>
                </div>
                <div className="border-s-4 border-[#000047]">
                    <p className="ps-2">jo@gmail.com</p>
                    <small className="text-xs ps-2">Email</small>
                </div>
            </div>
            <button className="text-nowrap ms-12" onClick={changeProfile}>Change Profile</button>
        </div>
        <div>
            {isVisible && (
                <div className="flex flex-col gap-5 bg-stone-600 fixed left-12 right-12 md:left-[22rem] md:right-20 lg:left-[25rem] lg:right-36 xl:left-[30rem] 
                xl:right-64 top-32 justify-center items-center h-96">
                    <h1>Change Profile</h1>
                    <form action="" className="flex flex-col gap-4">
                        <div className="flex flex-col gap-0.5">
                            <label htmlFor="fName" className="ps-2">Full Name</label>
                            <input type="text" name="fullName" id="fName"/>
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <label htmlFor="uName" className="ps-2">User Name</label>
                            <input type="text" name="userName" id="uName" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <label htmlFor="email" className="ps-2">Email</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <button type="submit" className="w-20 mt-2 ms-14">Save</button>
                    </form>
                </div>
            )}
        </div>
        <div className="delete-account pt-28 ps-12 h-96">
            <h5>Delete Account</h5>
            <div className="ps-7 pt-5">
                <p className="w-3/4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
                    ullam velit eos saepe ut molestiae alias reprehenderit
                    ipsam repudiandae omnis, atque molestias voluptate quae, officiis,
                </p>
                <button className="ms-0 mb-24">
                    <a href="/">Delete Account</a>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Settings