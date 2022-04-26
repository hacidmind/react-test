import "../css/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="logo">MUO</div>
                <ul className="nav-links">
                    <input type="checkbox" id="checkbox_toggle" />
                    <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
                    <div className="menu">
                        <li><Link to="/blog">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        
                        <li><Link to="/newblog">New Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </div>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
