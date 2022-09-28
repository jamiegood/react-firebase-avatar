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
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="p-8">
          <div className="space-y-4">
            <button
              className="bg-black text-white  btn-secondary btn-with-icon text-base flex justify-center px-3 py-4 w-full"
              onClick={logOut}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
