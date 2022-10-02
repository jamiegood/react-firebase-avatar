import { getDatabase, ref, onValue, set, onDisconnect, serverTimestamp } from "firebase/database";
import { onAuthStateChanged, getAuth } from "firebase/auth";

const database = getDatabase();
const auth = getAuth();

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
function checkIfUserOnline(uid: string, callback: any) {
  const userStatusDatabaseRef = ref(database, "/status/" + uid);
  onValue(userStatusDatabaseRef, (snapshot: any) => {
    const data = snapshot.val();
    const isOnline = data?.state === "online";
    callback(isOnline);
  });
}

const initFirebasePresence = () => {
  onAuthStateChanged(auth, (user: any) => {
    if (user) {
      presenceService();
    } else {
    }
  });
};

export { initFirebasePresence, checkIfIAmOnline, checkIfUserOnline };
