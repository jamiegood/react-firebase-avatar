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

let thisFirebaseApp;

let database: any;
let auth: any;

function presenceService() {
  var uid = auth.currentUser?.uid;

  const userStatusDatabaseRef = ref(database, "/status/" + uid);
  var isOfflineForDatabase = {
    state: "offline",
    last_changed: serverTimestamp(),
  };

  var isOnlineForDatabase = {
    state: "online",
    last_changed: serverTimestamp(),
  };

  const infoConnectedRef = ref(database, ".info/connected");
  onValue(infoConnectedRef, (snapshot: any) => {
    const data = snapshot.val();
    if (data === true) {
      set(userStatusDatabaseRef, isOnlineForDatabase);
      onDisconnect(userStatusDatabaseRef).set(isOfflineForDatabase);
    } else {
      set(userStatusDatabaseRef, isOfflineForDatabase);
    }
  });
}

async function checkIfIAmOnline(callback: any) {
  var uid = auth.currentUser?.uid;

  if (uid) {
    return callback("true");
  } else {
    return callback("false");
  }
}
function checkIfUserOnline(uid: string, callback: any, isOnline: any) {
  const userStatusDatabaseRef = ref(database, "/status/" + uid);
  onValue(userStatusDatabaseRef, (snapshot: any) => {
    const data = snapshot.val();
    console.log("data status userStatusDatabaseRef:: ", data?.state);
    const currentOnlineStatus = data?.state === "online";

    if (isOnline === currentOnlineStatus) {
      console.log("still online");
    } else {
      callback(currentOnlineStatus);
    }
  });
}

const initFirebasePresence = (firebaseConfig: any) => {
  console.log(firebaseConfig);

  initializeApp(firebaseConfig);
  database = getDatabase();
  auth = getAuth();
  onAuthStateChanged(auth, (user: any) => {
    if (user) {
      presenceService();
    } else {
    }
  });
};

export { initFirebasePresence, checkIfIAmOnline, checkIfUserOnline };
