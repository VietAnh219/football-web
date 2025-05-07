import { motion, AnimatePresence } from "framer-motion"
import { useRef } from "react"
import { Link } from "react-router-dom"
import MenuSide from "./MenuSide"
import LeagueSide from "./LeagueSide"
import logoImage from '../../../assets/iconLogo.svg'
import { useAuthStore } from "@/store/useAuthStore"
import { useDimensions } from "@/components/hooks/useDimensions"
import { contentVariants, sidebarVariants } from "@/constants"
import UpgradePremium from "../UpgradePremium"

interface SidebarMotionProps {
    isOpen: boolean
    toggleOpen: () => void
}

const SidebarMotion = ({ isOpen, toggleOpen }: SidebarMotionProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { user } = useAuthStore();
    const { height } = useDimensions(containerRef)

    return (
        <>
            <button
                onClick={toggleOpen}
                className="fixed top-4 left-4 z-50 w-10 h-10 rounded-full bg-[#45144a] text-white flex items-center justify-center"
            >
                {isOpen ? "×" : "≡"}
            </button>

            <AnimatePresence initial={false} mode="wait">

                {isOpen && (
                    <motion.nav
                        ref={containerRef}
                        initial={false}
                        animate="open"
                        exit="closed"
                        custom={height}
                        className="fixed top-0 left-0 z-40 w-[300px] h-screen overflow-hidden"
                    >
                        <motion.div
                            className="absolute top-0 left-0 w-full h-full bg-[#f5f5f5] dark:bg-[#1B1C21] p-6 space-y-6 z-10 overflow-y-scroll hide-scrollbar"
                            variants={sidebarVariants}
                        >
                            <motion.div variants={contentVariants} animate={isOpen ? "open" : "closed"}>
                                <Link to="/" className="flex justify-center gap-2 items-center cursor-pointer ml-5">
                                    <span><img src={logoImage} alt="logo" /></span>
                                    <h1 className="text-[18px] font-bold dark:text-white">
                                        Onesport
                                        <span className='pl-2 align-super text-xs font-medium text-gray-500 dark:text-[#F5C451]'>
                                            {user?.role === "premium" && "premium"}
                                        </span>
                                    </h1>
                                </Link>

                                <MenuSide toggleOpen={toggleOpen} />

                                {user?.role === "premium" && <LeagueSide toggleIsOpen={toggleOpen} />}
                                <div className="text-center sm:hidden">
                                    <UpgradePremium />
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    )
}

export default SidebarMotion