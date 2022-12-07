import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 items-center bg-emerald-600 p-4">
      <div className="w-full flex text-zinc-600">
        <div className="mr-6">
          <Link to="/" className="hover:text-stone-200 font-semibold text-xl">
            Luuriliike
          </Link>
        </div>
        <div className="w-full flex justify-center">
          <div className="text-lg">
            <Link to="../pages/About" className="hover:text-stone-200 mr-8">
              About
            </Link>
            <Link to="../pages/Repairs" className="hover:text-stone-200 mr-8">
              Repairs
            </Link>
            <Link to="../pages/Shop" className="hover:text-stone-200">
              Shop
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
