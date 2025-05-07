import { useClubs } from "@/components/hooks/useClubs";
import Header from "@/components/layout/Banner/Header";
import FootballMatch from "@/components/layout/FootballMatch/FootballMatch";
import News from "@/components/layout/News/News";
import StadingsHome from "@/components/layout/StandingHome/StadingsHome";
import FadeInSection from "@/components/ui/FadeInSection";
import { SkeletonShirt, SkeletonClubLogo } from "@/components/ui/AllSkeleton";
import SliderHome from "@/components/ui/SliderHome"
import { useLeagueStore } from "@/store/useSeasonStore";
import { motion } from "framer-motion";
import Line from "@/components/ui/Line";

const Home = () => {
    const selectedLeague = useLeagueStore((state) => state.selectedLeague);
    const { data: league, isLoading } = useClubs(selectedLeague ?? "PL");

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className='h-full'>
            <Header />
            <div className="bg-white rounded-2xl pl-6 py-8 space-y-8 dark:bg-[#1B1C21] transition-colors duration-300">

                <FadeInSection>
                    <FootballMatch />
                </FadeInSection>

                <Line />

                <FadeInSection>
                    <StadingsHome />
                </FadeInSection>

                <Line />

                <FadeInSection>
                    {isLoading ? <SkeletonClubLogo /> : <SliderHome title="Follow Club" icon="🎮" clubs={league?.clubs} />}
                </FadeInSection>

                <Line />

                <FadeInSection>
                    {isLoading ? <SkeletonShirt /> : <SliderHome title="Kit" icon="👕" clubs={league?.clubs} />}
                </FadeInSection>

                <Line />

                <FadeInSection>
                    <News />
                </FadeInSection>

            </div>
        </motion.div>
    )
}

export default Home