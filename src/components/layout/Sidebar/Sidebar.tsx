import { darkMode } from '@/constants'
import logoImage from '../../../assets/iconLogo.svg'
import MenuSide from './MenuSide';
import LeagueSide from './LeagueSide';
import { Link } from 'react-router-dom';
import { useAuthStore } from '@/store/useAuthStore';

const Sidebar = () => {
    const { user } = useAuthStore();

    return (
        <div className={`w-full h-full flex flex-col p-6 bg-[#F6F6F4] ${darkMode} `} >
            <Link to="/" className='flex gap-2 items-center cursor-pointer'>
                <span>
                    <img src={logoImage} alt="logo" />
                </span>
                <h1 className='text-[18px] font-bold'>Onesport</h1>
            </Link>
            <MenuSide />
            {user?.role === "premium" && <LeagueSide />}

        </div>
    )
}

export default Sidebar