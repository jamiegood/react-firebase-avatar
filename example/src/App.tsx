import React, { useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import "./index.css";
import SayHello from "typescript-react-test";
import LoginForm from "./LoginForm";
import LogoutBtn from "./LogoutBtn";
import Avatar from "./Avatar";

// type Avatar = {} | null;

type User = {
  uid: string;
  photoURL?: string | null | undefined;
  displayName?: string;
};
function App() {
  // const user = auth.currentUser;
  const [uid, setUid] = useState("");
  const [photoURL, setPhotoURL] = useState<string | null>("");
  //const [auser, setAUser] = useState<AUser>({} as AUser);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        const uid = user.uid;
        console.log(user, uid);
        console.log("user signed In");
        setUid(uid);
        setPhotoURL(user.photoURL);
        console.log({ uid: user.uid, photoURL: user.photoURL });
        setUser({ uid: user.uid, photoURL: user.photoURL });

        // avatar = {

        // }
      } else {
        // User is signed out
        console.log("user signed out");
        // setUid("");
        // setPhotoURL("");

        // ...
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
          <p>UID: {uid}</p>
          <p>user: {user?.uid}</p>

          {user && photoURL && <Avatar avatar={{ userId: user.uid, photoURL: user?.photoURL, username: user.displayName }} />}
          {!user && <LoginForm />}
          {user && <LogoutBtn />}
          <SayHello name="Jamie was here" />
        </div>
      </div>
    </div>
  );
}

export default App;
