import React from "react";
import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router";

export const PublicRoute = ({ isAutheticated }) => {
    return isAutheticated? 
        <Navigate to="/dashboard" /> :
        <Outlet />
};

const mapStateToProps = (state) => ({
    isAutheticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);