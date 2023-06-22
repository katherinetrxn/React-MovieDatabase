import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState, useContext, useMemo } from "react";
import { auth } from "../firebase";

// Context API
const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingInitial, setLoadingInitial] = useState(true);

  // In Firebase, you have a snapshot listener, which is a listener that listens for changes in the database such as when a user signs in or signs out. You can use this listener to update the state of your application.
  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // logged in
          setUser(user);
        } else {
          // logged out
          setUser(null);
        }

        setLoadingInitial(false);
      }),
    []
  );

  // Initialize Firebase
  const signIn = async (email, password) => {
    if (!email || !password) return;

    setLoading(true);

    await signInWithEmailAndPassword(auth, email, password)
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  const register = async (email, password) => {
    if (!email || !password) return;

    setLoading(true);

    await createUserWithEmailAndPassword(auth, email, password)
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  const logout = async () => {
    await signOut(auth).catch((error) => setError(error));
  };

  const memoedValue = useMemo(
    () => ({
      user,
      error,
      loading,
      signIn,
      register,
      logout,
    }),
    [user, error, loading] // only recompute the memoized value when these values change
  );

  // If we didn't do memoization, then the whole tree below would rerender everytime
  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
