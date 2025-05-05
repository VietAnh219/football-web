import { useStatsLeague } from "@/components/hooks/useStatsLeague";
import ClubSite from "@/components/layout/LeagueDetail/ClubSite";
import ClubStatSection from "@/components/layout/LeagueDetail/ClubStatSection";
import Fixtures from "@/components/layout/LeagueDetail/Fixtures";
import PlayerStatSection from "@/components/layout/LeagueDetail/PlayerStatSection";
import FadeInSection from "@/components/ui/FadeInSection";
import Line from "@/components/ui/Line";
import { SkeletonCard } from "@/components/ui/AllSkeleton";
import { useLocation } from "react-router-dom";

const PremierLeague = () => {
    const location = useLocation();
    const endpoint = location.pathname.slice(1)
    const { data: data, isLoading } = useStatsLeague(endpoint);

    const playerStats = data?.playerStats;
    const clubStats = data?.clubStats


    return (
        <div className="w-full h-full relative rounded-2xl overflow-hidden">
            <div className="w-full h-[500px] relative rounded-2xl overflow-hidden mb-6">
                <div className="absolute inset-0 z-0 object-cover bg-center" style={{ backgroundImage: `url("/EPL.jpg")` }} />
            </div>
            <div className="bg-white rounded-2xl px-6 py-8 h-full">
                <FadeInSection>
                    <Fixtures />
                </FadeInSection>

                <Line />

                <FadeInSection>
                    {isLoading ? <SkeletonCard /> : <PlayerStatSection title="2024/25 Player Stats" stats={playerStats ?? []} />}
                </FadeInSection>

                <Line />

                <FadeInSection>
                    {isLoading ? <SkeletonCard /> : <ClubStatSection title="Premier League Club Stats" stats={clubStats ?? []} />}
                </FadeInSection>

                <Line />

                <FadeInSection>
                    <ClubSite league={endpoint} />
                </FadeInSection>
            </div>
        </div>
    )
}

export default PremierLeague