import { Link, NavLink } from "react-router";

export default function MainMenu() {

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/books">Books</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
        </nav>
    )
}