import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQreDUfRTYaPLr3nz_iyHMQTmjh0aMB98",
  authDomain: "iceblogs-275bf.firebaseapp.com",
  projectId: "iceblogs-275bf",
  storageBucket: "iceblogs-275bf.appspot.com",
  messagingSenderId: "495949529166",
  appId: "1:495949529166:web:e887c6ecc141980c4c031f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { timeStamp };
export default firebaseApp;
