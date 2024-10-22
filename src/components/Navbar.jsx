import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="text-white body-font bg-transparent">
        <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
          {/* Flex container for mobile view, but separate handling for larger screens */}
          <div className="flex items-center justify-between w-full md:w-auto">
            {/* Left aligned logo */}
            <Link to="/" className="flex title-font font-medium items-center text-white">
              <img src="/logo.png" alt="Logo" className="h-20 w-auto md:h-28" />
            </Link>

            {/* Mobile centered title */}
            <div className="spicy-rice-regular text-4xl md:hidden font-bold absolute left-1/2 transform -translate-x-1/2">
              Concrete Club
            </div>

            {/* Right aligned toggle button for mobile */}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white md:hidden hover:text-gray-400"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Laptop view centered title */}
          <div className="hidden md:block spicy-rice-regular text-4xl md:text-6xl font-bold">
            Concrete Club
          </div>

          {/* Navigation Menu with transition (visible on larger screens, collapsible on mobile) */}
          <nav
            className={`${
              menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } transition-all duration-500 ease-in-out md:transition-none md:opacity-100 md:max-h-full md:flex md:items-center md:ml-auto md:mr-auto text-lg font-bold`}
            style={{ transitionProperty: "opacity, max-height" }}
          >
            <NavLink
              className={(e) =>
                e.isActive ? "mr-5 text-blue-500" : "mr-5 hover:text-white hover:underline"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={(e) =>
                e.isActive ? "mr-5 text-blue-500" : "mr-5 hover:text-white hover:underline"
              }
              to="/recentActivities"
            >
              Recent Activities
            </NavLink>
            <NavLink
              className={(e) =>
                e.isActive ? "mr-5 text-blue-500" : "mr-5 hover:text-white hover:underline"
              }
              to="/achievements"
            >
              Achievements
            </NavLink>
            <NavLink
              className={(e) =>
                e.isActive ? "mr-5 text-blue-500" : "mr-5 hover:text-white hover:underline"
              }
              to="/team"
            >
              Team Members
            </NavLink>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
