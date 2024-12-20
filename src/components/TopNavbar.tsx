import React, { useState } from "react";
import { Menu, X, Gift, Shirt, Watch, Scissors, ShoppingBag, Phone, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

interface SubMenuItem {
  href: string;
  title: string;
}

interface MenuItem {
  title: string;
  icon: React.ElementType;
  link: string;
  subItems?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "Le monde Fiori",
    icon: Gift,
    link: "/category/le-monde-fiori",
    subItems: [
      { href: "/category/le-monde-fiori/printemps", title: "Collections Printemps" },
      { href: "/category/le-monde-fiori/ete", title: "Collections Été" },
      { href: "/category/le-monde-fiori/mariage", title: "Marriage" },
      { href: "/category/le-monde-fiori/soiree", title: "Soirée" }
    ]
  },
  {
    title: "L'univers Cadeaux",
    icon: ShoppingBag,
    link: "/category/univers-cadeaux",
    subItems: [
      { href: "/category/univers-cadeaux/pack-prestige", title: "Pack Prestige" },
      { href: "/category/univers-cadeaux/pack-premium", title: "Pack Premium" },
      { href: "/category/univers-cadeaux/pack-trio", title: "Pack Trio" },
      { href: "/category/univers-cadeaux/pack-duo", title: "Pack Duo" },
      { href: "/category/univers-cadeaux/pack-mini-duo", title: "Pack Mini Duo" },
      { href: "/category/univers-cadeaux/pack-mono", title: "Pack Mono" }
    ]
  },
  {
    title: "Le prêt à porter",
    icon: Shirt,
    link: "/category/pret-a-porter",
    subItems: [
      { href: "/category/pret-a-porter/homme/costumes", title: "Costumes" },
      { href: "/category/pret-a-porter/homme/blazers", title: "Blazers" },
      { href: "/category/pret-a-porter/homme/chemises", title: "Chemises" },
      { href: "/category/pret-a-porter/homme/pulls", title: "Pulls" },
      { href: "/category/pret-a-porter/homme/pantalons", title: "Pantalons" }
    ]
  },
  {
    title: "Accessoires",
    icon: Watch,
    link: "/category/accessoires",
    subItems: [
      { href: "/category/accessoires/homme/portefeuilles", title: "Portefeuilles" },
      { href: "/category/accessoires/homme/ceintures", title: "Ceintures" },
      { href: "/category/accessoires/homme/cravates", title: "Cravates" },
      { href: "/category/accessoires/homme/mallettes", title: "Mallettes" }
    ]
  },
  {
    title: "Sur mesure",
    icon: Scissors,
    link: "/category/sur-mesure"
  },
  {
    title: "Outlet",
    icon: ShoppingBag,
    link: "/category/outlet"
  }
];

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setExpandedItem(null); // Reset expanded item when closing menu
  };

  const toggleSubmenu = (title: string) => {
    setExpandedItem(expandedItem === title ? null : title);
  };

  return (
    <div className="font-['Montserrat'] font-light">
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
        } transition-transform duration-500 ease-in-out z-50 w-80 overflow-y-auto`}
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
        <ul className="p-6 space-y-4">
          {menuItems.map((item) => (
            <li key={item.title} className="text-white">
              <div className="flex flex-col">
                <button
                  onClick={() => toggleSubmenu(item.title)}
                  className="flex items-center justify-between w-full py-2 hover:text-red-400 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <item.icon size={28} />
                    <span className="text-lg">{item.title}</span>
                  </div>
                  {item.subItems && (
                    expandedItem === item.title ? <ChevronUp size={20} /> : <ChevronDown size={20} />
                  )}
                </button>
                {item.subItems && expandedItem === item.title && (
                  <ul className="ml-12 mt-2 space-y-2 border-l border-red-300/30 pl-4">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.href}>
                        <Link
                          to={subItem.href}
                          className="text-sm hover:text-red-400 transition-colors block py-1"
                          onClick={toggleMenu}
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
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