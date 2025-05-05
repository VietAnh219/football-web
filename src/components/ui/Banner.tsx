import { imagesBanner, imagesLogoL1, imagesLogoLiga, player } from "@/constants"
import CountdownTimer from "./CountTime"
import ClubLogo from "./ClubName"

const Banner = () => {
    return (
        <div className="w-full h-full relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(${imagesBanner.img})` }} />
            <div className="relative w-full h-full flex flex-col items-center">
                <div className="mt-5 flex gap-2">
                    <img src={imagesBanner.icon} alt="C1" width="72px" height="72px" />
                    <div className="border-white border-[1px]"></div>
                    <h1 className="text-white flex flex-col items-center justify-center">
                        <span className="uppercase -tracking-normal text-[12px]">Road to</span>
                        <span className="bannerTitle text-[16px] uppercase">munich 25</span>
                    </h1>
                </div>
                <div className="text-center">
                    <div className="text-white font-medium flex items-center gap-1 text-2xl">
                        <ClubLogo src={imagesLogoL1.psg} name="Paris SG" width="50px" height="50px" horizonal />
                        <p className="text-sm text-yellow-400">vs</p>
                        <ClubLogo src={imagesLogoLiga.barc} name="Barcelona" width="50px" height="50px" />
                    </div>
                    <div className="text-white">
                        <p>Monday, 2 June 2025</p>
                    </div>
                </div>
                <CountdownTimer targetDate="2025-06-02T02:00:00" />
            </div>
            <div className="absolute inset-0 z-10 flex justify-center items-end pointer-events-none">
                <img
                    src={player.dembele}
                    alt=""
                    className="w-[400px] max-w-none object-contain  scale-120 -translate-x-100 translate-y-80"
                />
            </div>
            <div className="absolute inset-0 z-10 flex justify-center items-end pointer-events-none">
                <img
                    src={player.yamal}
                    alt=""
                    className="w-[400px] max-w-none object-contain translate-x-85 translate-y-30"
                />
            </div>
        </div>
    )
}

export default Banner