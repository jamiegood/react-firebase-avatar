import React, { useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import "./index.css";
import LoginForm from "./LoginForm";
import LogoutBtn from "./LogoutBtn";

// Initialise your firebase with config
import { firebaseApp } from "./firebase";
import Avatar from "typescript-react-test";

type User = {
  uid: string;
  photoURL?: string | null | undefined;
  displayName?: string;
};
function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ uid: user.uid, photoURL: user?.photoURL });
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className=" text-4xl text-center">Firebase Presence Demo</h1>
      </header>

      <div>
        <div className="flex flex-col items-center mt-16">
          {user && <Avatar avatar={{ userId: user.uid, photoURL: user?.photoURL, username: user.displayName }} />}
          {user ? <LogoutBtn /> : <LoginForm />}
        </div>
      </div>
    </div>
  );
}

export default App;
