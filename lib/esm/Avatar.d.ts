import React from "react";
interface Props {
    avatar: {
        photoURL?: string | null | undefined;
        username?: string;
        userId?: string | null | undefined;
        width?: string;
        height?: string;
        avatarSize?: string;
    };
}
declare const Avatar: React.FC<Props>;
declare const FirebaseInit: (firebaseConfig: any) => void;
export { Avatar, FirebaseInit };
