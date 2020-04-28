import firebase from 'firebase'; 

const firebaseConfig = {
    apiKey: "AIzaSyC9asBYezkoPAwspoxkPNmnSnGNdHNgHdM",
    authDomain: "frameofmind-1ee0c.firebaseapp.com",
    databaseURL: "https://frameofmind-1ee0c.firebaseio.com",
    projectId: "frameofmind-1ee0c",
    storageBucket: "frameofmind-1ee0c.appspot.com",
    messagingSenderId: "748452614533",
    appId: "1:748452614533:web:250090f8cc8114832c74ec"
};
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

export default firebase;
