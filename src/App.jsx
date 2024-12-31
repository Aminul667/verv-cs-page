import Hero from "./components/Home/Hero";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";

function App() {
  return (
    <>
      <div className="h-screen bg-[#90B3B7] flex items-center justify-center relative">
        <div className="absolute top-0 h-[80px] w-full flex items-center bg-white">
          <Navbar />
        </div>
        <div className=" bg-red-200">
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;
