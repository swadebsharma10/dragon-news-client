import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  

    const googleProvider = new GoogleAuthProvider();
    // google SignIn
    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // signOut
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

    // create user
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // updateUser
    const updateUser = (profile) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }
    // sendVerification
    const verifyEmail =()=>{
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }

    // observer
    useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('observer', currentUser);
            setLoading(false)
        });
        return ()=>{
            unSubscribe();
        }

    }, [])



    const authInfo ={
        user,
        loading,
        createUser,
        loginUser,
        googleSignIn,
        logOut,
        updateUser,
        verifyEmail,


    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;