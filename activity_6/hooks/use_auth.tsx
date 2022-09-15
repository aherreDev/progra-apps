import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  User,
  signInWithEmailAndPassword,
} from "firebase/auth";
import useFirebase from "./use_firebase";

const useAuth = () => {
  const { client } = useFirebase();
  const auth = getAuth(client);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const signup = async (email: string, password: string, userName: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // setCurrentUser(userCredential);
      if (userCredential.user) {
        updateProfile(userCredential.user, { displayName: userName });
      }

      return userCredential;
    } catch (e) {
      console.error("Unable to create user", e);
      setError("Unable to create user, try with different email or password");
      setCurrentUser(null);

      return false;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // setCurrentUser(userCredential);
      return userCredential;
    } catch (e) {
      console.error("Unable to login", e);
      setError("Unable to login, try with different email or password");
      setCurrentUser(null);

      return false;
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
      setCurrentUser(null);
    } catch (e) {
      console.error("Unable to logout", e);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user as User);
      }

      if (currentUser && !user) setCurrentUser(null);
    });

    return unsubscribe;
  }, []);

  return { signup, login, currentUser, error, logout };
};

export default useAuth;
