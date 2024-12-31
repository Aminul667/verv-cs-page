import Hero from "./components/Home/Hero";
import KeyPoints from "./components/Home/KeyPoints";
// import Navbar from "./components/Navbar/Navbar";
import "./index.css";

function App() {
  return (
    <>
      <div className="bg-[#90B3B7]">
        {/* <div className="h-[80px] w-full flex items-center bg-white">
          <Navbar />
        </div> */}
        <div className="flex items-center justify-center py-10">
          <Hero />
        </div>
        <KeyPoints />
      </div>
    </>
  );
}

export default App;
