import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../hooks/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider =new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const googleLogin = () => {
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
    }
    const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    } 
    const logIn = (email, password)=> {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
      return signOut(auth)
    }
    const handleUpdateProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
    }
    useEffect(()=> {
    
     const unSubscribe = onAuthStateChanged(auth, user => {
        setUser(user);
        setLoading(false)
      })
      return () => {
        unSubscribe
      }
      
    }, [])
    const authInfo = {
      googleLogin,
      createUser,
      logIn,
      logOut, 
      user, 
      loading,
      handleUpdateProfile
    }
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
