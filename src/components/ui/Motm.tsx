import { player } from "@/constants"
import { MatchDataType } from "@/types/match"

const Motm = ({ selectedMatch }: { selectedMatch: MatchDataType }) => {
    return (
        <div className="w-full h-[400px] relative rounded-2xl overflow-hidden my-6">
            <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(/primary-bg.svg)` }} />
            <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(/primary-graphic.svg)` }} />
            <div className="relative w-full h-full flex justify-between items-center">
                <div className="uppercase font-medium text-7xl pl-25 -tracking-wider">
                    <p className="text-white motmTitle">Man of the match</p>
                    <p className="text-[#F5C451] motmTitle">{selectedMatch.score?.motm.name}</p>
                </div>
                <div className="absolute inset-0 z-10 flex justify-center items-end pointer-events-none">
                    <img
                        src={player.yamal}
                        alt=""
                        className="w-[400px] max-w-none object-contain translate-x-100 translate-y-30"
                    />
                </div>
            </div>
        </div>
    )
}

export default Motm