import { linkMenuData } from '@/constants'
import { NavLink } from './NavLink'

const MenuSide = ({ toggleOpen }: { toggleOpen?: () => void }) => {
    return (
        <div className='flex-1 flex flex-col mt-10 mb-10 lg:mb-6 lg:mt-[72px]'>
            <h1 className='uppercase text-[14px] text-[#636363] mb-2 lg:mb-5 pl-6'>Menu</h1>
            <NavLink linkData={linkMenuData} onLinkClick={toggleOpen} />
        </div>
    )
}

export default MenuSide