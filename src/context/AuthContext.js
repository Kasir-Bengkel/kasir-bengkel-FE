import { useState, useEffect, useContext, createContext } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { FirebaseApp } from "@/config";

const auth = getAuth(FirebaseApp);

const IDLE_TIME = 30 * 60 * 1000;

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timeoutId;

    const checkUserActivity = () => {
      timeoutId = setTimeout(() => {
        auth.signOut().then(() => {
          setUser(null);
        });
      }, IDLE_TIME);
    };

    const resetUserActivity = () => {
      clearTimeout(timeoutId);
      checkUserActivity();
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        checkUserActivity();
      } else {
        setUser(null);
        clearTimeout(timeoutId);
      }
      setLoading(false);
    });

    window.addEventListener("mousemove", resetUserActivity);
    window.addEventListener("keydown", resetUserActivity);

    return () => {
      unsubscribe();
      window.removeEventListener("mousemove", resetUserActivity);
      window.removeEventListener("keydown", resetUserActivity);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
