import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
// import Home from "./components/Home/Home";

import Navbar from "./components/Navbar/Navbar";
import "./index.css";
function App() {
  return (
    <>
      <div className="bg-white text-black font-inter">
        <div className="h-[80px] w-full flex items-center bg-white shadow-md shadow-gray-300 sticky top-0 z-10 backdrop-filter backdrop-blur-3xl bg-opacity-10">
          <Navbar />
        </div>

        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
