import React from "react";
import { useEffect, useState } from "react";
import { checkIfUserOnline, initFirebasePresence } from "./firebase/firebasePresence";

interface Props {
  avatar: { photoURL?: string | null | undefined; username?: string; userId: string; width?: string; height?: string; avatarSize?: string };
}

const Avatar: React.FC<Props> = ({ avatar }) => {
  const [isOnline, setIsOnline] = useState(true);
  const avatarDimensions = avatar?.avatarSize || "h-11 w-11 sm:h-14 sm:w-14";
  const imageWidth = avatar?.width || 100;
  const imageHeight = avatar?.height || 100;

  useEffect(() => {
    initFirebasePresence();
    if (avatar?.userId) checkIfUserOnline(avatar.userId, setIsOnline);
  }, [avatar]);

  return (
    <div className="relative cursor-pointer">
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

export default Avatar;
