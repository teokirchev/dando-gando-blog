import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="nav">
            <NavLink to="/" className="header">The DandoGando Blog</NavLink>

            <div className="nav-links">
                <NavLink to="/create">Create</NavLink>
                <NavLink to="/about">About me</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
            </div>
        </nav>
    );
}