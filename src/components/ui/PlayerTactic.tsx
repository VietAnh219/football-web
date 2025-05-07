
const PlayerTactic = ({ number, top, left, color, name }: { number: number; top: string; left: string; color: string, name: string }) => (
    <div
        className="absolute text-center group"
        style={{ top, left, transform: "translate(-50%, -50%)" }}
    >
        <div
            className="w-5 h-5 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm cursor-pointer"
            style={{ backgroundColor: color }}
        >
            {number}
        </div>
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            {name}
        </div>
    </div>
);
export default PlayerTactic