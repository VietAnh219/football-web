import { imagesLogoL1 } from "@/constants"
import ClubLogo from "./ClubName"
import StatBar from "./StarBar"
import { useEffect, useState } from "react";

const LiveBanner = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const logoSize = isMobile ? "30px" : "50px";
    return (
        <div className="w-1/3 h-full bg-white rounded-2xl p-6 sm:flex sm:flex-col sm:items-center hidden dark:bg-[#1B1C21] dark:transition-colors dark:duration-300">
            <div className="mb-5">
                <p className="text-xs lg:text-[18px] font-semibold dark:text-[white]">The Final Match</p>
            </div>
            <div className="flex items-start justify-center gap-8 xl:gap-20">
                <div className="w-[70px] h-[90px]">
                    <ClubLogo src={imagesLogoL1.psg} name="Paris SG" width={logoSize} height={logoSize} vertical />
                </div>
                <p className="text-xl text-yellow-400">vs</p>
                <div className="w-[70px] h-[90px]">
                    <ClubLogo src="https://crests.football-data.org/108.png" name="Inter" width={logoSize} height={logoSize} vertical />
                </div>
            </div>
            <div className="w-full">
                <StatBar left={62} right={48} label="Possession %" />
                <StatBar left={28} right={22} label="Shots on Target %" />
                <StatBar left={88} right={84} label="Pass Accuracy %" />
            </div>
        </div>
    )
}

export default LiveBanner