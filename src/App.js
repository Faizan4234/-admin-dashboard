import React from "react";
import NavBar from "./components/Nav_bar";
import { Routes, Route }
    from "react-router-dom";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Products from "./pages/Products";
import About from "./pages/About";


const App = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/reports' Component={Reports} />
                <Route path='/products' Component={Products} />
                <Route path='/about' Component={About} />
            </Routes>
        </>

    )
}
export default App;