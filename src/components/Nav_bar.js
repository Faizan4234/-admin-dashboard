import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./Sidebar_Data";
import { IconContext } from 'react-icons';
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const sidebarRef = useRef(null);

  const showSidebar = () => setSidebar(!sidebar);

  // Function to handle clicks outside the sidebar
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebar(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up event listener on component unmount
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="bg-primary h-20 flex justify-start items-center">
          <Link to="#" className='ml-8 text-2xl'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>

        {/* Overlay for dimming effect */}
        {sidebar && (
          <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={showSidebar}></div>
        )}

        <nav
          ref={sidebarRef}
          className={`bg-primary w-[250px] h-screen flex flex-col fixed top-0 z-20 transition-transform duration-300 ${sidebar ? 'transform translate-x-0' : 'transform -translate-x-full'}`}
        >
          <div className="flex justify-start p-4">
            <button
              onClick={showSidebar}
              className="text-white text-3xl bg-red-600 hover:bg-red-700 rounded-full p-2 focus:outline-none"
            >
              <IoIcons.IoIosClose />
            </button>
          </div>
          <ul className="w-full flex-1">
            {SidebarData.map((item, index) => (
              <li key={index} className="flex items-center p-2 list-none h-[60px]">
                <Link to={item.path} className="text-[#f5f5f5] text-[18px] w-[95%] h-full flex items-center p-0 px-4 rounded hover:bg-accent">
                  {item.icon}
                  <span className="ml-4">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center p-4 mt-auto">
            <h3 className="text-lg font-bold mb-4 text-gray-300">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <FaFacebook size={30} />
              </a>
              <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                <FaInstagram size={30} />
              </a>
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;
