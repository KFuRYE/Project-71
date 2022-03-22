import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyD6iiOnPq4F2C5UH1M5fQbkNWaar6ANXgM",
    authDomain: "pro-71-19a4d.firebaseapp.com",
    projectId: "pro-71-19a4d",
    storageBucket: "pro-71-19a4d.appspot.com",
    messagingSenderId: "351835392531",
    appId: "1:351835392531:web:1eacb4db19303c3caccde6"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
