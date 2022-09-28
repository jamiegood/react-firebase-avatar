import { auth } from "./firebase";
import { signOut } from "firebase/auth";

export default function LogoutBtn() {
  const logOut = () => {
    console.log("logout clicked");

    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("logout success ");
      })
      .catch((error) => {
        // An error happened.
        console.log("logout failed");
      });
  };
  return <button onClick={logOut}>Logout</button>;
}
