import React, { useState } from "react";
import { Menu, X, Gift, Shirt, Watch, Scissors, ShoppingBag, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="font-['Montserrat'] font-light">
      {/* Top Navbar */}
      <nav className="bg-primary px-6 py-4 shadow-md">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button
              onClick={toggleMenu}
              className="lg:hidden text-white hover:text-red-500 transition-colors duration-300 -ml-6"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={26} className="text-white" />
              ) : (
                <Menu size={26} className="text-white" />
              )}
            </button>

            <a
              href="#"
              className="text-sm text-white whitespace-nowrap hover:text-red-500 transition-colors duration-300"
            >
              TROUVER UNE BOUTIQUE
            </a>
          </div>
          <a
            href="#"
            className="text-sm text-white whitespace-nowrap hover:text-red-500 transition-colors duration-300 mb-2 sm:mb-0 hidden sm:block"
          >
            CONTACTEZ-NOUS
          </a>
        </div>
      </nav>
      <div
        className={`fixed top-0 left-0 h-full bg-[#700100]/40 backdrop-blur-md shadow-2xl transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out z-50 w-80`}
      >
        <div className="flex items-center justify-between p-6 border-b border-red-300/50">
          <h2 className="text-xl font-semibold text-white">Menu</h2>
          <button
            onClick={toggleMenu}
            aria-label="Close menu"
            className="text-white hover:text-red-400"
          >
            <X size={28} />
          </button>
        </div>
        <ul className="p-6 space-y-8">
          <li className="flex items-center gap-4 text-white hover:text-red-400 transition-colors">
            <Gift size={28} />
            <Link to="/category/le-monde-fiori" className="text-lg">
              Le monde Fiori
            </Link>
          </li>
          <li className="flex items-center gap-4 text-white hover:text-red-400 transition-colors">
            <ShoppingBag size={28} />
            <Link to="/category/univers-cadeaux" className="text-lg">
              L'univers Cadeaux
            </Link>
          </li>
          <li className="flex items-center gap-4 text-white hover:text-red-400 transition-colors">
            <Shirt size={28} />
            <Link to="/category/pret-a-porter" className="text-lg">
              Le prêt à porter
            </Link>
          </li>
          <li className="flex items-center gap-4 text-white hover:text-red-400 transition-colors">
            <Watch size={28} />
            <Link to="/category/accessoires" className="text-lg">
              Accessoires
            </Link>
          </li>
          <li className="flex items-center gap-4 text-white hover:text-red-400 transition-colors">
            <Scissors size={28} />
            <Link to="/category/sur-mesure" className="text-lg">
              Sur mesure
            </Link>
          </li>
          <li className="flex items-center gap-4 text-white hover:text-red-400 transition-colors">
            <ShoppingBag size={28} />
            <Link to="/category/outlet" className="text-lg">
              Outlet
            </Link>
          </li>
          <li className="flex items-center gap-4 text-white hover:text-red-400 transition-colors sm:hidden">
            <Phone size={28} />
            <a href="#" className="text-lg">
              Contactez-nous
            </a>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default TopNavbar;
