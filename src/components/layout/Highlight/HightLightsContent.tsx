import { generateTeamHashtags } from "@/components/utils/generateTeamHashtags";
import { shuffleArray } from "@/components/utils/shuffleArray";
import { useTotalHighLightStore } from "@/store/useHighLightStore";
import { HighlightItem } from "@/types/highlight";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const HightLightsContent = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const selectedTotalHighLight = useTotalHighLightStore((state) => state.selectedTotalHighLight);
    const [suggest, setSuggest] = useState<HighlightItem[]>();

    const selectedHighLight = selectedTotalHighLight?.find(item => item.id === id);

    const suggestArray = selectedTotalHighLight?.filter((highlight) => highlight.id !== selectedHighLight?.id).slice(20);
    const suggestShuffle = shuffleArray(suggestArray as HighlightItem[]);
    const hastag = generateTeamHashtags(selectedHighLight?.title ?? "");

    const handleClick = (item: HighlightItem) => {
        navigate(`/highlights/${item.id}`);
    };

    useEffect(() => {
        setSuggest(suggestShuffle);
    }, [selectedHighLight?.id]);


    return (
        <div className="h-fit lg:h-[100vh] flex flex-col lg:flex-row w-full gap-8">
            <div className="lg:w-6xl h-fit bg-[#f6f6f6] rounded-2xl dark:bg-[#1B1C21]">
                <div className="aspect-video sm:w-full rounded-2xl shadow-2xl overflow-hidden">
                    <iframe
                        className="w-full h-full"
                        src={selectedHighLight?.link}
                        frameBorder="0"
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                </div>
                <p className="sm:text-2xl font-bold my-2 dark:text-white">{selectedHighLight?.title}</p>
                <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                        <div>
                            <span className="text-[#606060] text-xs sm:text-[14px]">#highlight</span>
                            <span className="text-[#606060] text-xs sm:text-[14px]">{hastag}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 bg-[#f6f6f6] dark:bg-[#1B1C21] flex flex-col h-full shadow-2xs scroll-smooth ">
                <p className="text-base text-center font-semibold py-4 border-b-2 border-red-600 z-10 dark:text-white">Suggest</p>
                <div className="flex-1 overflow-y-auto scroll-smooth hide-scrollbar">
                    <div className="py-2">
                        {suggest?.map((item) => (
                            <div
                                key={item.id}
                                className="flex pl-4 py-3 gap-3 cursor-pointer hover:bg-[#e6e6e6] hover:scale-[1.01] hover:shadow-md rounded-lg transition-all duration-200 ease-in-out"
                                onClick={() => handleClick(item)}
                            >
                                <img src={item.thumbnail} alt="" className="w-[180px] h-[100px]" />
                                <div className="flex flex-col items-start justify-center">
                                    <p className="line-clamp-2 text-base font-medium dark:text-white">{item.title}</p>
                                    <span className="dark:text-white">{item.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HightLightsContent