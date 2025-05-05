import { imagesBannerHighLight, player } from "@/constants"

const BannerHightLight = () => {
    return (
        <div className="w-full h-[400px] relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url("/wallpaperflare-cropped.jpg")` }} />
            <div className="relative w-full h-full flex flex-col items-center">
                <div className="mt-5 flex gap-2">
                    <img src={imagesBannerHighLight.iconLiga} alt="C1" width="50px" height="50px" />
                    <img src={imagesBannerHighLight.iconPL} alt="C1" width="50px" height="50px" />
                    <img src={imagesBannerHighLight.iconC1} alt="C1" width="72px" height="72px" />
                    <img src={imagesBannerHighLight.iconL1} alt="C1" width="50px" height="50px" />
                    <img src={imagesBannerHighLight.iconSerieA} alt="C1" width="50px" height="50px" />
                </div>
                <div className="text-center mt-5">
                    <h1 className="text-white">Many</h1>
                    <h1 className="text-white text-3xl">HighLight in Season</h1>
                </div>
            </div>
            <div className="absolute inset-0 z-10 flex justify-center items-end pointer-events-none">
                <img
                    src={player.bruno}
                    alt=""
                    className="w-[400px] max-w-none object-contain  scale-90 -translate-x-140 translate-y-8"
                />
            </div>
            <div className="absolute inset-0 z-10 flex justify-center items-end pointer-events-none">
                <img
                    src={player.kvaratskhelia}
                    alt=""
                    className="w-[400px] max-w-none object-contain  scale-90 -translate-x-70 translate-y-20"
                />
            </div>
            <div className="absolute inset-0 z-10 flex justify-center items-end pointer-events-none">
                <img
                    src={player.yamal}
                    alt=""
                    className="w-[400px] max-w-none object-contain translate-x-70 translate-y-30"
                />
            </div>
            <div className="absolute inset-0 z-10 flex justify-center items-end pointer-events-none">
                <img
                    src={player.lmartinez}
                    alt=""
                    className="w-[400px] max-w-none object-contain translate-x-140 translate-y-45"
                />
            </div>
        </div>
    )
}

export default BannerHightLight