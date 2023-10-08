import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../hooks/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider =new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const googleLogin = () => {
      return signInWithPopup(auth, googleProvider)
    }
    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
    } 
    const logIn = (email, password)=> {
      return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
      return signOut(auth)
    }
    useEffect(()=> {
      
     const unSubscribe = onAuthStateChanged(auth, user => {
        setUser(user);
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
      user
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
