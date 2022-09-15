import {
  REACT_APP_APIKEY,
  REACT_APP_AUTHDOMAIN,
  REACT_APP_PROJECTID,
  REACT_APP_STORAGEBUCKET,
  REACT_APP_MESSAGINGSENDER,
  REACT_APP_APPID,
} from "@env";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: REACT_APP_APIKEY,
  authDomain: REACT_APP_AUTHDOMAIN,
  projectId: REACT_APP_PROJECTID,
  storageBucket: REACT_APP_STORAGEBUCKET,
  messagingSenderId: REACT_APP_MESSAGINGSENDER,
  appId: REACT_APP_APPID,
};

const client = initializeApp(firebaseConfig);

const useFirebase = () => {
  return { client };
};

export default useFirebase;
