import { News } from "@/types/news";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
} from "./dialog";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { formatUTCDate } from "../utils/formatUTCDate";

const Newpaper = ({ newspaper }: { newspaper: News[] }) => {

    return (
        <>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={20}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev"
                }}
                modules={[Navigation]}
                className="news-sites-swiper"
            >
                {newspaper.map((item, index) => (
                    <SwiperSlide
                        key={index} style={{ width: "250px" }}
                        className="top-[10px]"
                    >
                        <Dialog>
                            <DialogTrigger asChild>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="cursor-pointer text-left border-1 h-[300px] rounded-md border-[#e1dfdf]"
                                >
                                    <div>
                                        <img src={item.img} alt="news" className="w-full h-[140px] object-cover rounded-t-md" />
                                    </div>
                                    <div className="ml-2">
                                        <h1 className="uppercase text-[#5742A9] text-[12px] font-semibold py-4 dark:text-[#F5C451]">
                                            {item.league}
                                        </h1>
                                        <p className="pb-2 font-medium text-[14px] dark:text-white">
                                            {item.title}
                                        </p>
                                        <p className="truncate text-[14px] dark:text-[#A4A4A4]">{item.desc}</p>
                                    </div>
                                </motion.div>
                            </DialogTrigger>
                            <DialogContent className="!max-w-[600px] p-8" aria-describedby={undefined}>
                                <div className="w-full rounded-2xl overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt="news"
                                        className="w-full h-auto max-h-[350px] object-cover object-center"
                                    />
                                </div>
                                <div>
                                    <DialogTitle className="text-xl">{item.title}</DialogTitle>
                                    <DialogDescription className="mt-2">
                                        {item.desc}
                                    </DialogDescription>
                                </div>
                                <DialogFooter className="lg:justify-between">
                                    <div>Author: <span className="text-red-600">{item.author}</span></div>
                                    <div>Date: {formatUTCDate(item.date)}</div>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </SwiperSlide>
                ))}
                <div className="custom-prev cursor-pointer absolute top-1/2 z-20 -translate-y-1/3  -translate-x-1/3 bg-black/60 text-white p-2 rounded-full hover:bg-black transition">
                    <ChevronLeft className="w-5 h-5 text-[#fff]" />
                </div>
                <div className="custom-next cursor-pointer absolute -right-1 top-1/2 z-20 -translate-y-1/2  bg-black/60 text-white p-2 rounded-full hover:bg-black transition">
                    <ChevronRight className="w-5 h-5 text-[#fff]" />
                </div>
            </Swiper>
        </>
    );
};

export default Newpaper;