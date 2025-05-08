import { imagesBanner, imagesLogoL1, player } from "@/constants"
import CountdownTimer from "./CountTime"
import ClubLogo from "./ClubName"
import { useEffect, useState } from "react";
import { formatUTCDate } from "../utils/formatUTCDate";

const Banner = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const logoSize = isMobile ? "30px" : "50px";

    return (
        <div className="w-full h-[300px] sm:h-full relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 z-0 bg-cover bg-center h-[300px] sm:h-full rounded-2xl" style={{ backgroundImage: `url(${imagesBanner.img})` }} />
            <div className="relative w-full sm:h-full flex flex-col items-center">
                <div className="mt-5 flex gap-2">
                    <img src={imagesBanner.icon} alt="C1" className="w-[40px] h-[40px] sm:w-[72px] sm:h-[72px]" />
                    <div className="border-white border-[1px]"></div>
                    <h1 className="text-white flex flex-col items-center justify-center">
                        <span className="uppercase -tracking-normal text-[12px]">Road to</span>
                        <span className="bannerTitle text-[16px] uppercase">munich 25</span>
                    </h1>
                </div>
                <div className="text-center">
                    <div className="text-white font-medium flex items-center gap-1 text-2xl">
                        <ClubLogo src={imagesLogoL1.psg} name="Paris SG" width={logoSize} height={logoSize} horizonal />
                        <p className="text-sm text-yellow-400">vs</p>
                        <ClubLogo src="https://crests.football-data.org/108.png" name="Intermilan" width={logoSize} height={logoSize} />
                    </div>
                    <div className="text-white text-xs sm:text-2xl">
                        <p>{formatUTCDate("2025-05-31T19:00:00Z")}</p>
                    </div>
                </div>
                <CountdownTimer targetDate="2025-05-31T19:00:00" />
            </div>
            <div className="absolute inset-0 z-10 flex justify-center items-end pointer-events-none">
                <img
                    src={player.dembele}
                    alt=""
                    className="w-[200px] h-[300px] lg:w-[400px] lg:h-fit max-w-none object-contain scale-180 lg:scale-120 -translate-x-40 translate-y-20 lg:-translate-x-70 xl:-translate-x-100 lg:translate-y-80"
                />
            </div>
            <div className="absolute inset-0 z-10 flex justify-center items-end pointer-events-none">
                <img
                    src={player.lmartinez}
                    alt=""
                    className="w-[150px] h-[300px] lg:w-[400px] lg:h-fit max-w-none object-contain scale-160 lg:scale-none translate-x-35 translate-y-15 lg:translate-x-70 xl:translate-x-85 lg:translate-y-40"
                />
            </div>
        </div>
    )
}

export default Banner