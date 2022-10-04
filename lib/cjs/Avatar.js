"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseInit = exports.Avatar = void 0;
var react_1 = __importStar(require("react"));
var firebasePresence_1 = require("./firebasePresence");
var FirebaseApp;
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
    var _b = (0, react_1.useState)(false), isOnline = _b[0], setIsOnline = _b[1];
    var avatarDimensions = (avatar === null || avatar === void 0 ? void 0 : avatar.avatarSize) || "h-11 w-11 sm:h-14 sm:w-14";
    var imageWidth = (avatar === null || avatar === void 0 ? void 0 : avatar.width) || 100;
    var imageHeight = (avatar === null || avatar === void 0 ? void 0 : avatar.height) || 100;
    //const isOnline = true;
    (0, react_1.useEffect)(function () {
        if (FirebaseApp) {
            console.log("Firebase: ", FirebaseApp);
            (0, firebasePresence_1.initFirebasePresence)(FirebaseApp);
        }
        if (avatar === null || avatar === void 0 ? void 0 : avatar.userId)
            (0, firebasePresence_1.checkIfUserOnline)(avatar.userId, setIsOnline);
    }, []);
    return (react_1.default.createElement("div", { className: "relative cursor-pointer" },
        avatar.photoURL && (react_1.default.createElement("a", { href: "".concat(avatar.photoURL) },
            react_1.default.createElement("div", { className: "".concat(avatarDimensions, " rounded-full overflow-hidden hover:ring-4 hover:ring-primary-500 duration-200") },
                react_1.default.createElement("img", { src: avatar.photoURL, className: "h-full w-full object-cover", alt: avatar.username, title: avatar.username, referrerPolicy: "no-referrer", width: imageWidth, height: imageHeight })))),
        avatar.userId &&
            (isOnline ? (react_1.default.createElement("span", { className: "absolute -bottom-2 right-0 ml-2 mb-2 rounded-full ring-0 w-3 h-3 bg-green-500", title: "Online" })) : (react_1.default.createElement("span", { className: "absolute -bottom-2 right-0 ml-2 mb-2 rounded-full ring-0 w-3 h-3 bg-slate-600", title: "Offline" })))));
};
exports.Avatar = Avatar;
var FirebaseInit = function (firebaseApp) {
    console.log("firebaseIniti", firebaseApp);
    console.log(firebaseApp);
    // FirebaseApp = firebaseApp;
    //return firebaseApp;
};
exports.FirebaseInit = FirebaseInit;
