import { tabsClub } from "@/constants";
import BannerClub from "./BannerClub"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Overview from "./Overview";
import Squad from "./Squad";

const ClubDetail = () => {
    const [selected, setSelected] = useState(tabsClub[0]);

    const content = (selected: string) => {
        switch (selected) {
            case "Overview":
                return <Overview />
            case "Squad":
                return <Squad />
            default:
                <Overview />
        }
    }

    return (
        <div className="w-full h-full rounded-2xl overflow-hidden">
            <BannerClub />
            <div className="bg-white dark:bg-[#1B1C21] rounded-2xl px-2 sm:pl-6 py-8">
                <div className="w-full">
                    <div className="flex">
                        {tabsClub.map((tab) => (
                            <div
                                key={tab}
                                onClick={() => setSelected(tab)}
                                className={`relative px-4 py-2 cursor-pointer text-sm font-medium ${selected === tab ? "text-black dark:text-[white]" : "text-gray-600"} hover:text-black transition-all dark:hover:text-[white]`}
                            >
                                {tab}
                                {selected === tab && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5742A9] dark:bg-[#F5C451]"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="py-4 sm:p-4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selected}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                {content(selected)}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClubDetail