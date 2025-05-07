import { imagesBannerHighLight, player } from "@/constants"

const BannerHightLight = () => {
    return (
        <div className="w-full h-[300px] lg:h-[400px] relative rounded-2xl overflow-hidden mb-4 sm:mb-6">
            <div className="absolute inset-0 z-0 h-[300px] sm:h-full bg-cover bg-center rounded-2xl" style={{ backgroundImage: `url("/wallpaperflare-cropped.jpg")` }} />
            <div className="relative w-full flex flex-col items-center">
                <div className="mt-5 flex gap-2">
                    <img src={imagesBannerHighLight.iconLiga} alt="LL" className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]" />
                    <img src={imagesBannerHighLight.iconPL} alt="PL" className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]" />
                    <img src={imagesBannerHighLight.iconC1} alt="C1" className="w-[40px] h-[40px] sm:w-[72px] sm:h-[72px]" />
                    <img src={imagesBannerHighLight.iconL1} alt="L1" className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]" />
                    <img src={imagesBannerHighLight.iconSerieA} alt="SA" className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]" />
                </div>
                <div className="text-center lg:text-xl xl:mt-5">
                    <h1 className="text-white text-sm">Many</h1>
                    <h1 className="text-white text-sm lg:text-xl xl:text-3xl">HighLight in Season</h1>
                </div>
            </div>
            <div className="absolute inset-0 z-10 flex justify-center items-end pointer-events-none">
                <img
                    src={player.bruno}
                    alt=""
                    className="w-[250px] lg:w-[400px] max-w-none object-contain scale-100 lg:scale-90 -translate-x-35 translate-y-1 sm:-translate-x-70 sm:translate-y-8 lg:-translate-x-80 lg:translate-y-8  xl:-translate-x-140 xl:translate-y-8"
                />
            </div>
            <div className="absolute inset-0 z-10 flex justify-center items-end pointer-events-none">
                <img
                    src={player.kvaratskhelia}
                    alt=""
                    className="w-[250px] lg:w-[400px] max-w-none object-contain scale-90 -translate-x-20 translate-y-23 sm:-translate-x-30 lg:-translate-x-40 lg:translate-y-50 xl:-translate-x-70 xl:translate-y-20"
                />
            </div>
            <div className="absolute inset-0 z-10 flex justify-center items-end pointer-events-none">
                <img
                    src={player.yamal}
                    alt=""
                    className="w-[250px] lg:w-[400px] max-w-none object-contain scale-90 lg:scale-none translate-x-20 translate-y-23 sm:translate-x-30  lg:translate-y-55 xl:translate-x-70 xl:translate-y-30"
                />
            </div>
            <div className="absolute inset-0 z-1 lg:z-10 flex justify-center items-end pointer-events-none">
                <img
                    src={player.lmartinez}
                    alt=""
                    className="w-[250px] lg:w-[400px] max-w-none object-contain scale-90 lg:scale-none translate-x-35 translate-y-10 sm:translate-x-70 sm:translate-y-20 lg:translate-x-80 lg:translate-y-40 xl:translate-x-140 xl:translate-y-45"
                />
            </div>
        </div>
    )
}

export default BannerHightLight