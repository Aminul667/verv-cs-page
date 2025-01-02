/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import aboutImage from "../../assets/images/aboutHome.jpg";
import { LuUserCheck } from "react-icons/lu";
import { toast } from "sonner";
import { postData } from "../../utils/postData";

const About = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Submitted Data:", data);
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
    <>
      <div className="lg:w-[1200px] m-auto bg-cover bg-center mt-10">
        {/* hero */}
        <div className="flex justify-between px-5 py-8 mt-5 bg-[#90B3B7] rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100">
          <div className="lg:w-[650px] flex flex-col justify-center text-center">
            <h2 className="text-2xl lg:text-4xl font-semibold leading-9 mb-5">
              A Digital Bridge Between Landlords & Tenants
            </h2>
            <p className="lg:text-lg leading-7">
              Welcome to Verv-where renting meets the future. As we step boldly
              into 2025, we&apos;re leaving outdated processes and sky-high fees
              in the dust. It&apos;s time to shake up the rental world, cut out
              the nonsense, and give landlords and tenants a platform that
              actually works for them.
            </p>
            {/* form */}
            <form
              action=""
              onSubmit={handleSubmit(onSubmit, onError)}
              className="font-inter my-8 hidden lg:block"
            >
              <div className="relative flex items-center w-[80%]">
                <input
                  type="text"
                  {...register("email", {
                    required: "Please enter your email address",
                    pattern: {
                      value: /^([\w.-]+@([\w-]+\.)+[\w-]{2,4})?$/,
                      message: "Sorry, the email address is not correct!",
                    },
                  })}
                  placeholder="Enter your email address"
                  className="h-12 w-full py-4 pl-4 pr-44 rounded-3xl border border-[#90B3B7] bg-white"
                />
                <button className="absolute right-0 bg-[#90B3B7]  h-10 rounded-3xl px-3 py-4 flex items-center mr-1 font-semibold hover:bg-gray-500">
                  Get Early Access!
                </button>
              </div>
            </form>
          </div>

          {/* image */}
          <div
            className="w-[450px] h-[338px] bg-red-300 rounded-2xl hidden lg:block"
            style={{ backgroundImage: `url(${aboutImage})` }}
          ></div>
        </div>

        {/* body */}
        <div className=" grid lg:grid-cols-2 lg:grid-rows-2 gap-6 mt-14 lg:mt-20">
          <div className="bg-[#90B3B7] rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100 p-4">
            <div className="flex items-center gap-4">
              <LuUserCheck size={35} />

              <h3 className="text-2xl font-medium">
                Streamlined for Landlords
              </h3>
            </div>
            <p className="leading-7 mt-3">
              No more drowning in fees or juggling multiple platforms. With
              Verv, you can manage listings, chat directly with tenants, check
              references, read reviews, and create tenancy agreements—all in one
              sleek, easy-to-use dashboard. Oh, and did we mention? It’s
              completely free to advertise!
            </p>
          </div>
          <div className="bg-[#90B3B7] rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100 p-4">
            <div className="flex items-center gap-4">
              <LuUserCheck size={35} />

              <h3 className="text-2xl font-medium">Empowered Tenants</h3>
            </div>
            <p className="leading-7 mt-3">
              Why should tenants settle for less? At Verv, you get access to
              verified listings, transparent terms, and real landlord reviews.
              Message landlords directly, make secure payments, and skip the
              middleman. Renting just got a whole lot easier—and better yet,
              it’s free for tenants too!
            </p>
          </div>
          <div className="bg-[#90B3B7] rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100 p-4">
            <div className="flex items-center gap-4">
              <LuUserCheck size={35} />

              <h3 className="text-2xl font-medium">
                Rooted in Something Bigger
              </h3>
            </div>
            <p className="leading-7 mt-3">
              We’re not just about revolutionising renting—we’re about making an
              impact. For every tenancy created on Verv, we plant an olive tree
              in the name of both landlord and tenant. Because growing together
              means more than just signing a lease.
            </p>
          </div>
          <div className="bg-[#90B3B7] rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100 p-4">
            <div className="flex items-center gap-4">
              <LuUserCheck size={35} />

              <h3 className="text-2xl font-medium">2025 and Beyond</h3>
            </div>
            <p className="leading-7 mt-3">
              This is the year we say goodbye to extortionate fees, endless
              paperwork, and outdated estate agents. Verv is here to make
              renting smarter, simpler, and fairer for everyone. Ready to join
              the revolution? Let’s grow, rent, and thrive together.Welcome to
              renting, the Verv way. 🌿
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
