import React, { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useHandleLoggin = () => {
  const [logged, setLogged] = useState(false);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setLogged(true);
    } else {
      setLogged(false);
    }
  });

  return {
    logged,
    setLogged,
  };
};

export { useHandleLoggin };
