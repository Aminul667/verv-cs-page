import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
// import Home from "./components/Home/Home";

import Navbar from "./components/Navbar/Navbar";
import "./index.css";
function App() {
  return (
    <>
      <div className="bg-white text-black font-inter">
        <div className="h-[80px] w-full flex items-center bg-white">
          <Navbar />
        </div>
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
