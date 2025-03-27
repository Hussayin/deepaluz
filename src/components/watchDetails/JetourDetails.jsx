import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { DetailContext } from "../context/DetailContext";
import { FaChevronLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { TelegramContext } from "../context/TelegramContext";
import { useNavigate } from "react-router-dom";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsBatteryCharging, BsTelegram } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Stilni import qilish
import { BasketContext } from "../context/BasketContext";
import { FaAngleDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";

//* icons
// import { BsBatteryCharging } from "react-icons/bs";
import { GiSpeedometer } from "react-icons/gi";
import { BsFuelPumpFill } from "react-icons/bs";
import { LuBaggageClaim } from "react-icons/lu";
import { GiBatteryPackAlt } from "react-icons/gi";
import { TbEngine } from "react-icons/tb";
import { TbAutomaticGearbox } from "react-icons/tb";

const JetourDetails = () => {
  const { products } = useContext(DetailContext);
  const { id } = useParams();
  const { sendToTelegram } = useContext(TelegramContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  // Active image state
  const [activeImage, setActiveImage] = useState("");

  const { addToCart } = useContext(BasketContext);
  // basket
  const handleAdd = () => {
    addToCart(product, product.id);
    toast.success("✅ Savatga joylandi!", {
      position: "top-center",
      autoClose: 2000, // 2 soniyada o'chadi
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "dark",
    });
  };

  //! telegram send
  const handleProductClick = (product) => {
    sendToTelegram(product); // Telegramga yuborish
    navigate(product.link); // Sahifani yangilamasdan navigatsiya
  };

  const [product, setProduct] = useState(null);
  useEffect(() => {
    if (products?.length) {
      const foundProduct = products.find(
        (item) => item.brend === "JETOUR" && String(item.id) === String(id)
      );
      setProduct(foundProduct || null);
    }
  }, [products, id]);

  // On component load, set initial active image
  useEffect(() => {
    if (product) {
      setActiveImage(product.Img); // Default to the first image
    }
  }, [product]);

  if (!product) {
    return (
      <div className=" flex justify-center items-center text-center h-[100%] w-[100%] ">
        Mahsulot topilmadi!
      </div>
    );
  }

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className=" mb-[90px] overflow-x-hidden relative ">
      <div className="fixed w-[100%] top-0 z-[10000000] dark:bg-white dark:border-black bg-[#323232] border-[#cecccc85] border-solid border-b-[1px] p-[15px] px-[20px]">
        <Link to="/jetour">
          <h1 className="flex items-center gap-[2px] font-bold font-nunito text-[17px]">
            <FaChevronLeft className="text-[25px]  " /> назад
          </h1>
        </Link>
      </div>

      {/*//! button buy */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeOut", // Easing funksiyasi
          duration: 0.5, // Animatsiya davomiyligi
          delay: 0.1,
        }}
        className=" fixed gap-[20px] px-[20px] py-[10px] dark:bg-white bg-[#323232]  z-[10000000000] bottom-0 w-[100%] flex justify-between items-center border-t-[2px] rounded-t-[20px] border-white dark:border-t-white p-[5px] "
      >
        {/* buttons */}
        <a
          href="https://t.me/Bekhruz777"
          target="_blank"
          className=" text-[18px] p-[5px] border-[2px] bg-green-600 rounded-[10px] border-black w-[100%] text-center "
        >
          Kупить
        </a>
        <div>
          <a
            target="_blank"
            href="https://www.instagram.com/the_watch_outlet_uz"
            className=" text-[30px]  "
          >
            <FaInstagram />
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://t.me/TheWatchOutlet"
            className=" text-[30px]"
          >
            <FaTelegram />
          </a>
        </div>
      </motion.div>

      {/* //! Product details */}
      <div className="mt-[40px] dark:bg-white bg-[#323232] py-[30px] gap-[17px] h-[86vh] justify-between dark:border-black border-white border-b-[3px] overflow-hidden relative rounded-b-[50px] border-solid md:p-[50px] p-[15px] flex flex-col">
        <div className=" flex flex-col gap-[20px]">
          {/* Logo */}
          <div className="flex gap-[5px] justify-between items-center">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1.5 }}
              src={product.logo}
              alt="logo-brend"
              className="rounded-lg bg-white w-[50px] text-center object-cover"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1.5 }}
              className=" flex flex-col gap-[10px] "
            >
              <button onClick={handleAdd} className="text-[33px] pr-[10px] ">
                <MdAddShoppingCart />
              </button>
            </motion.div>
          </div>

          {/* Name and model */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            className=" leading-6 mt-[10px] flex flex-col gap-[8px] "
          >
            <h1 className=" text-[27px] font-nunito font-bold ">
              BYD HAN GREEN 5G
            </h1>
            <h1 className=" text-[25px] font-nunito ">Full electro</h1>
            <h1 className=" font-nunito">Model: 2025</h1>
            <h1 className=" text-[35px]">
              <BsBatteryCharging />
            </h1>
          </motion.div>
        </div>

        {/* Images */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: "easeOut", // Easing funksiyasi
            duration: 1, // Animatsiya davomiyligi
            delay: 0.2,
          }}
          className=" absolute bottom-[130px] -right-[260px] h-auto "
        >
          {/* Main image */}
          <img src={product.mainImage} alt="" className=" h-[260px] " />
        </motion.div>

        {/* Price */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5, delay: 0.2 }}
          className="flex justify-between items-center"
        >
          <div>
            <h1 className="line-through opacity-55 leading-5 text-[20px]">
              {product.demoPrice}$
            </h1>
            <h1 className="font-nunito text-[35px]">{product.price}$</h1>
          </div>
        </motion.div>
      </div>

      {/*//! product colors */}
      <div className=" py-[20px] relative2 mt-[40px] rounded-[50px] border-white border-y-[2px] bg-[#323232] overflow-hidden">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          className=" text-center text-[23px] font-kanit "
        >
          Mashinaning mavjud ranglari
        </motion.h1>
        {/* img */}
        <div className="flex py-[20px] mt-[40px] my-[20px] flex-col gap-[50px] justify-center items-center w-[100%]">
          {/* Main image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: "easeOut", // Easing funksiyasi
              duration: 1, // Animatsiya davomiyligi
              delay: 0.2,
            }}
          >
            <motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                ease: "easeOut", // Easing funksiyasi
                duration: 1, // Animatsiya davomiyligi
                delay: 0.2,
              }}
              src={activeImage}
              alt="Active watch"
              className="h-auto w-[400px]  "
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            className={`  ${
              product.col2 ? "grid-cols-2" : "grid-cols-5"
            } flex gap-[10px] flex-wrap justify-center `}
          >
            {[
              product.Img,
              product.Img2,
              product.Img3,
              product.Img4,
              product.Img5,
              product.Img6,
              product.Img7,
              product.Img8,
              product.Img9,
              product.Img10,
            ].map(
              (img, index) =>
                img && (
                  <img
                    key={index}
                    src={img}
                    alt={`Watch ${index + 1}`}
                    className={`md:h-[100px] md:w-auto w-[100px] object-contain h-[50px] border-2 ${
                      activeImage === img
                        ? "border-gray-500 p-[3px]  rounded-lg "
                        : "border-transparent"
                    }`}
                    onClick={() => setActiveImage(img)}
                  />
                )
            )}
          </motion.div>
        </div>
      </div>

      {/*//! Product infos */}
      <div className="mt-[40px] mb-[40px] pb-[40px] py-[25px] dark:bg-white bg-[#323232] rounded-[50px] border-y-[2px]  border-white  ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          className="flex justify-center items-center pb-[10px] "
        >
          <img src={product.mainImage} alt="" className="h-[90px]" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          className="text-center font-nunito text-[25px]"
        >
          Mashinaning malumotlar
        </motion.h1>
        {/* infos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
          className=" mt-[40px] grid md:grid-cols-4 grid-cols-2 place-items-center gap-[20px] place-content-between "
        >
          {/*  */}
          <div className=" flex items-center gap-[7px] ">
            <div>
              <h1 className=" text-[45px]">
                <GiSpeedometer />
              </h1>
            </div>
            <div>
              <h1 className=" opacity-75 text-[13px]">0-100 km/s</h1>
              <h1 className=" p-[0] leading-3 text-[20px]">4s</h1>
            </div>
          </div>
          {/*  */}
          <div className=" flex items-center gap-[7px] ">
            <div>
              <h1 className=" text-[35px]">
                <BsFuelPumpFill />
              </h1>
            </div>
            <div>
              <h1 className=" opacity-75 text-[13px]">Yoqilg'i sarfi</h1>
              <h1 className=" p-[0] leading-3 text-[20px]">90L</h1>
            </div>
          </div>
          {/*  */}
          <div className=" w-[120px] flex items-center  gap-[7px] ">
            <div>
              <h1 className=" text-[45px]">
                <GiSpeedometer />
              </h1>
            </div>
            <div>
              <h1 className=" opacity-75 text-[13px]">ot kuchi</h1>
              <h1 className=" p-[0] leading-4 text-[20px]">5000</h1>
            </div>
          </div>
          {/*  */}
          <div className=" flex items-center gap-[7px] ">
            <div>
              <h1 className=" text-[40px]">
                <LuBaggageClaim />
              </h1>
            </div>
            <div>
              <h1 className=" opacity-75 text-[13px]">Yukxona hajmi</h1>
              <h1 className=" p-[0] leading-4 text-[18px]">100L</h1>
            </div>
          </div>
          {/*  */}
          <div className="w-[120px] flex items-center gap-[7px] ">
            <div>
              <h1 className=" text-[40px]">
                <GiBatteryPackAlt />
              </h1>
            </div>
            <div>
              <h1 className=" opacity-75 text-[13px]">Quvvati</h1>
              <h1 className=" p-[0] leading-3 text-[20px]">500</h1>
            </div>
          </div>
          {/*  */}
          <div className=" flex items-center gap-[7px] ">
            <div>
              <h1 className=" text-[45px]">
                <TbEngine />
              </h1>
            </div>
            <div>
              <h1 className=" opacity-75 text-[13px]">Dvigitel turi</h1>
              <h1 className=" p-[0] leading-4 text-[20px]">3.3</h1>
            </div>
          </div>
          {/*  */}
          <div className=" flex items-center gap-[7px] ">
            <div>
              <h1 className=" text-[45px]">
                <TbAutomaticGearbox />
              </h1>
            </div>
            <div>
              <h1 className=" opacity-75 text-[13px]">0-100 km/s</h1>
              <h1 className=" p-[0] leading-4 text-[20px]">19</h1>
            </div>
          </div>
          {/*  */}
          <div className=" flex items-center gap-[7px] ">
            <div>
              <h1 className=" text-[45px]">
                <GiSpeedometer />
              </h1>
            </div>
            <div>
              <h1 className=" opacity-75 text-[13px]">0-100 km/s</h1>
              <h1 className=" p-[0] leading-3 text-[20px]">7</h1>
            </div>
          </div>
          {/*  */}
          <div className=" flex items-center gap-[7px] ">
            <div>
              <h1 className=" text-[45px]">
                <GiSpeedometer />
              </h1>
            </div>
            <div>
              <h1 className=" opacity-75 text-[13px]">0-100 km/s</h1>
              <h1 className=" p-[0] leading-3 text-[20px]">5s</h1>
            </div>
          </div>
          {/*  */}
          <div className=" flex items-center gap-[7px] ">
            <div>
              <h1 className=" text-[45px]">
                <GiSpeedometer />
              </h1>
            </div>
            <div>
              <h1 className=" opacity-75 text-[13px]">0-100 km/s</h1>
              <h1 className=" p-[0] leading-3 text-[20px]">5s</h1>
            </div>
          </div>
        </motion.div>
        {/*  */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
          className=" mt-[35px] text-center leading-5 grid grid-cols-2 gap-[15px]"
        >
          <div>
            <h1 className=" font-bold text-[20px] font-nunito ">Kengligi:</h1>
            <h1 className=" text-[15px]">2.2</h1>
          </div>
          <div>
            <h1 className=" font-bold text-[20px] font-nunito">Uzunligi:</h1>
            <h1>3.5</h1>
          </div>
          <div>
            <h1 className=" font-bold text-[20px] font-nunito ">Balandligi:</h1>
            <h1>1.7</h1>
          </div>
          <div>
            <h1 className=" font-bold text-[20px] font-nunito ">
              Balo'n o'lchami:
            </h1>
            <h1>5.5</h1>
          </div>
        </motion.div>
      </div>

      {/*//! wiev 360 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
        onClick={() => setOpen(true)}
        className="py-[20px] px-[15px] border-y-[2px] border-solid border-white bg-[#323232] rounded-[50px] "
      >
        <h1 className=" text-center font-nunito leading-6 text-[22px]">
          360° aylanada ichki qisimni kuzatish
        </h1>
        <div className=" relative mt-[20px] flex justify-center items-center ">
          <img
            src="https://bydauto.uz/media/1678467749_772.webp"
            alt=""
            className="rounded-[40px]"
          />
          <img
            src="https://static.tildacdn.one/tild6163-6331-4138-a138-653439646561/343444.png"
            alt=""
            className=" absolute bottom-[60px] h-[100px] "
          />
        </div>
      </motion.div>
      {/*//! 360 view */}
      {open && (
        <div className="bg-black flex justify-center items-center w-[100%] h-[100vh] fixed top-0 z-[10000000000000]">
          <h1 className=" absolute ">Iltmos kutib turing</h1>
          <div
            onClick={() => setOpen(false)}
            className=" uppercase z-[10000] absolute top-[10px] text-[20px] font-nunito bg-red-600 py-[10px] px-[30px] rounded-lg "
          >
            <h1>Orqaga</h1>
          </div>
          <iframe
            src={product.link360}
            className=" w-[100%] z-[1000] h-[100%] "
          ></iframe>
        </div>
      )}

      {/*//! Car Types */}
      <div className="py-[20px] mt-[40px] px-[15px] border-y-[2px] border-solid border-white bg-[#323232] rounded-[50px]">
        <h1 className=" text-center text-[22px] font-nunito ">
          BYD HON Turlari
        </h1>
        <div className="accordion flex justify-center items-center flex-col gap-[20px] mt-[15px] mb-[15px] ">
          {/* item */}
          {product.typeData.map((item, i) => (
            <div
              key={item.id}
              onClick={() => toggle(i)}
              className=" itemm bg-[#2a2828] rounded-xl "
            >
              <div className="title py-[15px]  rounded-xl px-[15px] bg-[#202020] flex justify-between items-center ">
                <h1 className=" font-nunito text-[20px]">{item.title}</h1>
                <h1>{selected === i ? <FaAngleDown /> : <FaChevronUp />}</h1>
              </div>
              <div
                className={`overflow-hidden  max-h-0 ${
                  selected === i ? "content show p-[10px] " : "content"
                } `}
              >
                <div className="py-[10px] pb-[15px] ">
                  <motion.img
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ease: "easeOut", // Easing funksiyasi
                      duration: 1, // Animatsiya davomiyligi
                      delay: 0.2,
                    }}
                    src={item.typeImg}
                    alt={item.title}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                    className=" mt-[40px] grid md:grid-cols-4 grid-cols-2 place-items-center gap-[20px] place-content-between "
                  >
                    {/*  */}
                    <div className=" flex items-center gap-[7px] ">
                      <div>
                        <h1 className=" text-[45px]">
                          <GiSpeedometer />
                        </h1>
                      </div>
                      <div>
                        <h1 className=" opacity-75 text-[13px]">0-100 km/s</h1>
                        <h1 className=" p-[0] leading-3 text-[20px]">4s</h1>
                      </div>
                    </div>
                    {/*  */}
                    <div className=" flex items-center gap-[7px] ">
                      <div>
                        <h1 className=" text-[35px]">
                          <BsFuelPumpFill />
                        </h1>
                      </div>
                      <div>
                        <h1 className=" opacity-75 text-[13px]">
                          Yoqilg'i sarfi
                        </h1>
                        <h1 className=" p-[0] leading-3 text-[20px]">90L</h1>
                      </div>
                    </div>
                    {/*  */}
                    <div className=" w-[120px] flex items-center  gap-[7px] ">
                      <div>
                        <h1 className=" text-[45px]">
                          <GiSpeedometer />
                        </h1>
                      </div>
                      <div>
                        <h1 className=" opacity-75 text-[13px]">ot kuchi</h1>
                        <h1 className=" p-[0] leading-4 text-[20px]">5000</h1>
                      </div>
                    </div>
                    {/*  */}
                    <div className=" flex items-center gap-[7px] ">
                      <div>
                        <h1 className=" text-[40px]">
                          <LuBaggageClaim />
                        </h1>
                      </div>
                      <div>
                        <h1 className=" opacity-75 text-[13px]">
                          Yukxona hajmi
                        </h1>
                        <h1 className=" p-[0] leading-4 text-[18px]">100L</h1>
                      </div>
                    </div>
                    {/*  */}
                    <div className="w-[120px] flex items-center gap-[7px] ">
                      <div>
                        <h1 className=" text-[40px]">
                          <GiBatteryPackAlt />
                        </h1>
                      </div>
                      <div>
                        <h1 className=" opacity-75 text-[13px]">Quvvati</h1>
                        <h1 className=" p-[0] leading-3 text-[20px]">500</h1>
                      </div>
                    </div>
                    {/*  */}
                    <div className=" flex items-center gap-[7px] ">
                      <div>
                        <h1 className=" text-[45px]">
                          <TbEngine />
                        </h1>
                      </div>
                      <div>
                        <h1 className=" opacity-75 text-[13px]">
                          Dvigitel turi
                        </h1>
                        <h1 className=" p-[0] leading-4 text-[20px]">3.3</h1>
                      </div>
                    </div>
                    {/*  */}
                    <div className=" flex items-center gap-[7px] ">
                      <div>
                        <h1 className=" text-[45px]">
                          <TbAutomaticGearbox />
                        </h1>
                      </div>
                      <div>
                        <h1 className=" opacity-75 text-[13px]">0-100 km/s</h1>
                        <h1 className=" p-[0] leading-4 text-[20px]">19</h1>
                      </div>
                    </div>
                    {/*  */}
                    <div className=" flex items-center gap-[7px] ">
                      <div>
                        <h1 className=" text-[45px]">
                          <GiSpeedometer />
                        </h1>
                      </div>
                      <div>
                        <h1 className=" opacity-75 text-[13px]">0-100 km/s</h1>
                        <h1 className=" p-[0] leading-3 text-[20px]">7</h1>
                      </div>
                    </div>
                    {/*  */}
                    <div className=" flex items-center gap-[7px] ">
                      <div>
                        <h1 className=" text-[45px]">
                          <GiSpeedometer />
                        </h1>
                      </div>
                      <div>
                        <h1 className=" opacity-75 text-[13px]">0-100 km/s</h1>
                        <h1 className=" p-[0] leading-3 text-[20px]">5s</h1>
                      </div>
                    </div>
                    {/*  */}
                    <div className=" flex items-center gap-[7px] ">
                      <div>
                        <h1 className=" text-[45px]">
                          <GiSpeedometer />
                        </h1>
                      </div>
                      <div>
                        <h1 className=" opacity-75 text-[13px]">0-100 km/s</h1>
                        <h1 className=" p-[0] leading-3 text-[20px]">5s</h1>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*//! Images */}
      <div className="mt-[40px] py-[20px] px-[15px] border-y-[2px] border-solid border-white rounded-[50px] ">
        <h1 className=" text-[25px] pb-[20px] font-nunito text-center ">
          Tashqi ko'rinish
        </h1>
        <div className=" grid grid-cols-1 gap-[20px] md:grid-cols-2">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
            src={product.img1}
            alt=""
            className=" rounded-[50px] object-cover h-[250px] w-[100%] "
          />

          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
            src={product.img2}
            alt=""
            className=" rounded-[50px] object-cover h-[250px] w-[100%] "
          />

          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
            src={product.img3}
            alt=""
            className=" rounded-[50px] object-cover h-[250px] w-[100%] "
          />

          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
            src={product.img4}
            alt=""
            className=" rounded-[50px] object-cover h-[250px] w-[100%] "
          />

          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
            src={product.img5}
            alt=""
            className=" rounded-[50px] object-cover h-[250px] w-[100%] "
          />

          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
            src={product.img6}
            alt=""
            className=" rounded-[50px] object-cover h-[250px] w-[100%] "
          />

          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
            src={product.img7}
            alt=""
            className=" rounded-[50px] object-cover h-[250px] w-[100%] "
          />
        </div>
      </div>
    </div>
  );
};

export default JetourDetails;
