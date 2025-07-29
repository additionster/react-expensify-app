import React from "react";
import { NavLink } from "react-router";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
export const Header = ({ startLogout, isAuthenticated }) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" className={({isActive}) => isActive? "is-active":"in-active"}>Dashboard</NavLink> | 
        <NavLink to="/create" className={({isActive}) => isActive? "is-active":"in-active"}>Create Expense</NavLink> | 
        <NavLink to="/help" className={({isActive}) => isActive? "is-active":"in-active"}>Help</NavLink>
        {
            isAuthenticated &&
            <button onClick={startLogout}>Logout</button>
        }
    </header>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);