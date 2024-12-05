import { Outlet } from "react-router-dom"
import Topbar from "../components/TopBar"
import LeftSidebar from "../components/LeftSideBar"
import ToggleBar from "../components/ToggleBar"

const PagesLayout = () => {
    return (
        // <div className="pages-layout">
        //     <LeftSidebar />
        //     <section className="flex absolute top-0 left-[270px] right-0">
        //         <Outlet />
        //     </section>
        // </div>
        <div className="w-full relative">
            <LeftSidebar />
            <Topbar />
            <ToggleBar/>
            <Outlet />
        </div>
    )
}

export default PagesLayout