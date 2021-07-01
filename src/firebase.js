import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDYFuh1eYVBoYQk3Ky5h5RA3ArWhpm_z3k",
    authDomain: "form-backend-4c8c6.firebaseapp.com",
    projectId: "form-backend-4c8c6",
    storageBucket: "form-backend-4c8c6.appspot.com",
    messagingSenderId: "180228390062",
    appId: "1:180228390062:web:1a361cb63206b99521813f"
});

export const auth = app.auth();
export default app;

// firebase config file
// this gives firebase backend the required information about the 
// client frontend that is using it's APIs