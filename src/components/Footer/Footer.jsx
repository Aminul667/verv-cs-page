import { IoIosMailUnread } from "react-icons/io";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="bg-neutral mt-20">
      <footer className="footer text-neutral-content items-center p-4 w-[1200px] m-auto">
        <aside className="grid-flow-col items-center">
          <img src={logo} alt="logo" />
          <div className="ml-4">
            <p className="leading-5 mb-2">
              The Peer-to-Peer Marketplace for Landlords and Tenants. Simple.
              Transparent. Free.
            </p>
            <p className="leading-5">
              Copyright © {new Date().getFullYear()} - All right reserved
            </p>
          </div>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <div className="">
            <IoIosMailUnread size={40} />
            <p>hello@vervrooms.com</p>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
