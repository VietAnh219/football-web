import { SquadSection } from "@/types/club";
import Player from "./Player";

const PlayerSection = ({ squadPlayer }: { squadPlayer: SquadSection[] }) => {
    return (
        <div>
            {
                squadPlayer.map((squad: SquadSection, index) => (
                    <Player title={squad.title} players={squad.players} key={index} />
                ))
            }
        </div>
    )
}

export default PlayerSection