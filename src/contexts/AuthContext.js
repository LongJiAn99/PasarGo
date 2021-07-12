import React, { useContext, useEffect, useState } from "react";
import { auth, provider } from "../config/firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function register(email, password, username) {
    auth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
      const user = auth.currentUser;
      return user.updateProfile({
        displayName: username
      })
    })
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function loginWithGoogle() {
    return auth.signInWithPopup(provider)
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  function updateUsername(username) {
    return currentUser.updateProfile({
      displayName: username
    })
  }

  function updateDisplayPhoto(url) {
    return currentUser.updateProfile({
      photoURL: url
    })
  }

  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    register,
    logout,
    loginWithGoogle,
    resetPassword,
    updateEmail,
    updatePassword,
    updateUsername,
    updateDisplayPhoto
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
