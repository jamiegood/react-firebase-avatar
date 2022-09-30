import { useEffect } from "react";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";

import { auth, database } from "./index";

function rtdb_and_local_fs_presence() {
  var uid = auth().currentUser.uid;
  console.log("rtdb_and_local_fs_presence: ", uid);
  //var userStatusDatabaseRef = database().ref("/status/" + uid);

  const userStatusDatabaseRef = ref(database, "/status/" + uid);
  var isOfflineForDatabase = {
    state: "offline",
    last_changed: database.ServerValue.TIMESTAMP,
  };

  var isOnlineForDatabase = {
    state: "online",
    last_changed: database.ServerValue.TIMESTAMP,
  };

  //var userStatusFirestoreRef = firestore().doc("/status/" + uid);

  // var isOfflineForFirestore = {
  //   state: "offline",
  //   last_changed: firebase.firestore.FieldValue.serverTimestamp(),
  // };

  // var isOnlineForFirestore = {
  //   state: "online",
  //   last_changed: firebase.firestore.FieldValue.serverTimestamp(),
  // };

  const infoConnectedRef = ref(database, ".info/connected");
  onValue(infoConnectedRef, (snapshot) => {
    const data = snapshot.val();
    if (data === false) {
      // userStatusDatabaseRef.set(isOfflineForDatabase);
      set(userStatusDatabaseRef, isOfflineForDatabase);
      return;
    }
    set(userStatusDatabaseRef, isOnlineForDatabase);
    return;
    // updateStarCount(postElement, data);
  });

  // database()
  //   .ref(".info/connected")
  //   .on("value", function (snapshot) {
  //     if (snapshot.val() === false) {
  //       // Instead of simply returning, we'll also set Firestore's state
  //       // to 'offline'. This ensures that our Firestore cache is aware
  //       // of the switch to 'offline.'
  //       //userStatusFirestoreRef.set(isOfflineForFirestore);
  //       userStatusDatabaseRef.set(isOfflineForDatabase);

  //       return;
  //     }

  //     userStatusDatabaseRef
  //       .onDisconnect()
  //       .set(isOfflineForDatabase)
  //       .then(function () {
  //         userStatusDatabaseRef.set(isOnlineForDatabase);
  //         // We'll also add Firestore set here for when we come online.
  //         // userStatusFirestoreRef.set(isOnlineForFirestore);
  //       });
  //   });
}

async function checkIfIAmOnline(callback) {
  var uid = auth().currentUser?.uid;
  console.log(uid);
  if (uid) {
    // var userStatusFirestoreRef = firestore().doc("/status/" + uid);
    // userStatusFirestoreRef.onSnapshot(function (doc) {
    //   var isOnline = doc.data().state === "online";
    //   callback(isOnline);
    // });
    callback("true");
  } else {
    return callback("false");
  }
}
function checkIfUserOnline(uid, callback) {
  // const userOnlineFirestoreRef = firebase.firestore().doc("/status/" + uid);
  // userOnlineFirestoreRef.onSnapshot(function (doc) {
  //   var isOnline = doc.data()?.state == "online";
  //   callback(isOnline);
  // });
}
const authStateChanged = async (authState) => {
  // if (authState) {
  //   rtdb_and_local_fs_presence();
  // }

  console.log("authStateChanged");
};

const initFirebasePresence = () => {
  // useEffect(() => {
  //   // const unsubscribe = auth().onAuthStateChanged(authStateChanged);

  //   // return () => unsubscribe();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("PRESENSEuser signed In");

      // avatar = {

      // }
    } else {
      // User is signed out
      console.log("PRESENSEuser signed out");

      // ...
    }
  });
  // }, []);
};

export { initFirebasePresence, checkIfIAmOnline, checkIfUserOnline };
