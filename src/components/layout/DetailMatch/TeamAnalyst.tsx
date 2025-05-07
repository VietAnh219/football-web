import { Divider } from "@mui/material"
import { ChartPerform } from "./ChartPerform"
import LineUp from "./LineUp"
import TeamFormation from "./TeamFormation"
import { MatchDataType } from "@/types/match"
import StatMatch from "./StatMatch"

const TeamAnalyst = ({ selectedMatch }: { selectedMatch: MatchDataType }) => {
    const setMatch = (selectedMatch.status !== "Upcoming" && selectedMatch.status !== "Friendly")
    const { home, away } = selectedMatch;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="col-span-2 bg-white dark:bg-[#1B1C21] transition-colors duration-300 rounded-xl py-11 px-8">
                {setMatch && <ChartPerform selectedMatch={selectedMatch} />}
                {setMatch && <Divider />}
                <TeamFormation selectedMatch={selectedMatch} />
            </div>
            <div className="flex flex-col gap-4">
                {setMatch &&
                    <div className="bg-white dark:bg-[#1B1C21] transition-colors duration-300 rounded-xl py-8 px-5">
                        <h1 className="text-center pb-6 font-bold dark:text-white transition-colors duration-300">Team Statistic</h1>
                        <StatMatch home={home} away={away} />
                    </div>}
                <div className="bg-white dark:bg-[#1B1C21] rounded-xl py-8 px-5 transition-colors duration-300">
                    <LineUp selectedMatch={selectedMatch} />
                </div>
            </div>
        </div>

    )
}

export default TeamAnalyst