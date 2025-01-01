import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar w-[1200px] m-auto">
      <div className="navbar-start">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <h2 className="text-3xl font-semibold">Coming Soon</h2>
      </div>
      <div className="navbar-end">
        <Link
          to="/about"
          className="bg-[#90B3B7] h-10 rounded-md px-5 py-4 flex items-center mr-1 font-semibold hover:bg-gray-500 cursor-pointer"
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
