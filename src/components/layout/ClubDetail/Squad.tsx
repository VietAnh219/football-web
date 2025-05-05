import { useClubDetailStore } from "@/store/useClubDetailStore";
import PlayerSection from "./PlayerSection";
import { SquadSection } from "@/types/club";

const Squad = () => {
    const selectedClub = useClubDetailStore((state) => state.selectedClub);
    // console.log(selectedClub?.squad)
    const squadPlayer: SquadSection[] = [
        {
            title: "Head Coach",
            players:
                selectedClub?.squad.coach?.map((c) => ({
                    id: c.id,
                    name: c.name,
                    img: c.img,
                })) || [],
        },
        {
            title: "Goalkeepers",
            players: selectedClub?.squad.goalkeepers || [],
        },
        {
            title: "Defenders",
            players: selectedClub?.squad.defenders || [],
        },
        {
            title: "Midfielders",
            players: selectedClub?.squad.midfielders || [],
        },
        {
            title: "Forwards",
            players: selectedClub?.squad.forwards || [],
        },
    ];
    return (
        <div>
            <PlayerSection squadPlayer={squadPlayer} />
        </div>
    )
}

export default Squad