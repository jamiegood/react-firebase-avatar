import { getDatabase, ref, onValue, set, onDisconnect, serverTimestamp } from "firebase/database";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// let thisFirebaseApp;

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
    //console.log("data status userStatusDatabaseRef:: ", data?.state);
    const currentOnlineStatus = data?.state === "online";

    if (isOnline !== currentOnlineStatus) {
      callback(currentOnlineStatus);
    }
  });
}

const initFirebasePresence = (firebaseConfig: any) => {
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
