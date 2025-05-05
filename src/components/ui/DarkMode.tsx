import { iconStyle } from '@/constants';
import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react'

const DarkMode = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    return (
        <button onClick={toggleTheme} className="transition-colors duration-300">
            <AnimatePresence mode="wait">
                {theme === "light" ? (
                    <motion.div
                        key="moon"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Moon className={iconStyle} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="sun"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Sun className={iconStyle} />
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    )
}

export default DarkMode