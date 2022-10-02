import React from "react";
import { useEffect, useState } from "react";
var Avatar = function (_a) {
    var avatar = _a.avatar;
    // const [isOnline, setIsOnline] = useState(true);
    var isOnline = useState(true)[0];
    var avatarDimensions = (avatar === null || avatar === void 0 ? void 0 : avatar.avatarSize) || "h-11 w-11 sm:h-14 sm:w-14";
    var imageWidth = (avatar === null || avatar === void 0 ? void 0 : avatar.width) || 100;
    var imageHeight = (avatar === null || avatar === void 0 ? void 0 : avatar.height) || 100;
    useEffect(function () {
        // initFirebasePresence();
        // if (avatar?.userId) checkIfUserOnline(avatar.userId, setIsOnline);
    }, [avatar]);
    return (React.createElement("div", { className: "relative cursor-pointer" },
        avatar.photoURL && (React.createElement("a", { href: "".concat(avatar.photoURL) },
            React.createElement("div", { className: "".concat(avatarDimensions, " rounded-full overflow-hidden hover:ring-4 hover:ring-primary-500 duration-200") },
                React.createElement("img", { src: avatar.photoURL, className: "h-full w-full object-cover", alt: avatar.username, title: avatar.username, referrerPolicy: "no-referrer", width: imageWidth, height: imageHeight })))),
        avatar.userId &&
            (isOnline ? (React.createElement("span", { className: "absolute -bottom-2 right-0 ml-2 mb-2 rounded-full ring-0 w-3 h-3 bg-green-500", title: "Online" })) : (React.createElement("span", { className: "absolute -bottom-2 right-0 ml-2 mb-2 rounded-full ring-0 w-3 h-3 bg-slate-600", title: "Offline" })))));
};
export default Avatar;
