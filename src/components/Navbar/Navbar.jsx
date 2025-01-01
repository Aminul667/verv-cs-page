import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar w-[1200px] m-auto">
      <div className="navbar-start">
        {/* <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>About</a>
            </li>
          </ul>
        </div> */}
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
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
