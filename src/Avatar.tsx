import React, { useState, useEffect } from "react";
import { checkIfUserOnline, initFirebasePresence } from "./firebasePresence";
//import { initializeApp } from "firebase/app";

interface Props {
  avatar: {
    photoURL?: string | null | undefined;
    username?: string;
    userId?: string;
    width?: string;
    height?: string;
    avatarSize?: string;
  };
}

let thisfirebaseConfig: any;

const Avatar: React.FC<Props> = ({ avatar }) => {
  const [isOnline, setIsOnline] = useState(false);
  const avatarDimensions = avatar?.avatarSize || "h-11 w-11 sm:h-14 sm:w-14";
  const imageWidth = avatar?.width || 100;
  const imageHeight = avatar?.height || 100;
  //const isOnline = true;
  useEffect(() => {
    if (thisfirebaseConfig) {
      console.log("Firebase: ", thisfirebaseConfig);
      initFirebasePresence(thisfirebaseConfig);
      if (avatar?.userId) {
        console.log("avatar uiser is null:", avatar?.userId);

        checkIfUserOnline(avatar.userId, setIsOnline);
      } else {
        console.log("avatar uiser is null");
      }
    } else {
      console.log("firebase Config missing ");
    }
  }, []);

  return (
    <div className="relative cursor-pointer">
      {avatar?.userId}
      {avatar.photoURL && (
        <a href={`${avatar.photoURL}`}>
          <div className={`${avatarDimensions} rounded-full overflow-hidden hover:ring-4 hover:ring-primary-500 duration-200`}>
            <img
              src={avatar.photoURL}
              className="h-full w-full object-cover"
              alt={avatar.username}
              title={avatar.username}
              referrerPolicy="no-referrer"
              width={imageWidth}
              height={imageHeight}
            />
          </div>
        </a>
      )}
      {avatar.userId &&
        (isOnline ? (
          <span className="absolute -bottom-2 right-0 ml-2 mb-2 rounded-full ring-0 w-3 h-3 bg-green-500" title="Online"></span>
        ) : (
          <span className="absolute -bottom-2 right-0 ml-2 mb-2 rounded-full ring-0 w-3 h-3 bg-slate-600" title="Offline"></span>
        ))}
    </div>
  );
};

const FirebaseInit = (firebaseConfig: any) => {
  console.log("firebaseConfig", firebaseConfig);

  console.log(firebaseConfig);
  thisfirebaseConfig = firebaseConfig;
  //return firebaseApp;
};
export { Avatar, FirebaseInit };
