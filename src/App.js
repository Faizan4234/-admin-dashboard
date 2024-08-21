// src/App.js

import React from "react";
import NavBar from "./components/Nav_bar";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Reports from "./pages/Reports";
import Products from "./pages/Products";
import About from "./pages/About";
import LogoFaizan from "./assets/logo/logoFaizan";
import './index.css';


const App = () => {
    return (
        <>
            <div className="fixed top-4 right-4 ">
                <LogoFaizan />
            </div>
            <NavBar />
            <main className="flex-1 p-6 transition-margin duration-300">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/reports' element={<Reports />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </main>
        </>
    );
};

export default App;