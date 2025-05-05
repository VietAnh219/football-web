import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ClubSlider from "../layout/ClubHome/ClubSlider";
import ShoppingSlider from "../layout/ShoppingHome/ShoppingSlider";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Club } from '@/types/club';

const SliderHome = ({
    title,
    icon,
    clubs,
}: {
    title: string;
    icon: string;
    clubs: Club[];
}) => {
    return (
        <div className="w-full my-12">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                    <span>{icon}</span>
                    <h2 className="font-semibold text-xl">{title}</h2>
                </div>
            </div>

            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev"
                }}
                spaceBetween={24}
                slidesPerView={'auto'}
                freeMode={true}
            >
                {clubs.map((club) => (
                    <SwiperSlide
                        key={club.id}
                        style={{ width: title === 'Follow Club' ? '124px' : '240px' }}
                    >
                        {title === 'Follow Club' ? (
                            <ClubSlider club={club} />
                        ) : (
                            <ShoppingSlider club={club} />
                        )}
                    </SwiperSlide>
                ))}
                <div className="custom-prev cursor-pointer absolute top-1/2 z-20 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black transition">
                    <ChevronLeft className="w-5 h-5 text-white" />
                </div>

                <div className="custom-next cursor-pointer absolute -right-1 top-1/2 z-20 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black transition">
                    <ChevronRight className="w-5 h-5 text-white" />
                </div>
            </Swiper>
        </div>
    );
};

export default SliderHome;
