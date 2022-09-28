import React from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import "./index.css";
import SayHello from "typescript-react-test";
import LoginForm from "./LoginForm";
import LogoutBtn from "./LogoutBtn";
import Avatar from "./Avatar";

function App() {
  const user = auth.currentUser;
  const [uid, setUid] = useState("");
  const [photoURL, setPhotoURL] = useState<string | null>("");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(user, uid);
      console.log("user signed In");
      setUid(uid);
      setPhotoURL(user.photoURL);
    } else {
      // User is signed out
      console.log("user signed out");
      setUid("");
      setPhotoURL("");

      // ...
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="font-bold underline text-6xl">Hello world!</h1>
        <p>UID: {uid}</p>
        Firebase Presense Demo
        {photoURL && <Avatar photoURL={photoURL} />}
        {!user && <LoginForm />}
        {user && <LogoutBtn />}
        <SayHello name="Jamie was here" />
      </header>
    </div>
  );
}

export default App;
