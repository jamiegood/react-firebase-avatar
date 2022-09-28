import { auth } from "./firebase";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function LoginForm() {
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user, token);

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="p-8">
            <div className="space-y-4">
              <button
                className="btn-secondary btn-with-icon text-base flex justify-center px-3 py-4 w-full"
                onClick={signInWithGoogle}
              >
                <FcGoogle className="h-6 w-6" />
                <span>Sign in with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
