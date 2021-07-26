import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCXVpfwXkzAnyS2Z54mqDqbofjceAzml9U',
  authDomain: 'crwn-db-kad.firebaseapp.com',
  databaseURL: 'https://crwn-db-kad.firebaseio.com',
  projectId: 'crwn-db-kad',
  storageBucket: 'crwn-db-kad.appspot.com',
  messagingSenderId: '149134998868',
  appId: '1:149134998868:web:a82e13beb6934fd0535cc1',
  measurementId: "G-SH1BF1ELC8"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
