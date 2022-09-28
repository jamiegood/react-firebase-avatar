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
        <h1 className=" text-4xl text-center">Firebase Presence Demo</h1>
      </header>

      <div>
        <div className="flex flex-col items-center mt-16">
          <p>UID: {uid}</p>

          {photoURL && <Avatar photoURL={photoURL} />}
          {!user && <LoginForm />}
          {user && <LogoutBtn />}
          <SayHello name="Jamie was here" />
        </div>
      </div>
    </div>
  );
}

export default App;
