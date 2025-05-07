import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar/Sidebar"
import { darkMode } from "@/constants"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import { useState } from "react"
import SidebarMotion from "./Sidebar/SidebarMotion"

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="w-full h-screen flex flex-col md:flex-row">
            <div className="hidden xl:block w-[400px] h-screen bg-[#F6F6F4] sticky top-0 ">
                <Sidebar />
            </div>
            <div className="xl:hidden">
                <SidebarMotion isOpen={isOpen} toggleOpen={() => setIsOpen(!isOpen)} />
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-hidden dark:bg-[#17181C] transition-colors duration-300">
                <Navbar />
                <div className={`md:p-6 ${darkMode}`}>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div >
    )
}

export default Layout