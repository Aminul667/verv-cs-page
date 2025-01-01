import Hero from "./Hero";
import KeyPoints from "./KeyPoints";

const Home = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-10">
        <Hero />
      </div>
      <KeyPoints />
    </div>
  );
};

export default Home;
