import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { stadingBanner } from "@/constants";

const StadingSlide = () => {
    return (
        <div className="w-full h-[420px] sm:h-[500px]">
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 80,
                    modifier: 2,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper h-full"
            >
                {stadingBanner.map((movie) => (
                    <SwiperSlide
                        key={movie.title}
                        className="rounded-xl bg-cover bg-center relative"
                        style={{
                            backgroundImage: `url(${movie.image})`,
                            width: "85vw",
                            maxWidth: "530px",
                            height: "380px",
                        }}
                    >
                        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 text-white rounded-b-xl">
                            <h3 className="text-lg font-bold text-[#facc15] drop-shadow-md">{movie.title}</h3>
                            <p className="text-sm opacity-80 drop-shadow-md">{movie.desc}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default StadingSlide