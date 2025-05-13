import { useClubs } from "@/components/hooks/useClubs";
import { Skeleton } from "@/components/ui/skeleton";
import { useClubDetailStore } from "@/store/useClubDetailStore";
import { Club } from "@/types/club";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom"
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ClubSite = ({ league }: { league: string }) => {
    const { data: data, isLoading } = useClubs(league);

    const setSelectedClub = useClubDetailStore((state) => state.setSelectedClub);

    const navigate = useNavigate();
    const handleClick = (id: number, club: Club) => {
        setSelectedClub(club)
        navigate(`/${league}/${id}`);
    };

    const isCL = league === "CL";

    return (
        <div>
            <h1 className="text-2xl font-bold text-[#37003c] mb-2 dark:text-white">Club sites</h1>

            {isLoading ? (
                <div className={`flex gap-4 ${isCL ? "overflow-x-auto" : "flex-wrap"}`}>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <div
                            key={index}
                            className="w-[100px] h-[100px] rounded-full flex items-center justify-center shrink-0 transition-all"
                        >
                            <Skeleton className="w-full h-full rounded-full" />
                        </div>
                    ))}
                </div>
            ) : isCL ? (
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev"
                    }}
                    spaceBetween={16}
                    slidesPerView={"auto"}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={true}
                    speed={800}
                    className="!pb-4 h-[100px] club-sites-swiper transition-all ease-in-out"
                >
                    {data?.clubs.map((club: Club) => (
                        <SwiperSlide
                            key={club.id}
                            style={{ width: 60 }}
                            className="top-1/2"
                        >
                            <div
                                onClick={() => handleClick(club.id, club)}
                                className="cursor-pointer block transform transition duration-200 ease-in-out hover:scale-110"
                            >
                                <img
                                    src={club.crest}
                                    alt={club.name}
                                    height={60}
                                    width={60}
                                    className="object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="custom-prev cursor-pointer absolute top-1/2 z-20 -translate-y-1/3  -translate-x-1/3 bg-black/60 text-white p-2 rounded-full hover:bg-black transition">
                        <ChevronLeft className="w-5 h-5 text-[#ffff]" />
                    </div>
                    <div className="custom-next cursor-pointer absolute -right-1 top-1/2 z-20 -translate-y-1/2  bg-black/60 text-white p-2 rounded-full hover:bg-black transition">
                        <ChevronRight className="w-5 h-5 text-[#ffff]" />
                    </div>
                </Swiper>
            ) : (
                <>
                    <div className="hidden sm:flex gap-4">
                        {data?.clubs.map((club: Club) => (
                            <div
                                key={club.id}
                                onClick={() => handleClick(club.id, club)}
                                className="cursor-pointer transform transition duration-200 ease-in-out hover:scale-110"
                            >
                                <img
                                    src={club.crest}
                                    alt={club.name}
                                    height={100}
                                    width={100}
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex sm:hidden">
                        <Swiper
                            spaceBetween={16}
                            slidesPerView={8}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            loop={data?.clubs.length > 20}
                            speed={600}
                            modules={[Autoplay]}
                        >
                            {data?.clubs.map((club: Club) => (
                                <SwiperSlide key={club.id}>
                                    <div
                                        onClick={() => handleClick(club.id, club)}
                                        className="cursor-pointer transform transition duration-200 ease-in-out hover:scale-110"
                                    >
                                        <img
                                            src={club.crest}
                                            alt={club.name}
                                            height={50}
                                            width={50}
                                            className="object-cover"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </>
            )}
        </div>
    );
}

export default ClubSite