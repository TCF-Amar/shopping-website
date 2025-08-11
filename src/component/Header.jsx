import React, { useState, useRef, useEffect } from "react";
import {
  HiBars3,
  HiMiniXMark,
  HiOutlineMagnifyingGlass,
  HiOutlineShoppingBag,
  HiOutlineUserCircle,
  HiShoppingBag,
  HiUserCircle,
} from "react-icons/hi2";
import MobileMenu from "./MobileMenu";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import Search from "./Search";
import { toggleSearch } from "../features/search/searchSlice";
import { useDispatch, useSelector } from "react-redux";
function Header() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const isAuthenticated = true;
  const dropdownRef = useRef();
  const dispatch = useDispatch();
  const { showSearch } = useSelector((state) => state.search);
  const { cartItems } = useSelector((state) => state.cart);

  const toggleMenu = () => setOpen((prev) => !prev);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Collections", path: "/collections" },
    { id: 3, name: "About", path: "/about" },
  ];

  return (
    <div className="relative  ">
      <header className="fixed top-0 left-0 right-0 z-50 h-16 px-5 md:px-10 lg:px-20 xl:px-32 flex justify-between items-center backdrop-blur border-b border-default">
        <Link
          to="/"
          className="text-2xl font-bold hover:scale-110 transition-all duration-300"
        >
          MyShop.
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-6 uppercase">
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `hover:border-b-2 border-default text-sm px-2 font-semibold cursor-pointer transition-all duration-300 hover:scale-105 ${
                  isActive ? "border-b-2" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center space-x-3">

          <HiOutlineMagnifyingGlass
            onClick={() => dispatch(toggleSearch())}
            size={30}
            className="hover:scale-110 transition-all duration-300 cursor-pointer"
          />
          {isAuthenticated ? (
            <div className="relative" ref={dropdownRef}>
              <HiOutlineUserCircle
                size={30}
                onClick={toggleDropdown}
                className="hover:scale-110 transition-all duration-300 cursor-pointer hidden md:block z-[100]"
              />
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 text-white w-40 backdrop-blur rounded shadow-lg border border-neutral/30 bg-neutral/80 flex flex-col gap-2"
                  >
                    <Link
                      to="/profile"
                      className="py-2 block hover:bg-neutral/80  px-4 text-sm font-medium duration-200"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/orders"
                      className="py-2 block hover:bg-neutral/50 px-4 text-sm font-medium duration-200"
                    >
                      Orders
                    </Link>
                    <Link
                      to="/wishlist"
                      className="py-2 block hover:bg-neutral/50 px-4 text-sm font-medium duration-200"
                    >
                      Wishlist
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-2">
              <Link
                to="/login"
                className="hover:scale-110 transition-all duration-300 text-base font-medium"
              >
                Login
              </Link>
              <span className="text-gray-500">|</span>
              <Link
                to="/register"
                className="hover:scale-110 transition-all duration-300 text-base font-medium"
              >
                Register
              </Link>
            </div>
          )}

          {/* Cart */}
          <Link
            to="/cart"
            className="relative hover:scale-110 transition-all duration-300"
          >
            <HiOutlineShoppingBag size={30} />
            {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {cartItems.length}
            </span>
            )}
          </Link>

          {/* Mobile menu toggle */}
          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <HiMiniXMark size={30} />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <HiBars3 size={30} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile menu */}
      </header>
      <AnimatePresence>{showSearch && <Search />}</AnimatePresence>

        <AnimatePresence>
          {open && (
            <MobileMenu
              open={open}
              toggleMenu={toggleMenu}
              menuItems={menuItems}
            />
          )}
        </AnimatePresence>
      {/* <Search /> */}
    </div>
  );
}

export default Header;
