import '../App.css';

import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./Home";
import Services from "./Services";
import Work from "./Work";
import Contact from "./Contact";


function NavBar() {
    return (
        <BrowserRouter>
            <header>
                <nav>
                    <ol className="navBar">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/work">Work</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ol>
                </nav>
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>

    );
}

export default NavBar;
