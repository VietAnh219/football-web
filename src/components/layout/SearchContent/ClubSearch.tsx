import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ClubSlider from '../ClubHome/ClubSlider';
import { Club } from '@/types/club';


const ClubSearch = ({ filteredClubs }: { filteredClubs: Club[] }) => {
    return (
        <div className='w-full'>
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
                {filteredClubs.map((club) => (
                    <SwiperSlide
                        key={club.id}
                        style={{ width: '124px' }}
                    >
                        <ClubSlider club={club} />
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
    )
}

export default ClubSearch