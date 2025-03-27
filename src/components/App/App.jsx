import { BrowserRouter, Route, Routes } from "react-router-dom";
//* compos
import Enter from "./Enter";
import InstallPrompt from "./InstallModal";
// import ScrollManager from "./ScrollManager";
import Basket from "./Basket";
import { ToastContainer } from "react-toastify"; // Toastni qo'shamiz
import "react-toastify/dist/ReactToastify.css"; // Toast stilini import qilamiz
import BydCars from "../watchs/Byd";
import ScrollManager from "./ScrollManager";
import BydDetails from "../watchDetails/BydDetailes";
import LixingDetails from "../watchDetails/LixingDetails";
import Lixing from "../watchs/Lixing";
import Hongqi from "../watchs/Hongqi";
import Bmw from "../watchs/Bmw";
import BmwDetails from "../watchDetails/BmwDetails";
import HongqiDetails from "../watchDetails/HongqiDetail";
import DeepalCars from "../watchs/Deepal";
import DeepalDetails from "../watchDetails/DeepalDetails";
import Jetour from "../watchs/Jetour";
import JetourDetails from "../watchDetails/JetourDetails";
import LipmotorsCars from "../watchs/Lipmotors";
import LipmotorsDetails from "../watchDetails/LipmotorsDetails";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        {/* <HelmetProvider> */}
        <ScrollManager />
        <InstallPrompt />
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Enter />} />
          {/* basket */}
          <Route path="/basket" element={<Basket />} />
          {/* BYD */}
          <Route path="/byd" element={<BydCars />} />
          <Route path="/byd/:id" element={<BydDetails />} />
          {/* Lixing */}
          <Route path="/lixing" element={<Lixing />} />
          <Route path="/lixing/:id" element={<LixingDetails />} />
          {/* Hongqi */}
          <Route path="/hongqi" element={<Hongqi />} />
          <Route path="/hongqi/:id" element={<HongqiDetails />} />
          {/* BMW */}
          <Route path="/bmw" element={<Bmw />} />
          <Route path="/bmw/:id" element={<BmwDetails />} />
          {/* DEEPAL */}
          <Route path="/deepal" element={<DeepalCars />} />
          <Route path="/deepal/:id" element={<DeepalDetails />} />
          {/* Jetour */}
          <Route path="/jetour" element={<Jetour />} />
          <Route path="/jetour/:id" element={<JetourDetails />} />
          {/* Liepmotors */}
          <Route path="/lipmotors" element={<LipmotorsCars />} />
          <Route path="/lipmotors/:id" element={<LipmotorsDetails />} />
        </Routes>
        {/* </HelmetProvider> */}
      </BrowserRouter>
      {/* Toastlarni chiqarish uchun kerak */}
      <ToastContainer className="my-toast" />
    </div>
  );
};

export default App;
