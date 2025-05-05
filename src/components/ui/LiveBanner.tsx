import { imagesLogoL1, imagesLogoLiga } from "@/constants"
import ClubLogo from "./ClubName"
import StatBar from "./StarBar"

const LiveBanner = () => {
    return (
        <div className="w-1/3 h-full bg-white rounded-2xl p-6 flex flex-col items-center">
            <div className="mb-5">
                <p className="text-[18px] font-semibold">The Ultimate Matchup</p>
            </div>
            <div className="flex items-start justify-center gap-10">
                <div className="w-[70px] h-[90px]">
                    <ClubLogo src={imagesLogoL1.psg} name="Paris SG" width="50px" height="50px" vertical />
                </div>
                <p className="text-xl text-yellow-400">vs</p>
                <div className="w-[70px] h-[90px]">
                    <ClubLogo src={imagesLogoLiga.barc} name="Barcalona" width="50px" height="50px" vertical />
                </div>
            </div>
            <div className="w-full">
                <StatBar left={7} right={3} label="Win" />
                <StatBar left={12} right={7} label="Lose" />
                <StatBar left={7} right={3} label="Draw" />
            </div>
        </div>
    )
}

export default LiveBanner