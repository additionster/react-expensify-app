import React from "react";
import { NavLink } from "react-router";
const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" className={({isActive}) => isActive? "is-active":"in-active"}>Dashboard</NavLink> | 
        <NavLink to="/create" className={({isActive}) => isActive? "is-active":"in-active"}>Create Expense</NavLink> | 
        <NavLink to="/help" className={({isActive}) => isActive? "is-active":"in-active"}>Help</NavLink>
    </header>
);

export default Header;