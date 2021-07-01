import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import firebase from "firebase/app";

const AuthContext = React.createContext();
// creating a context and making it available all over the code base
// Now any changes in functionality will require changes just in this page

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const provider = new firebase.auth.GoogleAuthProvider();

    function googleSignin() {
        return auth.signInWithPopup(provider);
    }

    // function to sign out users
    function signout() {
        return auth.signOut();
    }

    // function to get user jwt token to send to backend
    // while making API request to send notifications
    function getToken() {
        return currentUser.getIdToken(true);
    }

    // set currentUser to null if not signed in and 
    // to the current user if signed in when the application first loads
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        googleSignin,
        signout,
        getToken
    };

    // load the website only after the currentUser has been set
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
