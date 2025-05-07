import { useAuthStore } from '@/store/useAuthStore';
import { MenuItem } from '@/types/sidebar';
import clsx from 'clsx';
import { motion } from "framer-motion";
import { Link, useLocation } from 'react-router-dom';

export const NavLink = ({ linkData, onLinkClick }: { linkData: MenuItem[], onLinkClick?: () => void }) => {
    const { user } = useAuthStore();
    const location = useLocation();
    const path = location.pathname.split("/")[1];

    const linkDataRole = linkData.filter((link) => !["LiveFootBall", "Highlights"].includes(link.label))

    const data = user?.role === "premium" ? linkData : linkDataRole

    return (
        <>
            <div className="flex flex-col gap-2">
                {data.map((link) => {
                    const isActive = path === link.link;

                    return (
                        <Link
                            key={link.link}
                            to={link.link}
                            className="relative"
                            onClick={onLinkClick}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 rounded-full bg-purple-100 z-0"
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                />
                            )}

                            <div
                                className={clsx(
                                    "relative z-10 flex items-center gap-3 px-6 py-3 rounded-full transition-colors",
                                    isActive ? "text-purple-700 dark:text-[#F5C451] font-semibold" : "text-[#464646] dark:hover:text-[#F5C451] hover:text-purple-600"
                                )}
                            >
                                {link.icon}
                                <span className='text-[14px]'>{link.label}</span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>
    );


}

// export default NavLink