import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="w-[1200px] m-auto flex items-center">
      <div>
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
