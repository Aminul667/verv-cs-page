import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar lg:w-[1200px] m-auto">
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
            className="bg-colorButton text-white h-10 rounded-md px-5 py-4 lg:flex items-center mr-1 font-semibold hover:bg-gray-500 cursor-pointer hidden"
          >
            About
          </Link>
          <h2 className="text-2xl lg:text-3xl font-semibold lg:hidden">
            Coming Soon
          </h2>
        </div>
      </div>
    </>
  );
};

export default Navbar;
