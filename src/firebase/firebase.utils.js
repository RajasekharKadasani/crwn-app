import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
 apiKey: "AIzaSyCXVpfwXkzAnyS2Z54mqDqbofjceAzml9U",
 authDomain: "crwn-db-kad.firebaseapp.com",
 projectId: "crwn-db-kad",
 storageBucket: "crwn-db-kad.appspot.com",
 messagingSenderId: "149134998868",
 appId: "1:149134998868:web:a82e13beb6934fd0535cc1",
 measurementId: "G-SH1BF1ELC8"
};
 
firebase.initializeApp(config);

export const auth= firebase.auth();
export const firestore =firebase.firestore();

const provider =new firebase.auth.GithubAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInGoogle=()=>auth.signInWithPopup(provider);

export default firebase;
