import { darkMode } from "@/constants"
import InputSearch from "@/components/ui/InputSearch"
import UseAvatar from "@/components/ui/UseAvatar"

const Navbar = () => {
    return (
        <div className={`flex justify-between items-center bg-[#F6F6F4] px-6 py-4 ${darkMode}`}>
            <div className="ml-9">
                <InputSearch />
            </div>
            <div className="flex items-center">
                <UseAvatar />
            </div>
        </div>
    )
}

export default Navbar