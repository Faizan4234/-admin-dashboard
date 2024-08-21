import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as TbIcons from "react-icons/tb";
import * as FcIcons from "react-icons/fc";



export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FaIcons.FaHome />,
  },
  {
    title: 'Reports',
    path: '/Reports',
    icon: <TbIcons.TbReportSearch />,
    
  },
  {
    title: 'Products',
    path: '/Products',
    icon: <AiIcons.AiFillProduct />,
    
  },
  {
    title: 'About',
    path: '/About',
    icon: <FcIcons.FcAbout />,
  }
]