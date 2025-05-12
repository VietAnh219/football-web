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
                        src={selectedMatch.score?.motm.img}
                        alt=""
                        className="w-[180px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:h-[450px] max-w-none object-contain translate-y-10 translate-x-30 sm:translate-y-14 md:translate-y-30 md:translate-x-50 lg:translate-y-20 lg:translate-x-100"
                    />
                </div>

            </div>
        </div>
    )
}

export default Motm