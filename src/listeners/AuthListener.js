import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { startSetExpenses } from "../actions/expenses";
import { useEffect } from "react";
import { login, logout } from "../actions/auth";

function AuthListener({startSetExpenses, login, logout, isAuthenticated})
{
    const navigate = useNavigate();
    useEffect(() => {
        const auth = getAuth();
        auth.onAuthStateChanged((user) =>{
            if (user)
            {
                if (window.location.pathname !== '/')
                    return;
                login(user.uid);
                console.log('uid ', user.uid);
                startSetExpenses().then(() => {
                    navigate('/dashboard');
                });
            }
            else
            {
                if (isAuthenticated)
                {
                    logout();
                    navigate('/');
                }
            }
        });
        
    }, [navigate]);
    return null;
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

const mapDispatchToProps = (dispatch) => ({
    startSetExpenses: () => dispatch(startSetExpenses()),
    login: (uid) => dispatch(login(uid)),
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthListener);