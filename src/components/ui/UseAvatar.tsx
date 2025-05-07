import DarkMode from "./DarkMode"
import { useAuthStore } from "@/store/useAuthStore"
import { useNavigate } from "react-router-dom"
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io"
import { IoLogOutOutline } from "react-icons/io5";
import { Fragment } from "react/jsx-runtime"
import toast from "react-hot-toast"
import UpgradePremium from "../layout/UpgradePremium"
import { avartarDefault } from "@/constants";


const UseAvatar = () => {
    const { signOut, user } = useAuthStore();
    const navigate = useNavigate();

    console.log(user);

    const handleLogout = async () => {
        try {
            await signOut();
            navigate("/login");
            toast.success('Logout successful');
        } catch (error) {
            console.error("Logout failed", error);
        }
    }
    return (
        <div className="flex items-center gap-3 md:gap-6">
            <div className="hidden sm:block">
                <UpgradePremium />
            </div>
            <div className="flex items-center gap-4">
                <DarkMode />
            </div>
            <div className="hidden sm:flex sm:items-center sm:gap-4 ">
                <h1 className="font-bold text-[#37003c] dark:text-white">Hi {user?.displayName}</h1>
            </div>
            <Menu as='div' className="relative inline-block text-left">
                <div>
                    <MenuButton className='flex items-center gap-x-2 cursor-pointer'>
                        <div className="h-[36px] w-[36px] rounded-full overflow-hidden">
                            <img
                                src={user?.photoURL ?? avartarDefault}
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <IoIosArrowDown style={{ color: "rgba(70, 70, 70, 1)" }} />
                    </MenuButton>
                </div>
                <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                >
                    <MenuItems className='absolute right-0 mt-2 w-56 origin-top-right z-10 divide-gray-100 rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none'>
                        <div className='!px-[8px] !py-[8px]'>
                            <MenuItem>
                                {() => (
                                    <button
                                        onClick={handleLogout}
                                        className={`text-red-600 cursor-pointer group flex w-full items-center rounded-md gap-2 text-base`}
                                    >
                                        <IoLogOutOutline className='mr-2' aria-hidden='true' />
                                        Logout
                                    </button>
                                )}
                            </MenuItem>
                        </div>
                    </MenuItems>
                </Transition>
            </Menu>
        </div>
    )
}

export default UseAvatar