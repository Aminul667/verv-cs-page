// import { VscPreview } from "react-icons/vsc";
import heroImage from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <div
      className="w-[1100px] h-[620px] bg-cover bg-center] rounded-lg p-7 font-inter flex flex-col justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* heading */}
      <div>
        <h2 className="text-4xl font-semibold leading-9">
          Revolutionise Renting with Verv
        </h2>
        <h2 className="text-4xl font-semibold leading-9 mt-3">
          No Apps. No Hassle. Just Smarter Renting.
        </h2>
      </div>
      <div className="mt-8">
        <p className="text-xl leading-6">
          Be among the first to join Verv and shape the future of renting.
        </p>
        <p className="text-xl leading-6">
          Earn exclusive perks as an early adopter!
        </p>
      </div>

      {/* form */}
      <form action="" className="font-inter my-8">
        <div className="relative flex items-center w-1/2">
          <input
            type="text"
            placeholder="Enter your email address"
            className="h-12 w-full py-4 pl-4 pr-44 rounded-3xl border border-[#90B3B7] bg-white"
          />
          <button className="absolute right-0 bg-[#90B3B7] text-white h-10 rounded-3xl px-3 py-4 flex items-center mr-1 font-semibold hover:bg-gray-500">
            Get Early Access!
          </button>
        </div>
      </form>
      <div>
        <p className="text-xl leading-6 bg-red-500">
          Here add tenant and landlord offers
        </p>
        <button className="bg-[#90B3B7] text-white h-10 rounded-3xl px-5 py-4 flex items-center mr-1 font-semibold hover:bg-gray-500 mt-8">
          About Verv
        </button>
      </div>
    </div>
  );
};

export default Hero;
