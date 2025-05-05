import { linkLeagueData } from "@/constants"
import { NavLink } from "./NavLink"
import { ChevronUp } from "lucide-react"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LeagueSide = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleOpen = () => setIsOpen((prev) => !prev);

    return (
        <div className="flex-1 flex flex-col">
            <div
                className="flex items-center justify-between px-6 cursor-pointer"
                onClick={toggleOpen}
            >
                <h1 className="uppercase text-[14px] text-[#636363]">Football League</h1>
                <motion.div
                    animate={{ rotate: isOpen ? -180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronUp className="text-[#636363]" size={20} />
                </motion.div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-4"
                    >
                        <NavLink linkData={linkLeagueData} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default LeagueSide