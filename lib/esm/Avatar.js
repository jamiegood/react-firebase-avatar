import React, { useState, useEffect } from "react";
import { checkIfUserOnline, initFirebasePresence } from "./firebasePresence";
var thisfirebaseConfig;
// const Avatar: React.FC<Props> = ({}) => {
//   const [isOnline, setIsOnline] = useState(true);
//   return <div>this is ok</div>;
// };
// const Avatar = ({ avatar }: Props) => {
//   const [count] = useState<number>(0);
//   return (
//     <div>
//       {avatar.userId} :: {count}
//     </div>
//   );
// };
var Avatar = function (_a) {
    var avatar = _a.avatar;
    var _b = useState(false), isOnline = _b[0], setIsOnline = _b[1];
    var avatarDimensions = (avatar === null || avatar === void 0 ? void 0 : avatar.avatarSize) || "h-11 w-11 sm:h-14 sm:w-14";
    var imageWidth = (avatar === null || avatar === void 0 ? void 0 : avatar.width) || 100;
    var imageHeight = (avatar === null || avatar === void 0 ? void 0 : avatar.height) || 100;
    //const isOnline = true;
    useEffect(function () {
        if (thisfirebaseConfig) {
            console.log("Firebase: ", thisfirebaseConfig);
            initFirebasePresence(thisfirebaseConfig);
            if (avatar === null || avatar === void 0 ? void 0 : avatar.userId) {
                console.log("avatar uiser is null:", avatar === null || avatar === void 0 ? void 0 : avatar.userId);
                checkIfUserOnline(avatar.userId, setIsOnline);
            }
            else {
                console.log("avatar uiser is null");
            }
        }
        else {
            console.log("firebase Config missing ");
        }
    }, []);
    return (React.createElement("div", { className: "relative cursor-pointer" }, avatar === null || avatar === void 0 ? void 0 :
        avatar.userId,
        avatar.photoURL && (React.createElement("a", { href: "".concat(avatar.photoURL) },
            React.createElement("div", { className: "".concat(avatarDimensions, " rounded-full overflow-hidden hover:ring-4 hover:ring-primary-500 duration-200") },
                React.createElement("img", { src: avatar.photoURL, className: "h-full w-full object-cover", alt: avatar.username, title: avatar.username, referrerPolicy: "no-referrer", width: imageWidth, height: imageHeight })))),
        avatar.userId &&
            (isOnline ? (React.createElement("span", { className: "absolute -bottom-2 right-0 ml-2 mb-2 rounded-full ring-0 w-3 h-3 bg-green-500", title: "Online" })) : (React.createElement("span", { className: "absolute -bottom-2 right-0 ml-2 mb-2 rounded-full ring-0 w-3 h-3 bg-slate-600", title: "Offline" })))));
};
var FirebaseInit = function (firebaseConfig) {
    console.log("firebaseConfig", firebaseConfig);
    console.log(firebaseConfig);
    thisfirebaseConfig = firebaseConfig;
    //return firebaseApp;
};
export { Avatar, FirebaseInit };
