import { useHighLights } from "@/components/hooks/useHighLights"
import BannerHightLight from "@/components/layout/Banner/BannerHightLight"
import HighlightSlider from "@/components/layout/Highlight/HighlightSlider"
import FadeInSection from "@/components/ui/FadeInSection";
import { Skeleton } from "@/components/ui/skeleton";
import { useTotalHighLightStore } from "@/store/useHighLightStore";
import { useEffect } from "react";

const HightLights = () => {
    const { data: data, isLoading } = useHighLights();
    const setSelectedTotalHighLights = useTotalHighLightStore((state) => state.setSelectedTotalHighLight);

    const highlightSections = [
        {
            topic: "Highlights | UEFA Champions League 2024-2025",
            data: data?.highlights.ChampionsLeague,
        },
        {
            topic: "Highlights | English Premier League 2024-2025",
            data: data?.highlights.PremierLeague,
        },
        {
            topic: "Highlights | La Liga 2024-2025",
            data: data?.highlights.LaLiga,
        },
        {
            topic: "Highlights | Ligue 1 2024-2025",
            data: data?.highlights.Ligue1,
        },
        {
            topic: "Highlights | SerieA 2024-2025",
            data: data?.highlights.SerieA,
        }
    ];

    const suggestArray = [
        ...(data?.highlights?.ChampionsLeague || []),
        ...(data?.highlights?.PremierLeague || []),
        ...(data?.highlights?.LaLiga || []),
        ...(data?.highlights?.Ligue1 || []),
        ...(data?.highlights?.SerieA || []),
    ]

    useEffect(() => {
        setSelectedTotalHighLights(suggestArray);
    }, [data?.highlights])

    return (
        <div className="flex flex-col h-full">
            <BannerHightLight />
            <div className="bg-white dark:bg-[#1B1C21] rounded-2xl pl-6 py-8 space-y-8">
                {isLoading ? (
                    Array.from({ length: 5 }).map((_, idx) => (
                        <div key={idx} className="space-y-2">
                            <Skeleton className="h-6 w-1/5" />
                            <div className="flex space-x-4">
                                {Array.from({ length: 6 }).map((__, i) => (
                                    <Skeleton key={i} className="w-[250px] h-[140px] rounded-xl" />
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    highlightSections.map((section, index) => (
                        <FadeInSection key={index}>
                            <HighlightSlider highlight={section.data} topic={section.topic} />
                        </FadeInSection>
                    ))
                )}
            </div>
        </div>
    )
}

export default HightLights