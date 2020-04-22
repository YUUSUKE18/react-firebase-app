import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBTjAjuMCFNp_Q7aQRAKYyakltqNEDK_mQ",
    authDomain: "chatappreact-6e39d.firebaseapp.com",
    databaseURL: "https://chatappreact-6e39d.firebaseio.com",
    projectId: "chatappreact-6e39d",
    storageBucket: "chatappreact-6e39d.appspot.com",
    messagingSenderId: "953672212728",
    appId: "1:953672212728:web:f028266ba35218e0319b0d"
  };

  firebase.initializeApp(firebaseConfig);

  firebase.firestore().settings({timestampsInSnapshots: true});
  export default firebase;