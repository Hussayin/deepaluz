import { BrowserRouter, Route, Routes } from "react-router-dom";
//* compos
import Enter from "./Enter";
import InstallPrompt from "./InstallModal";
// import ScrollManager from "./ScrollManager";
import Basket from "./Basket";
import { ToastContainer } from "react-toastify"; // Toastni qo'shamiz
import "react-toastify/dist/ReactToastify.css"; // Toast stilini import qilamiz
import Hamilton from "../watchs/Hamilton";
import HamiltonDetails from "../watchDetails/HamiltonDetails";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        {/* <HelmetProvider> */}
        {/* <ScrollManager /> */}
        <InstallPrompt />
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Enter />} />
          {/* basket */}
          <Route path="/basket" element={<Basket />} />
          {/* hamilton */}
          <Route path="/hamilton" element={<Hamilton />} />
          <Route path="/hamilton/:id" element={<HamiltonDetails />} />
        </Routes>
        {/* </HelmetProvider> */}
      </BrowserRouter>
      {/* Toastlarni chiqarish uchun kerak */}
      <ToastContainer className="my-toast" />
    </div>
  );
};

export default App;
