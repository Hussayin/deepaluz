import React, { useState } from "react";

import { useTheme } from "../context/ThemeContext";

//! icons
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { TbPhoneCall } from "react-icons/tb";
import { motion } from "framer-motion";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdSell } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { location } from "../../assets/Images";

const Navbar = () => {
  const { toggleDarkMode, darkMode } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Navbar */}
      <div className=" z-[10000000000000] sticky  top-0 border-b-[2px] border-solid dark:border-black rounded-b-[15px] bg-[#121212] dark:bg-white  md:text-white dark:text-black flex justify-between py-[20px] items-center w-[100%] border-white px-[25px] md:px-[40px]  m-auto ">
        <div>
          <h1 className=" font-kanit text-[22px] ">Deepal Cars</h1>
        </div>
        {/* laptop */}
        <div className=" md:flex hidden justify-center items-center gap-[65px] ">
          <div className="text-[20px] font-kanit flex justify-center items-center gap-[35px] ">
            <a className=" hover:text-red-500 duration-300 " href="#">
              Home
            </a>
            <a className=" hover:text-red-500 duration-300 " href="#">
              About
            </a>
            <a className=" hover:text-red-500 duration-300 " href="#">
              Servis
            </a>
            <a className=" hover:text-red-500 duration-300 " href="#">
              Contact
            </a>
          </div>
          <div className=" flex justify-center items-center gap-[15px] text-[15px]">
            <button
              onClick={toggleDarkMode}
              className=" p-[5px] border rounded-[50%] text-black dark:text-white bg-white dark:bg-black"
            >
              {darkMode ? (
                <BsFillMoonStarsFill className="text-[22px]" />
              ) : (
                <FaSun className="text-[23px]" />
              )}
            </button>
            <div className=" bg-red-600 dark:text-white py-[7px] px-[15px] rounded-lg md:hover:bg-red-800 cursor-pointer duration-300 flex justify-center items-center gap-[5px] ">
              <TbPhoneCall />
              <h1>Cantact</h1>
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className="md:hidden z-[100] flex justify-center items-center gap-[20px]">
          <button
            onClick={toggleDarkMode}
            className=" p-[5px] border rounded-[50%] text-black dark:text-white bg-white dark:bg-black"
          >
            {darkMode ? (
              <BsFillMoonStarsFill className="text-[22px]" />
            ) : (
              <FaSun className="text-[23px]" />
            )}
          </button>

          <div className="md:hidden z-[100] text-[30px] block">
            {!open && <HiMenuAlt3 onClick={() => setOpen(true)} />}
          </div>
        </div>
        {/*  */}
        {open && (
          <div className=" fixed z-[1000000000000] top-[0px] p-[25px]  bg-[#232323] dark:bg-white  left-0 w-[100%] h-[100%] overflow-scroll m-auto right-0  md:hidden ">
            <div className=" w-[100%] flex justify-center items-center ">
              {open && (
                <IoClose
                  className=" text-center text-[40px] "
                  onClick={() => setOpen(false)}
                />
              )}
            </div>
            {/* Social medi and servise */}
            <div className=" flex justify-center mt-[30px] items-center flex-col gap-[20px]">
              <motion.a
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  ease: "easeOut", // Easing funksiyasi
                  duration: 1, // Animatsiya davomiyligi
                  delay: 0.1,
                }}
                target="_blank"
                href="https://t.me/khusko077"
                className=" flex justify-center flex-col gap-[10px] bg-white w-[100%] text-black dark:text-black dark:border-black font-bold items-center relative border-2 p-[7px] rounded-[15px] text-center font-nunito text-[20px] border-white"
              >
                <img
                  src={location}
                  alt="man img"
                  className=" w-[100%] h-[300px] object-cover rounded-[15px] "
                />
                <h1 className=" font-nunito text-[20px] ">
                  Location: Kiyot 38A, Toshkent
                </h1>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  ease: "easeOut", // Easing funksiyasi
                  duration: 1, // Animatsiya davomiyligi
                  delay: 0.2,
                }}
                target="_blank"
                href="https://t.me/khusko077"
                className=" flex justify-center flex-col gap-[10px] bg-white w-[100%] text-black dark:text-black dark:border-black font-bold items-center relative border-2 p-[7px] rounded-[15px] text-center font-nunito text-[20px] border-white"
              >
                <img
                  src="https://khusko1.netlify.app/mypic.jpg"
                  alt="man img"
                  className=" w-[100%] h-[300px] object-cover rounded-[15px] "
                />
                <h1 className=" font-nunito text-[20px] ">
                  Funder: Husan Bahramov
                </h1>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  ease: "easeOut", // Easing funksiyasi
                  duration: 1, // Animatsiya davomiyligi
                  delay: 0.3,
                }}
                target="_blank"
                href="tel:+998977122206"
                className=" flex justify-center bg-white text-black dark:text-black dark:border-black font-bold items-center relative border-2 p-[7px] rounded-[15px] text-center font-nunito text-[20px] border-white w-[100%] "
              >
                +998 97 712 22 06
                <TbPhoneCall className=" absolute left-[15px] text-[30px]  " />
              </motion.a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
