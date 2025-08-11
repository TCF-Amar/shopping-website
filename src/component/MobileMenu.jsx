// MobileMenu.jsx
import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const menuVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { ease: "easeInOut", duration: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function MobileMenu({ open, toggleMenu, menuItems }) {
  const { theme } = useSelector((state) => state.theme);

  const extraItems = [
    { id: 5, name: "Profile", path: "/profile" },
    { id: 6, name: "Orders", path: "/orders" },
    { id: 7, name: "Wishlist", path: "/wishlist" },
  ];

  return (
    <motion.nav
      // data-theme={theme}
      className="fixed top-16 z-50 left-0 w-full  h-[calc(100vh-4rem)]  backdrop-blur-2xl  p-4 md:hidden shadow-lg"
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.ul className="space-y-3">
        {menuItems.map((item, index) => (
          <motion.li
            key={index}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ delay: index * 0.1 }}
          >
            <NavLink
              to={item.path}
              onClick={toggleMenu}
              className={({ isActive }) =>
                `block w-full px-4 py-2 rounded-md font-medium transition-all duration-300  text-white 
                 ${
                   isActive
                     ? "bg-neutral/80  shadow border-l-4 border-blue-400"
                     : " hover:bg-neutral/80 "
                 }`
              }
            >
              {item.name}
            </NavLink>
          </motion.li>
        ))}
        {extraItems.map((item, index) => (
          <motion.li
            key={index}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ delay: index * 0.1 }}
          >
            <NavLink
              to={item.path}
              onClick={toggleMenu}
              className={({ isActive }) =>
                `block w-full px-4 py-2 rounded-md font-medium transition-all duration-300 text-white 
                 ${
                   isActive
                     ? "bg-neutral/50  shadow border-l-4 border-blue-400"
                     : " hover:bg-neutral/50 "
                 }`
              }
            >
              {item.name}
            </NavLink>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}
