import { linkMenuData } from '@/constants'
import { NavLink } from './NavLink'

const MenuSide = () => {
    return (
        <div className='flex-1 flex flex-col mt-[72px]'>
            <h1 className='uppercase text-[14px] text-[#636363] mb-10 pl-6'>Menu</h1>
            <NavLink linkData={linkMenuData} />
        </div>
    )
}

export default MenuSide