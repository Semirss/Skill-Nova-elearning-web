import { Outlet } from "react-router-dom"
import Topbar from "../components/TopBar"
import LeftSidebar from "../components/LeftSideBar"
import ToggleBar from "../components/ToggleBar"

const PagesLayout = () => {
    return (
        <div className="layout w-full relative">
            <LeftSidebar />
            <Topbar />
            <ToggleBar/>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default PagesLayout