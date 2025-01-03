/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero.png";
import { BiMailSend } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { postData } from "../../utils/postData";

const Hero = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    await postData(data, reset, toast);
  };

  const onError = (errors) => {
    if (errors.email?.type === "required") {
      toast.error("Please enter your email address first");
    } else {
      toast.error(errors.email.message);
    }
  };

  return (
    <div
      className="w-full lg:w-[1100px] h-[620px] bg-cover bg-center rounded-lg p-7 font-inter flex flex-col justify-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* heading */}
      <div>
        <h2 className="text-2xl text-center lg:text-left lg:text-4xl font-semibold leading-9 mb-5">
          The Peer-to-Peer Marketplace for Landlords and Tenants.
        </h2>
        <h2 className="text-2xl text-center lg:text-left lg:text-4xl font-semibold leading-9 mb-6">
          No Apps. No Hassle. Just Smarter Renting.
        </h2>
        {/* <p2>No Apps. No Hassle. Just Smarter Renting.</p2> */}
      </div>
      <div className="mt-8">
        <p className="text-center lg:text-left lg:text-xl leading-6">
          Be among the first to join Verv and shape the future of renting.
        </p>
        <p className="text-center lg:text-left lg:text-xl leading-6">
          Earn exclusive perks as an early adopter!
        </p>
      </div>

      {/* form */}
      {/* <Toaster position="top-center" richColors /> */}
      <form
        action=""
        className="font-inter my-8"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <p className="lg:hidden text-center font-semibold">Get early access</p>
        <div className="relative flex items-center w-full lg:w-1/2">
          <input
            type="text"
            {...register("email", {
              required: "Please enter your email address",
              pattern: {
                value: /^([\w.-]+@([\w-]+\.)+[\w-]{2,4})?$/,
                message: "Sorry, the email address is not correct!",
              },
            })}
            placeholder="Enter your email"
            className="h-12 w-full py-4 pl-4 pr-44 rounded-3xl border border-[#90B3B7] bg-white"
          />
          <button
            type="submit"
            className="absolute right-0 bg-colorButton text-white h-10 rounded-3xl px-3 py-4 lg:flex lg:items-center mr-1 font-semibold hover:bg-gray-500 hidden"
          >
            Get Early Access!
          </button>
          <button
            type="submit"
            className="absolute right-0 bg-colorButton w-20 h-10 rounded-full flex items-center justify-center mr-1 font-semibold hover:bg-gray-500 lg:hidden"
          >
            <BiMailSend size={30} className="text-white" />
          </button>
        </div>
      </form>
      <div>
        <div className="flex items-center gap-3">
          <div className="bg-[#90B3B7] rounded-full size-6 flex items-center justify-center">
            &#x2714;
          </div>
          <p className="text-sm">
            <span className="font-semibold">For Landlords:</span> Chance to be
            part of the Verv Founders’ Club with lifetime access <br /> to
            premium features!
          </p>
        </div>
        <div className="flex items-center gap-3 mt-4">
          <div className="bg-[#90B3B7] rounded-full size-6 flex items-center justify-center">
            &#x2714;
          </div>
          <p className="text-sm">
            <span className="font-semibold">For Tenants:</span> Chance to Win 1
            Month&apos;s Rent Cashback!
          </p>
        </div>
        {/* <button className="bg-colorButton text-white h-10 rounded-3xl px-5 py-4 flex items-center mr-1 font-semibold hover:bg-gray-500 mt-9">
          <Link to="/about">About Verv</Link>
        </button> */}
      </div>
    </div>
  );
};

export default Hero;
