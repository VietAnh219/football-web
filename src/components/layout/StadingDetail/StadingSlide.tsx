import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { stadingBanner } from "@/constants";

const StadingSlide = () => {
    return (
        <div className="w-full h-[500px]">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper h-full"
            >
                {stadingBanner.map((movie) => (
                    <SwiperSlide
                        key={movie.title}
                        className="rounded-xl w-full h-full object-cover bg-center relative"
                        style={{ backgroundImage: `url(${movie.image})`, width: "530px", height: "400px" }}
                    >
                        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white rounded-b-xl">
                            <h3 className="text-lg font-bold drop-shadow-md text-[#facc15]">{movie.title}</h3>
                            <p className="text-sm opacity-80 drop-shadow-md">{movie.desc}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default StadingSlide