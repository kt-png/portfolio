import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {name :"Home", href:"#Home"},
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full backdrop-blur-md bg-black/70 text-white shadow-lg z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold cursor-pointer"
        >
          Kuruba Teja
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              whileHover={{ y: -2 }}
              className="relative group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-black/90 backdrop-blur-lg"
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-400 transition"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}