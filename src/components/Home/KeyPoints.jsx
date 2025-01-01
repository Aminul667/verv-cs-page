import { BsListCheck } from "react-icons/bs";
import { RiLuggageDepositLine } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import { VscPreview } from "react-icons/vsc";

import oliveTree from "../../assets/images/olive-tree.png";

const KeyPoints = () => {
  return (
    <div>
      {/* grid */}
      <div className="lg:w-[1200px] grid grid-cols-1 grid-rows-4 lg:grid-cols-4 lg:grid-rows-1 gap-4 mt-5 m-auto px-4 lg:px-0">
        <div
          className="bg-[#90B3B7] rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100 p-3
"
        >
          <VscPreview className="size-12" />
          <div className="mt-4">
            <h3 className="text-2xl font-semibold mb-3">Verified Reviews</h3>
            <p className="lg:text-lg leading-6">
              Real insights from landlords and tenants
            </p>
          </div>
        </div>
        <div
          className="bg-[#90B3B7] rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100 p-3
"
        >
          <TiMessages className="size-12" />
          <div className="mt-4">
            <h3 className="text-2xl font-semibold mb-3">Direct Messaging</h3>
            <p className="lg:text-lg leading-6">
              Connect with ease—no middlemen
            </p>
          </div>
        </div>
        <div
          className="bg-[#90B3B7] rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100 p-3
"
        >
          <BsListCheck className="size-12" />
          <div className="mt-4">
            <h3 className="text-2xl font-semibold mb-3">Free Listings</h3>
            <p className="lg:text-lg leading-6">
              RAdvertise your property or room for free
            </p>
          </div>
        </div>
        <div
          className="bg-[#90B3B7] rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100 p-3
"
        >
          <RiLuggageDepositLine className="size-12" />
          <div className="mt-4">
            <h3 className="text-2xl font-semibold mb-3">Secure Deposits</h3>
            <p className="lg:text-lg leading-6">
              Peace of mind for everyone involved
            </p>
          </div>
        </div>
      </div>

      {/* grow with verv */}
      <div className="lg:w-[1200px] flex flex-col lg:flex-row justify-center items-center gap-4 py-3 m-auto bg-green-400 rounded-3xl mt-11 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100">
        <img src={oliveTree} alt="olive tree" />
        <p className="text-xl text-center lg:text-right lg:text-2xl">
          Grow with Verv - for each tenancy, we plant an olive tree, rooted in
          the name of Landlords and Tenants.
        </p>
      </div>

      {/* offers */}
      <div></div>
    </div>
  );
};

export default KeyPoints;
