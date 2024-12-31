import heroImage from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <div
      className="w-[1100px] h-[620px] bg-cover bg-center] rounded-lg"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <h2 className="text-3xl font-bold text-red-500">
        This is Hero Component
      </h2>
    </div>
  );
};

export default Hero;
