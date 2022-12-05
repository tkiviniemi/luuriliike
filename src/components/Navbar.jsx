import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 items-center justify-between bg-emerald-600 p-4">
      <div className="w-full flex">
        <div className="text-zinc-600 mr-6">
          <Link to="/" className="font-semibold text-xl">
            Luuriliike
          </Link>
        </div>
        <div className="w-full flex justify-center">
          <div className="text-md text-zinc-600 ">
            <Link to="../pages/About" className="hover:text-white mr-4">
              About
            </Link>
            <Link to="../pages/Repairs" className="hover:text-white mr-4">
              Repairs
            </Link>
            <Link to="../pages/Shop" className="hover:text-white">
              Shop
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
