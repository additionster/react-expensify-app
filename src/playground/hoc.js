//Higher Order Component (HOC) - A component (HOC) that renders another component
//HOC allows to 
// 1. reuse code
// 2. Render hijacking 
// 3. Prop manipulation 
// 4. Abstract state
import React from "react";
import { createRoot } from "react-dom/client";

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            {/* ..props is using plugin-transform-object-rest-spread to translate => <WrappedComponent info={props.info}/> */}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ): (
                <p>Please login to view the info.</p>
            )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//createRoot(document.getElementById('app')).render(<AdminInfo isAdmin={true} info="These are the details"/>);
createRoot(document.getElementById('app')).render(<AuthInfo isAuthenticated={true} info="These are the details"/>);