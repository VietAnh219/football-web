import { player } from "@/constants"
import { MatchDataType } from "@/types/match"

const Motm = ({ selectedMatch }: { selectedMatch: MatchDataType }) => {
    return (
        <div className="w-full h-[200px] sm:h-[300px] lg:h-[400px] relative rounded-2xl overflow-hidden my-6">
            <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(/primary-bg.svg)` }} />
            <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(/primary-graphic.svg)` }} />
            <div className="relative w-full h-full flex justify-between items-center">
                <div className="uppercase font-medium pl-10 text-xl sm:text-3xl lg:text-7xl sm:pl-25 -tracking-wider">
                    <p className="text-white motmTitle">Man of the match</p>
                    <p className="text-[#F5C451] motmTitle">{selectedMatch.score?.motm.name}</p>
                </div>
                <div className="absolute inset-0 z-10 flex justify-center items-end pointer-events-none">
                    <img
                        src={player.yamal}
                        alt=""
                        className="w-[200px] sm:w-[400px] max-w-none object-contain translate-x-25 translate-y-20 sm:translate-x-50 sm:translate-y-50 lg:translate-x-100 lg:translate-y-30"
                    />
                </div>
            </div>
        </div>
    )
}

export default Motm