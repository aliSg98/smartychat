import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyC-dgC2E2BRi3bDf84Bz3Haf9cLatwRfWU",
    authDomain: "chat-3f7d4.firebaseapp.com",
    projectId: "chat-3f7d4",
    storageBucket: "chat-3f7d4.appspot.com",
    messagingSenderId: "380253354668",
    appId: "1:380253354668:web:5250963f71700fca1c3d09"
  }).auth();