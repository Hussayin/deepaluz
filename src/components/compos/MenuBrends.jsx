import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { watchBrends } from "../Data/WatchData";
const MenuBrends = () => {
  return (
    <Swiper
      // spaceBetween={5}
      slidesPerView={3.7}
      //   onSlideChange={() => console.log("Slide Change")}
      //   onSwiper={(swiper) => console.log(swiper)}
      className=" md:hidden block pb-[7px]  mx-[3px] font-kanit dark:bg-white bg-[#323232] border-[#1c1c1c] border-[2px]  mt-[7px] rounded-2xl px-[3px] py-[7px] "
    >
      {watchBrends.map((brend) => {
        return (
          <SwiperSlide key={brend.id}>
            <Link
              to={brend.link}
              className=" flex flex-col justify-center items-center gap-[2px] "
            >
              <img
                src={brend.image}
                alt={brend.title}
                className=" border-solid rounded-[50%] h-[75px] w-[75px] text-center dark:bg-white bg-[black] border-[#232323] border-[3px] object-contain "
              />
              <h1 className=" font-nunito font-bold text-[13px]">
                {brend.title}
              </h1>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MenuBrends;
