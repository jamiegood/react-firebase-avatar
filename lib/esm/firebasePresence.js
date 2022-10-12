var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { getDatabase, ref, onValue, set, onDisconnect, serverTimestamp } from "firebase/database";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey: "AIzaSyDWzJ6ndkwGxg4osanBoMY8GNzn-nc5xlU",
//   authDomain: "dev2dev-184c2.firebaseapp.com",
//   databaseURL: "https://dev2dev-184c2-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "dev2dev-184c2",
//   storageBucket: "dev2dev-184c2.appspot.com",
//   messagingSenderId: "630811241733",
//   appId: "1:630811241733:web:3b275b347eb889b7dcdb6c",
//   measurementId: "G-F19Y04ZN6S",
// };
// Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
var thisFirebaseApp;
var database;
var auth;
function presenceService() {
    var _a;
    var uid = (_a = auth.currentUser) === null || _a === void 0 ? void 0 : _a.uid;
    var userStatusDatabaseRef = ref(database, "/status/" + uid);
    var isOfflineForDatabase = {
        state: "offline",
        last_changed: serverTimestamp(),
    };
    var isOnlineForDatabase = {
        state: "online",
        last_changed: serverTimestamp(),
    };
    var infoConnectedRef = ref(database, ".info/connected");
    onValue(infoConnectedRef, function (snapshot) {
        var data = snapshot.val();
        if (data === true) {
            set(userStatusDatabaseRef, isOnlineForDatabase);
            onDisconnect(userStatusDatabaseRef).set(isOfflineForDatabase);
        }
        else {
            set(userStatusDatabaseRef, isOfflineForDatabase);
        }
    });
}
function checkIfIAmOnline(callback) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var uid;
        return __generator(this, function (_b) {
            uid = (_a = auth.currentUser) === null || _a === void 0 ? void 0 : _a.uid;
            if (uid) {
                return [2 /*return*/, callback("true")];
            }
            else {
                return [2 /*return*/, callback("false")];
            }
            return [2 /*return*/];
        });
    });
}
function checkIfUserOnline(uid, callback) {
    var userStatusDatabaseRef = ref(database, "/status/" + uid);
    onValue(userStatusDatabaseRef, function (snapshot) {
        var data = snapshot.val();
        console.log("data status userStatusDatabaseRef:: ", data === null || data === void 0 ? void 0 : data.state);
        var isOnline = (data === null || data === void 0 ? void 0 : data.state) === "online";
        callback(isOnline);
    });
}
var initFirebasePresence = function (firebaseConfig) {
    console.log(firebaseConfig);
    initializeApp(firebaseConfig);
    database = getDatabase();
    auth = getAuth();
    onAuthStateChanged(auth, function (user) {
        if (user) {
            presenceService();
        }
        else {
        }
    });
};
export { initFirebasePresence, checkIfIAmOnline, checkIfUserOnline };
