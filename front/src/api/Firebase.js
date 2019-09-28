import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyArZTIJrEHm1eUPya_j5CjKRnDjpHuVc1Y",
    authDomain: "meaningfulcollab.firebaseapp.com",
    databaseURL: "https://meaningfulcollab.firebaseio.com",
    projectId: "meaningfulcollab",
    storageBucket: "meaningfulcollab.appspot.com",
    messagingSenderId: "242539057823",
    appId: "1:242539057823:web:b69cf8723e5aa33cf1c8aa",
    measurementId: "G-ZXC5JHHL10"
};
firebase.initializeApp(config);

export default firebase;