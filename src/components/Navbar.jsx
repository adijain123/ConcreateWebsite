import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <header className="text-white body-font bg-transparent">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-5xl font-bold">Concreate Club</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg font-bold justify-center">
            <NavLink className={(e) => (e.isActive ? "mr-5 text-blue-500" : "mr-5 hover:text-white hover:underline")} to="/">Home</NavLink>
            <NavLink className={(e) => (e.isActive ? "mr-5 text-blue-500" : "mr-5 hover:text-white hover:underline")} to="/recentActivities">Recent Activities</NavLink>
            <NavLink className={(e) => (e.isActive ? "mr-5 text-blue-500" : "mr-5 hover:text-white hover:underline")} to="/achievements">Achievements</NavLink>
            <NavLink className={(e) => (e.isActive ? "mr-5 text-blue-500" : "mr-5 hover:text-white hover:underline")} to="/team">Team Members</NavLink>
          </nav>
          <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-white">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
