import { Search } from 'lucide-react';
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { debounce, DebouncedFunc } from 'lodash';

const Input = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [keyword, setKeyWord] = useState("");
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);
    const isMobile = window.innerWidth < 640;

    const debouncedSearch: DebouncedFunc<(val: string) => void> = useMemo(
        () => debounce((val: string) => {
            if (val.trim()) {
                navigate(`/search?q=${encodeURIComponent(val.trim())}`);
            }
        }, 500) as DebouncedFunc<(val: string) => void>,
        [navigate]
    );

    useEffect(() => {
        return () => {
            debouncedSearch.cancel();
        };
    }, [debouncedSearch]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyWord(e.target.value);
        debouncedSearch(e.target.value);
    }

    const handleSearchNow = () => {
        debouncedSearch.cancel();
        if (keyword.trim()) {
            navigate(`/search?q=${encodeURIComponent(keyword.trim())}`);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearchNow();
            setKeyWord("");
        }
    };

    return (
        <div className="relative flex items-center h-10">
            <Search
                size={20}
                className="text-gray-500 absolute left-3 z-10"
                onClick={handleSearchNow}
            />

            <motion.input
                ref={inputRef}
                type="text"
                placeholder="Type to search..."
                value={keyword}
                onChange={handleInputChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onKeyDown={handleKeyDown}
                initial={false}
                animate={{
                    width: isFocused ? (isMobile ? 200 : 500) : 200,
                    paddingLeft: isFocused ? 36 : 36,
                    opacity: isFocused ? 1 : 0.5,
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
                className="h-full rounded-full border border-gray-300 focus:outline-none pr-4 transition-colors bg-white shadow-sm overflow-hidden"
            />
        </div>
    )
}

export default Input