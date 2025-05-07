import { StatsSectionProps } from "@/types/stat"
import PlayerStatCard from "./PlayerStatCard"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

const PlayerStatSection = ({ title, stats }: StatsSectionProps) => {
    return (
        <div>
            <h1 className="text-xl md:text-2xl font-bold text-[#37003c] dark:text-white">{title}</h1>
            <div className="hidden sm:grid sm:grid-cols-2 xl:grid-cols-4 sm:gap-4">
                {stats.map((stat, index) => (
                    <PlayerStatCard key={index} title={stat.title} players={stat.players ?? []} />
                ))}
            </div>
            <div className="sm:hidden">
                <Swiper
                    spaceBetween={16}
                    slidesPerView={1}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={stats.length > 20}
                    speed={800}
                    modules={[Autoplay]}
                    className="transition-all ease-in-out"
                >
                    {stats.map((stat, index) => (
                        <SwiperSlide key={index}>
                            <PlayerStatCard title={stat.title} players={stat.players ?? []} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default PlayerStatSection