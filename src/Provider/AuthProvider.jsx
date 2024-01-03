import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
  

    const googleProvider = new GoogleAuthProvider();
    // google SignIn
    const googleSignIn = ()=>{
        return signInWithPopup(auth, googleProvider)
    }

    // signOut
    const logOut =()=>{
        return signOut(auth)
    }

    // create user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // observer
    useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('observer', currentUser)
        });
        return ()=>{
            unSubscribe();
        }

    }, [])



    const authInfo ={
        user,
        createUser,
        loginUser,
        googleSignIn,
        logOut,


    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;