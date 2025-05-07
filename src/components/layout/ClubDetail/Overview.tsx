import { Button } from "@/components/ui/button"
import { getAbsoluteUrl } from "@/components/utils/getAbsoluteUrl"
import { iconSocial } from "@/constants"
import { useClubDetailStore } from "@/store/useClubDetailStore"
import { CircleArrowOutUpRight, MoveRight } from "lucide-react"

const Overview = () => {
    const selectedClub = useClubDetailStore((state) => state.selectedClub);
    const absoluteWebsiteUrl = getAbsoluteUrl(selectedClub?.website);
    const socialFb = getAbsoluteUrl(selectedClub?.social?.facebook);
    const socialIns = getAbsoluteUrl(selectedClub?.social?.instagram);
    const socialTk = getAbsoluteUrl(selectedClub?.social?.tiktok);
    const socialX = getAbsoluteUrl(selectedClub?.social?.twitter);
    const socialYt = getAbsoluteUrl(selectedClub?.social?.youtube);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 text-[#37003c] dark:text-white gap-8">
            <div className="">
                <div>
                    <h1 className="text-[16px] font-bold mb-4">Visit {selectedClub?.shortName} Website</h1>
                    <Button asChild variant="outline" className="px-4 py-3 w-full justify-between">
                        <a
                            href={absoluteWebsiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[15px] flex items-center gap-1"
                        >
                            <span>Official Website</span>
                            <MoveRight />
                        </a>
                    </Button>
                </div>
                <div className="mt-8">
                    <h1 className="text-[16px] font-bold mb-4">Official Website:</h1>
                    <a
                        href={absoluteWebsiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:underline"
                    >
                        {absoluteWebsiteUrl}
                        <CircleArrowOutUpRight className="w-3 h-3 ml-1" />
                    </a>
                    <div className="cursor-pointer flex items-center gap-3 mt-2">
                        <a
                            href={socialFb}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transform transition duration-200 ease-in-out hover:scale-120"
                        >
                            <img src={iconSocial.facebook} alt="facebook" />
                        </a>
                        <a
                            href={socialIns}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transform transition duration-200 ease-in-out hover:scale-120"
                        >
                            <img src={iconSocial.insta} alt="insta" />
                        </a>
                        <a
                            href={socialTk}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transform transition duration-200 ease-in-out hover:scale-120"
                        >
                            <img src={iconSocial.twiter} alt="tiktok" />
                        </a>
                        <a
                            href={socialX}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transform transition duration-200 ease-in-out hover:scale-120"
                        >
                            <img src={iconSocial.tiktok} alt="twitter" />
                        </a>
                        <a
                            href={socialYt}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transform transition duration-200 ease-in-out hover:scale-120"
                        >
                            <img src={iconSocial.youtube} alt="youtube" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-span-2">
                <h1 className="text-[16px] font-bold mb-4">Description</h1>
                <p className="text-justify">
                    {selectedClub?.description}
                </p>
            </div>
        </div>
    )
}

export default Overview