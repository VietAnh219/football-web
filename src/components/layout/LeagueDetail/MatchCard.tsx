import ClubLogo from "@/components/ui/ClubName"
import { MdOutlineStadium } from "react-icons/md"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar } from "lucide-react"
import { Fixture } from "@/types/fixtures"
import { formatUTCDate } from "@/components/utils/formatUTCDate"
import { darkenColor } from "@/components/utils/darkenColor"


const MatchCard = ({ matches }: { matches: Fixture[] }) => {
    const getColor = (color: string) => {
        const mainColor = color ?? "#000"
        const darkerColor = darkenColor(mainColor, 90);

        return darkerColor
    }

    return (
        <div className="w-full">
            {
                matches.map((match) => (
                    <Dialog key={match.id}>
                        <DialogTrigger className="w-full">
                            <div className="flex flex-col justify-center items-center">
                                <div className="w-full group flex justify-center lg:gap-20 xl:gap-90 py-2.5 border-b border-[#f5f2f5] hover:bg-[linear-gradient(98.5deg,_#05f0ff_-46.16%,_#7367ff_42.64%,_#963cff_70.3%)] transition-all duration-300 ease-in-out">
                                    <div className="flex items-center transition-all duration-300 ease-in-out">
                                        <div className="w-[150px] sm:w-[200px]  flex items-start text-[#37003c] font-bold group-hover:text-white transition-all duration-300 ease-in-out">
                                            <ClubLogo src={match.homeTeam.crest} name={match.homeTeam.shortName} width="32px" height="32px" horizonal />
                                        </div>
                                        <div className="border border-[#ebe5eb] text-[#37003c] p-1 rounded-sm group-hover:text-white transition-all duration-300 ease-in-out">
                                            <span className="text-sm md:text-[16px] dark:text-white">{match.time}</span>
                                        </div>
                                        <div className="w-[150px] sm:w-[200px]  flex justify-end text-[#37003c] font-bold group-hover:text-white transition-all duration-300 ease-in-out">
                                            <ClubLogo src={match.awayTeam.crest} name={match.awayTeam.shortName} width="32px" height="32px" />
                                        </div>
                                    </div>
                                    <div className="w-1/6 lg:w-1/4 hidden lg:flex lg:items-center lg:gap-2 transition-all duration-300 ease-in-out">
                                        <span className="text-[#37003c] dark:text-white group-hover:text-white transition-all duration-300 ease-in-out">
                                            <MdOutlineStadium />
                                        </span>
                                        <span className="text-[#37003c] dark:text-white text-xs group-hover:text-white transition-all duration-300 ease-in-out">
                                            {match.stadium}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="!max-w-[900px] py-8 sm:px-[50px] block " aaria-describedby={undefined}>
                            <DialogTitle></DialogTitle>
                            <DialogDescription></DialogDescription>
                            <div className="mb-10">
                                <div className="flex justify-center items-center gap-3 text-xs py-1 px-2 border-1 border-b-0 border-[#ebe5eb] rounded-t-sm w-max mx-auto text-[#37003c]">
                                    <div className="hidden sm:flex sm:items-center sm:gap-1 ">
                                        <Calendar className="w-3 h-3" />
                                        <span>
                                            {formatUTCDate(match.date)}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        <span>
                                            Kick-Off: {match.time}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MdOutlineStadium className="w-3 h-3" />
                                        {match.stadium}
                                    </div>
                                </div>
                                <div className="flex items-center text-white font-bold text-xl relative">
                                    <div className="absolute top-[-1px] left-1/2 transform -translate-x-1/2 bg-white  sm:h-[120px] sm:text-6xl font-medium text-[#37003c] px-6 py-3 rounded-b-lg shadow-md">{match.time}</div>
                                    <div className="flex w-full items-center gap-2 sm:w-1/2 rounded-2xl h-[40px] sm:h-[80px] px-[50px]" style={{ background: `linear-gradient(to right, ${match.homeTeam.color}, ${getColor(match.homeTeam.color)})` }}>
                                        <img src={match.homeTeam.crest} alt={match.homeTeam.shortName} className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] absolute transform -translate-x-20" />
                                        <span className="hidden sm:block text-sm sm:text-[20px]">{match.homeTeam.shortName}</span>
                                        <span className="sm:hidden text-sm sm:text-[20px]">{match.homeTeam.tla}</span>
                                    </div>
                                    <div className="flex items-center justify-end gap-2 w-1/2 rounded-2xl h-[40px] sm:h-[80px] px-[50px]" style={{ background: `linear-gradient(to right, ${match.awayTeam.color}, ${getColor(match.awayTeam.color)})` }}>
                                        <span className="hidden sm:block text-sm sm:text-[20px]">{match.awayTeam.shortName}</span>
                                        <span className="sm:hidden text-sm sm:text-[20px]">{match.awayTeam.tla}</span>
                                        <img src={match.awayTeam.crest} alt={match.awayTeam.shortName} className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] absolute transform translate-x-20" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row text-center py-2 text-sm font-bold text-gray-700">
                                <div className="flex flex-col gap-4 justify-around">
                                    <div>
                                        <div className="flex items-center justify-center gap-1" >
                                            <img src={match.homeTeam.crest} alt={match.homeTeam.tla} className="w-5 h-5" />
                                            <span className="text-[#37003c]">{match.homeTeam.tla}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-center gap-1">
                                            <img src={match.awayTeam.crest} alt={match.awayTeam.tla} className="w-5 h-5" />
                                            <span className="text-[#37003c]">{match.awayTeam.tla}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between w-full px-5">
                                    <div className="text-xs text-[#37003c]">KO</div>
                                    <div className="text-xs text-[#37003c]">HT</div>
                                    <div className="text-xs text-[#37003c]">FT</div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                ))
            }
        </div>
    )
}

export default MatchCard