import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBX3d-uRBPzfD4CRAqz6hvcg9ovauhpePs",
    authDomain: "discord-clone-ab4cc.firebaseapp.com",
    projectId: "discord-clone-ab4cc",
    storageBucket: "discord-clone-ab4cc.appspot.com",
    messagingSenderId: "271246919311",
    appId: "1:271246919311:web:543079419b180d1fddd2fa"
  };

  const app = firebase.initializeApp(firebaseConfig);

  const db = app.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth,provider,db };