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
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/Reports',
    icon: <TbIcons.TbReportSearch />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/Products',
    icon: <AiIcons.AiFillProduct />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/About',
    icon: <FcIcons.FcAbout />,
    cName: 'nav-text'
  }
]