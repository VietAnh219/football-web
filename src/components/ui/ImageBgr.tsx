import { AnimatePresence, motion } from "framer-motion"
import { imagesBackground } from "@/constants";
import { useEffect, useState } from "react";


const ImageBgr = () => {
    const [index, setIndex] = useState(0);

    // ImageBackground
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % imagesBackground.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={imagesBackground[index]}
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 z-0 bg-cover bg-center h-[300px] sm:h-full"
                style={{ backgroundImage: `url(${imagesBackground[index]})` }}
            />
        </AnimatePresence>
    )
}

export default ImageBgr