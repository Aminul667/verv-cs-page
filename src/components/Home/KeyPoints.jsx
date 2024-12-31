import { VscPreview } from "react-icons/vsc";

const KeyPoints = () => {
  return (
    <div>
      {/* grid */}
      <div className="w-[600px] h-[350px] grid grid-cols-2 grid-rows-2 gap-4 p-4  mt-5">
        <div
          className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-3
"
        >
          <VscPreview className="size-10" />
          <div>
            <h3 className="text-2xl font-semibold">Verified Reviews</h3>
            <p>Real insights from landlords and tenants</p>
          </div>
        </div>
        <div
          className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-3
"
        >
          <VscPreview className="size-10" />
          <div>
            <h3 className="text-2xl font-semibold">Verified Reviews</h3>
            <p>Real insights from landlords and tenants</p>
          </div>
        </div>
        <div
          className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-3
"
        >
          <VscPreview className="size-10" />
          <div>
            <h3 className="text-2xl font-semibold">Verified Reviews</h3>
            <p>Real insights from landlords and tenants</p>
          </div>
        </div>
        <div
          className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-3
"
        >
          <VscPreview className="size-10" />
          <div>
            <h3 className="text-2xl font-semibold">Verified Reviews</h3>
            <p>Real insights from landlords and tenants</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyPoints;
