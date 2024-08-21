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

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebar(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="bg-primary h-20 flex items-center px-6 shadow-lg">
          <Link to="#" className='text-2xl'>
            <FaIcons.FaBars 
              onClick={showSidebar} 
              className="hover:text-accent transition-colors duration-300" 
            />
          </Link>
        </div>

        {sidebar && (
          <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={showSidebar}></div>
        )}

        <nav
          ref={sidebarRef}
          className={`bg-primary w-64 h-full flex flex-col fixed top-0 z-20 transition-transform duration-300 ease-in-out ${sidebar ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="flex justify-start p-4">
            <button
              onClick={showSidebar}
              className="text-white text-3xl bg-red-600 hover:bg-red-700 rounded-full p-2 focus:outline-none transition-colors duration-300"
            >
              <IoIcons.IoIosClose />
            </button>
          </div>
          <ul className="w-full flex-1">
            {SidebarData.map((item, index) => (
              <li 
                key={index} 
                className="flex items-center p-2 list-none h-12 hover:bg-accent transition-colors duration-300"
              >
                <Link 
                  to={item.path} 
                  className="text-[#f5f5f5] text-lg w-full flex items-center p-2 rounded hover:text-white transition-colors duration-300"
                >
                  {item.icon}
                  <span className="ml-4">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center p-4 mt-auto">
            <h3 className="text-lg font-bold mb-4 text-gray-300">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61564200287554" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                <FaFacebook size={30} />
              </a>
              <a 
                href="https://www.instagram.com/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-pink-500 hover:text-pink-700 transition-colors duration-300"
              >
                <FaInstagram size={30} />
              </a>
              <a 
                href="https://www.linkedin.com/in/faizan-adil-42aa22246" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;