import '../styles/styles.scss'
import {useEffect, useState} from "react";
import Step from "./Step";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase";

function MyApp({ Component, pageProps }) {
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
            <Component {...pageProps} />
    );
  }
}

export default MyApp;