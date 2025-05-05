import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar/Sidebar"
import { darkMode } from "@/constants"
import Navbar from "./Navbar/Navbar"

const Layout = () => {

    return (
        <div className="w-full h-screen flex flex-col md:flex-row">
            <div className="w-[400px] h-screen bg-[#F6F6F4] sticky top-0 block overflow-scroll">
                <Sidebar />
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-hidden">
                <Navbar />
                <div className={`p-6 ${darkMode}`}>
                    <Outlet />
                </div>
                <div className="px-6 flex justify-between py-5 text-[#636363] text-[14px]">
                    <div className="flex gap-8">
                        <p>Terms Of Service</p>
                        <p>Report Abuse</p>
                        <p>Privacy & Data Policy</p>
                    </div>
                    <div>2025 All Rights Reserved © Onesport</div>
                </div>
            </div>
        </div >
    )
}

export default Layout