import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useHighLightStore } from "@/store/useHighLightStore";

interface Highlight {
    id: string,
    title: string,
    thumbnail: string,
    time: string,
    link: string
}

const HighlightSlider = ({ highlight, topic }: { highlight: Highlight[]; topic: string }) => {
    const setHighLight = useHighLightStore((state) => state.setSelectedHighLight);
    const navigate = useNavigate();

    const handleClick = (item: Highlight) => {
        setHighLight(item);
        navigate(`/highlights/${item.id}`);
    }

    return (
        <div className="py-3">
            <h1 className="font-semibold text-xl dark:text-white">{topic}</h1>
            <div className="w-full h-[150px] my-3">
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev"
                    }}
                    spaceBetween={16}
                    slidesPerView={"auto"}
                    className="highlights-sites-swiper"
                >
                    {highlight.map((item) => (
                        <SwiperSlide
                            key={item.id}
                            style={{ width: "270px", height: "200px" }}
                            className="top-[10px]"
                        >
                            <div onClick={() => handleClick(item)}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="relative w-[270px] h-[150px] cursor-pointer"
                                >
                                    <img src={item.thumbnail} alt="highlight" className="rounded-xl w-full h-full object-cover" />
                                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-2 rounded-b-xl">
                                        <span className="absolute bottom-2 right-2 text-white text-xs bg-black/60 px-1 rounded">{item.time}</span>
                                    </div>
                                    <p className="line-clamp-2 text-sm dark:text-white">{item.title}</p>
                                </motion.div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="custom-prev cursor-pointer absolute left-1 top-22 z-20 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black transition">
                        <ChevronLeft className="w-5 h-5 text-white" />
                    </div>

                    <div className="custom-next cursor-pointer absolute -right-1 top-22 z-20 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black transition">
                        <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                </Swiper>
            </div>
        </div>
    )
}

export default HighlightSlider