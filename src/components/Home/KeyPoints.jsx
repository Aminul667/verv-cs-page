import { BsListCheck } from "react-icons/bs";
import { RiLuggageDepositLine } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import { VscPreview } from "react-icons/vsc";

const KeyPoints = () => {
  return (
    <div>
      {/* grid */}
      <div className="w-[600px] lg:w-[1200px] grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-4 p-4 mt-5 m-auto">
        <div
          className="bg-green-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100 p-3
"
        >
          <VscPreview className="size-12" />
          <div className="mt-4">
            <h3 className="text-2xl font-semibold mb-3">Verified Reviews</h3>
            <p className="text-lg leading-6">
              Real insights from landlords and tenants
            </p>
          </div>
        </div>
        <div
          className="bg-green-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100 p-3
"
        >
          <TiMessages className="size-12" />
          <div className="mt-4">
            <h3 className="text-2xl font-semibold mb-3">Direct Messaging</h3>
            <p className="text-lg leading-6">Connect with ease—no middlemen</p>
          </div>
        </div>
        <div
          className="bg-green-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100 p-3
"
        >
          <BsListCheck className="size-12" />
          <div className="mt-4">
            <h3 className="text-2xl font-semibold mb-3">Free Listings</h3>
            <p className="text-lg leading-6">
              RAdvertise your property or room for free
            </p>
          </div>
        </div>
        <div
          className="bg-green-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100 p-3
"
        >
          <RiLuggageDepositLine className="size-12" />
          <div className="mt-4">
            <h3 className="text-2xl font-semibold mb-3">Secure Deposits</h3>
            <p className="text-lg leading-6">
              Peace of mind for everyone involved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyPoints;
