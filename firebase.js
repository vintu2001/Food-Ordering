import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB5wU-kjJ9O6DXdrYB325jI7Gpb2Gaqex4",
  authDomain: "foodordering-react-native.firebaseapp.com",
  projectId: "foodordering-react-native",
  storageBucket: "foodordering-react-native.appspot.com",
  messagingSenderId: "574378721974",
  appId: "1:574378721974:web:9ed7ff5acbc6fe60d59c17",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
