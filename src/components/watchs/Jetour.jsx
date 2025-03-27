import React, { useState, useContext } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { MdPriceChange } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ProductContext } from "../context/ProductContext";
import { TelegramContext } from "../context/TelegramContext";

const categories = ["All", "HYBRID", "ELECTRO"];

const Jetour = () => {
  const { sendToTelegram } = useContext(TelegramContext);
  const { products, loading } = useContext(ProductContext);

  const [activeCategory, setActiveCategory] = useState("All");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [openFilter, setOpenFilter] = useState(false);

  if (loading) return <div>Ma'lumotlar yuklanmoqda...</div>;
  if (!products || products.length === 0)
    return <div>BYD mashinalari topilmadi.</div>;

  const filteredProducts = products.filter((car) => {
    const productPrice = Number(car.price) || 0;
    return (
      car.brend === "JETOUR" &&
      (activeCategory === "All" ||
        car.categori?.toLowerCase() === activeCategory.toLowerCase()) &&
      productPrice >= minPrice &&
      productPrice <= maxPrice
    );
  });

  const handleProductClick = (product) => {
    sendToTelegram(product);
    setOpenFilter(false);
  };

  return (
    <div>
      <div className="sticky top-0 z-[10000000] flex flex-col gap-[10px] dark:bg-white bg-[#232323] p-[15px] px-[13px] border-[#444343] border-b-[2px]">
        <Link to="/" className="">
          <h1 className="flex items-center gap-[2px] font-bold font-nunito text-[17px]">
            <FaChevronLeft className="text-[28px]" /> назад
          </h1>
        </Link>
      </div>

      <div className="flex gap-[13px] overflow-x-scroll dark:bg-white bg-[#232323] p-[10px] hide-scrollbar border-b-2 border-[#444343]">
        <button
          onClick={() => setOpenFilter(true)}
          className="px-[15px] py-[5px] rounded-full text-sm font-semibold whitespace-nowrap transition-all bg-blue-500"
        >
          <MdPriceChange className="text-[25px]" />
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-[5px] rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
              activeCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {openFilter && (
        <div className="flex items-center gap-4 mt-[10px] w-[95%] m-auto">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice === 0 ? "" : minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value) || 0)}
            className="w-full rounded-[10px] border-[#25365c] border-[2px] px-[5px] py-[7px] text-black"
          />
          <h1>до</h1>
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice === Infinity ? "" : maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value) || Infinity)}
            className="w-full text-black px-[5px] py-[7px] rounded-[10px] border-[#25365c] border-[2px]"
          />
        </div>
      )}

      <div className="mt-[10px] mb-[15px] grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-[10px] w-[97%] m-auto">
        {filteredProducts.map((car) => (
          <div onClick={() => handleProductClick(car)} key={car.id}>
            <Link to={car.id}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 1.5 }}
                className="flex justify-between items-center border-[#191919] dark:bg-white bg-[#323232] overflow-hidden relative rounded-[20px] border-[3px] border-solid px-[13px] py-[15px]"
              >
                <div className="flex flex-col justify-between gap-[23px]">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", duration: 1, delay: 0.1 }}
                    className="flex gap-[10px] items-center"
                  >
                    <img
                      src={car.logo}
                      alt="logo-brend"
                      className={`w-[50px] bg-black rounded-[50%] object-cover`}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", duration: 1, delay: 0.2 }}
                  >
                    <h1 className="text-[20px] leading-6 uppercase font-bold font-nunito">
                      {car.brend}
                    </h1>
                    <h1 className="text-[16px]">{car.rafcode}</h1>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", duration: 1, delay: 0.3 }}
                  >
                    <h1 className="font-kanit text-[17px] leading-3 opacity-70 line-through">
                      {car.demoPrice}$
                    </h1>
                    <h1 className="font-kanit text-[27px]">{car.price}$</h1>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ ease: "easeOut", duration: 1, delay: 0.2 }}
                  className={`absolute ${car.right}`}
                >
                  <img
                    src={car.mainImage}
                    alt="image-product-car"
                    className="h-[180px]"
                  />
                </motion.div>
              </motion.div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jetour;
