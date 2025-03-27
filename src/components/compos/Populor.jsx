import React from "react";
// icons
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PopulorWatch } from "../Data/WatchData";

const Populor = () => {
  return (
    <div className=" mt-[25px] w-[97%] m-auto">
      <h1 className=" font-nunito md:text-[35px] text-[25px] dark:text-black font-bold text-white">
        TOP CARS
      </h1>
      <div className="mt-[7px] mb-[30px] grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-[10px] ">
        {/* Products */}

        {/* rolex */}
        {PopulorWatch.map((watch) => {
          return (
            <Link key={watch.id} to={watch.link}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 1.5 }}
                className=" flex justify-between items-center border-[#191919] dark:bg-white bg-[#323232] overflow-hidden relative rounded-[20px] border-[3px] border-solid px-[13px]  py-[15px]"
              >
                {/* text */}
                <div className=" flex flex-col justify-between gap-[23px] ">
                  {/* logo */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ease: "easeOut", // Easing funksiyasi
                      duration: 1, // Animatsiya davomiyligi
                      delay: 0.1,
                    }}
                    className=" flex gap-[10px] items-center "
                  >
                    <img
                      src={watch.logo}
                      alt="logo-brend"
                      className={` ${watch.logoWidth} ${watch.logoColor} ${watch.logoPa} bg-black rounded-[50%] object-cover w-[50px] `}
                    />
                  </motion.div>
                  {/* title */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ease: "easeOut", // Easing funksiyasi
                      duration: 1, // Animatsiya davomiyligi
                      delay: 0.2,
                    }}
                  >
                    <h1 className="text-[20px] leading-6 uppercase font-bold font-nunito ">
                      {watch.brend}
                    </h1>
                    <h1 className=" text-[16px]">{watch.rafcode}</h1>
                  </motion.div>
                  {/* price */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ease: "easeOut", // Easing funksiyasi
                      duration: 1, // Animatsiya davomiyligi
                      delay: 0.3,
                    }}
                  >
                    <h1 className="font-kanit text-[17px] leading-3 opacity-70 line-through ">
                      {watch.demoPrice}$
                    </h1>
                    <h1 className="font-kanit text-[27px]">{watch.price}$</h1>
                  </motion.div>
                </div>
                {/* img */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    ease: "easeOut", // Easing funksiyasi
                    duration: 1, // Animatsiya davomiyligi
                    delay: 0.2,
                  }}
                  className={`absolute ${watch.right} `}
                >
                  <img
                    src={watch.mainImage}
                    alt="image-product-watch"
                    className=" h-[180px]"
                  />
                </motion.div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Populor;
