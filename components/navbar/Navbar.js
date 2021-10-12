import Link from "next/link";
import { NavbarProvider } from "./context";
import MobileButton from "./mobileButton/MobileButton";
import NavMenu from "./navMenu/NavMenu";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH;
const Navbar = ({ links }) => {
  return (
    <NavbarProvider>
      <div className="flex justify-between py-8">
        <Link className="flex align-middle" href={prefix + "/"}>
          <a className="flex">
            <div className="w-10 h-10 px-1 mr-2 rounded-full bg-blue-500 font-semibold text-white text-center text-3xl font-mono leading-10">
              M
            </div>
            <div className="leading-10">
              Mabo <span className="font-bold">Mbebeta</span>
            </div>
          </a>
        </Link>

        <nav role="navigation">
          <MobileButton />

          <NavMenu links={links} />
        </nav>
      </div>
    </NavbarProvider>
  );
};

export default Navbar;
