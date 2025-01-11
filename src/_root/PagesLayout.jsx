import { Outlet } from "react-router-dom"
import LeftSidebar from "../components/LeftSideBar"
import ToggleBar from "../components/ToggleBar"
import Topbar from "../components/Topbar"

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