import ClubLogo from "@/components/ui/ClubName";
import PlayerTactic from "@/components/ui/PlayerTactic";
import { GenerateFormation } from "./GenerateFormation";
import { MatchDataType } from "@/types/match";

const TeamFormation = ({ selectedMatch }: { selectedMatch: MatchDataType }) => {
    const { home, away } = selectedMatch;
    const formationA = home.formation;
    const formationB = away.formation;

    const playersA = GenerateFormation(formationA, true, home.lineup);
    const playersB = GenerateFormation(formationB, false, away.lineup);

    return (
        <div className="mt-2">
            <h1 className="font-bold dark:text-white">Team Formation</h1>
            <div className="mt-10">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <ClubLogo src={home.crest} name={home.shortName} width="32px" height="32px" horizonal />
                        <p className="text-right dark:text-white">{formationA}</p>
                    </div>
                    <div className="flex flex-col">
                        <ClubLogo src={away.crest} name={away.shortName} width="32px" height="32px" />
                        <p className="text-left dark:text-white">{formationB}</p>
                    </div>
                </div>
                <div className="w-full h-[300px] md:h-[500px] relative rounded-2xl overflow-hidden">
                    <div
                        className="absolute inset-0 z-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${"/Line.png"})` }}
                    />
                    {playersA.map((p, i) => (
                        <PlayerTactic key={i} {...p} color={home.color ?? "#dc2626"} name={p.name} />
                    ))}
                    {playersB.map((p, i) => (
                        <PlayerTactic key={`b-${i}`} {...p} color={away.color ?? "#facc15"} name={p.name} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamFormation;
