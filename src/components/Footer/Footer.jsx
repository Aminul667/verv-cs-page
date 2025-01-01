import { IoIosMailUnread } from "react-icons/io";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="bg-neutral mt-14 lg:mt-20">
      <footer className="footer text-neutral-content items-center p-4 lg:w-[1200px] m-auto">
        <aside className="grid-flow-row lg:grid-flow-col items-center">
          <div className="w-full flex justify-between items-center">
            <img src={logo} alt="logo" />
            <nav className="grid-flow-col gap-4 lg:place-self-center lg:justify-self-end">
              <div className="lg:hidden">
                <IoIosMailUnread size={40} />
                <p>hello@verv.org</p>
              </div>
            </nav>
          </div>
          <div className="lg:ml-4">
            <p className="leading-5 mb-2">
              The Peer-to-Peer Marketplace for Landlords and Tenants. Simple.
              Transparent. Free.
            </p>
            <p className="leading-5">
              Copyright © {new Date().getFullYear()} - All right reserved
            </p>
          </div>
        </aside>
        <nav className="hidden lg:grid-flow-col lg:gap-4 lg:place-self-center lg:justify-self-end lg:block">
          <div>
            <IoIosMailUnread size={40} />
            <p>hello@verv.org</p>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
