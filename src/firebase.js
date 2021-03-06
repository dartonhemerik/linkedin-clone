import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDUxuPtN-h1rJqRHRXX4j9PL9AD8NYk8n4',
  authDomain: 'linkedin-clone-dh.firebaseapp.com',
  projectId: 'linkedin-clone-dh',
  storageBucket: 'linkedin-clone-dh.appspot.com',
  messagingSenderId: '781944369975',
  appId: '1:781944369975:web:34c7375920a3f87041a0b2',
  measurementId: 'G-RXNLH93N1V',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
// export default db;
