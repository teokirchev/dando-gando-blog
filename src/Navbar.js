import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="nav">
            <NavLink to="/" className="header">DandoGando Blog</NavLink>

            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/create">New Blog</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
            </div>
        </nav>
    );
}