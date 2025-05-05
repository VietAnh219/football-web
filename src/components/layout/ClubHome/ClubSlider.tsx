import {
    Tooltip,
    TooltipProvider,
    TooltipTrigger,
    TooltipContent,
} from "@/components/ui/tooltip";
import { useClubDetailStore } from "@/store/useClubDetailStore";
import { useLeagueStore } from "@/store/useSeasonStore";
import { Club } from "@/types/club";
import { useNavigate } from "react-router-dom";

const ClubSlider = ({ club }: { club: Club }) => {
    const selectedLeague = useLeagueStore((state) => state.selectedLeague);
    const setSelectedClub = useClubDetailStore((state) => state.setSelectedClub);
    const navigate = useNavigate();

    const handleClick = () => {
        setSelectedClub(club);
        navigate(`/${selectedLeague}/${club.id}`);
    };
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div
                        onClick={handleClick}
                        className="w-[124px] h-[124px] rounded-full bg-gray-100 flex items-center justify-center shrink-0 border-2 cursor-pointer"
                    >
                        <img
                            src={club.crest}
                            alt={club.shortName}
                            className="w-[60%] object-contain transform transition duration-200 ease-in-out hover:scale-110"
                        />
                    </div>
                </TooltipTrigger>
                <TooltipContent
                    side="top"
                    sideOffset={10}
                    className="bg-white text-black text-xs px-3 py-1 shadow-md boder border-gray-700 animate-in"
                >
                    {club.shortName}
                </TooltipContent>

            </Tooltip>
        </TooltipProvider>
    );
};

export default ClubSlider;
