import { motion } from "framer-motion"

const StatBar = ({ colorL, colorR, left, right, label }: { colorL?: string, colorR?: string, left: number; right: number; label: string }) => {
    const total = left + right
    const leftPercent = (left / total) * 100
    const rightPercent = (right / total) * 100

    return (
        <div className="w-full mb-4">
            <p className="text-center font-semibold dark:text-[white]">{label}</p>
            <div className="flex justify-between text-sm px-1">
                <span style={{ color: colorL ?? "#3366CC" }}>{left}</span>
                <span style={{ color: colorR ?? "#00CFC1" }}>{right}</span>
            </div>
            <div className="flex w-full h-2 mt-1">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${leftPercent}%` }}
                    transition={{ duration: 0.6 }}
                    className="rounded-l-full"
                    style={{ backgroundColor: colorL ?? "#3366CC" }}
                />
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${rightPercent}%` }}
                    transition={{ duration: 0.6 }}
                    className="bg-opacity-80 rounded-r-full"
                    style={{ backgroundColor: colorR ?? "#00CFC1" }}
                />
            </div>
        </div>
    )
}

export default StatBar
