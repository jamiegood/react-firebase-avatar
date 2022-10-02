import { auth } from "./firebase";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function LoginForm() {
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="p-8">
            <div className="space-y-4">
              <button
                className="bg-black text-white  btn-secondary btn-with-icon text-base flex justify-center px-3 py-4 w-full"
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
