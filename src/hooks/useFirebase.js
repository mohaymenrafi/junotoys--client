import axios from 'axios';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import firebaseInit from '../firebase/firebase.init';

firebaseInit();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const saveUser = (email, displayName) => {
    const dbuser = { email, displayName };
    axios
      .post(`http://localhost:5000/users`, dbuser)
      .then((res) => console.log(res.data));
  };
  const saveUserForGoogle = (email, displayName) => {
    const dbuser = { email, displayName };
    axios
      .put(`http://localhost:5000/users`, dbuser)
      .then((res) => console.log(res.data));
  };

  const googleSignIn = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        saveUserForGoogle(result.user.email, result.user.displayName);
        setUser(result.user);
        const destination = location?.state?.from || '/dashboard';
        history.push(destination);
      })
      .catch((error) => console.error(error.message))
      .finally(() => setIsLoading(false));
  };

  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        const loggedUser = userCredential.user;
        // save user to database
        saveUser(email, name);

        // updating name to firebase
        await updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => console.error(error.message));
        console.log(loggedUser);
        history.push('/dashboard');
      })
      .catch((error) => console.error(error.message))
      .finally(() => setIsLoading(false));
  };

  /* eslint-disable no-unused-vars */
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password, location, history)
      .then((userCredential) => {
        const uri = location?.state?.from || '/dashboard';
        history.push(uri);
      })
      .catch((error) => console.error(error.message))
      .finally(() => setIsLoading(false));
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => console.error(error.message))
      .finally(() => setIsLoading(false));
  };
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      if (loggedUser) {
        setUser(loggedUser);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  useEffect(() => {
    axios(`http://localhost:5000/users/${user?.email}`).then((res) => {
      setAdmin(res.data.admin);
    });
  }, [user?.email]);

  return {
    googleSignIn,
    logOut,
    user,
    registerUser,
    loginUser,
    isLoading,
    admin,
  };
};

export default useFirebase;
