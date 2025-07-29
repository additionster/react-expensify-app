import { GoogleAuthProvider, signInWithPopup, getAuth, signOut } from "firebase/auth";

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = () => {
    return () => {
        const auth = getAuth();
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        const auth = getAuth();
        return signOut(auth);
    };
};