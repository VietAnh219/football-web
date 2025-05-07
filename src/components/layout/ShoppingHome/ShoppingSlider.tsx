import { motion } from "framer-motion";
import {
    Tooltip,
    TooltipProvider,
    TooltipTrigger,
    TooltipContent,
} from "@/components/ui/tooltip";

const ShoppingSlider = ({ club }: { club: { id: number, shortName: string; crest: string; shirt: string }; }) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div
                        className={`w-full h-[350px] flex flex-col items-start justify-center gap-4 dark:border-[#F5C451] rounded-2xl overflow-hidden shrink-0 border-2 cursor-pointer`}
                    >
                        <div className="w-full h-full flex justify-center bg-[#F6F6F6] dark:bg-[#1B1C21] ">
                            <motion.img
                                src={club.shirt}
                                alt={club.shortName}
                                className="object-contain w-[80%] transform transition duration-200 ease-in-out hover:scale-110"
                                whileHover={{ scale: 1.1, y: -10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            />
                        </div>
                    </div>
                </TooltipTrigger>
                <TooltipContent
                    side="top"
                    sideOffset={1}
                    className="bg-white text-black text-sm px-3 py-1 rounded-full shadow-md border border-gray-700 animate-in"
                >
                    {club.shortName} home 24/25
                </TooltipContent>

            </Tooltip>
        </TooltipProvider>
    );
};

export default ShoppingSlider;