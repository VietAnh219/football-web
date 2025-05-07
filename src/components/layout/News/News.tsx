import { useState } from "react";
import { tabsNew } from "@/constants"
import { AnimatePresence, motion } from "framer-motion";
import Newpaper from "@/components/ui/Newpaper";
import { useNews } from "@/components/hooks/useNews";
import { SkeletonCard } from "@/components/ui/AllSkeleton";

const News = () => {
    const [selected, setSelected] = useState(tabsNew[0]);

    const getNew = (selected: string) => {
        switch (selected) {
            case "All News":
                return "all news";
            case "Hot News":
                return "hot"
            case "Transfer":
                return "transfer"
            default:
                return "all news";
        }
    }

    const endpoint = getNew(selected);
    const { data: data, isLoading } = useNews(endpoint);

    return (
        <div className="pb-4">
            <div className="flex items-center gap-1 mb-8">
                📰
                <h1 className="text-xl font-semibold dark:text-white">All News and Transfer Today</h1>
            </div>
            <div className="w-full">
                <div className="flex border-b border-gray-200">
                    {tabsNew.map((tab) => (
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

                <div className="p-4">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selected}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            {isLoading ? <SkeletonCard /> : <Newpaper newspaper={data ?? []} />}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default News