import * as firebase from "firebase";

export const db = firebase
  .initializeApp({ storageBucket: "samurai-e00ed.appspot.com" })
  .storage();
