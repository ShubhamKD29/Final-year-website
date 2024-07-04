 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
 import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
 import {getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyD9G7oHjDRmih2_mpJRaUbUSQSBzWd2shk",
   authDomain: "quickbitzz-firebase.firebaseapp.com",
   projectId: "quickbitzz-firebase",
   storageBucket: "quickbitzz-firebase.appspot.com",
   messagingSenderId: "823056159143",
   appId: "1:823056159143:web:b3170e103f1739b09be682"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const signUp = document.getElementById('signup');
 signUp.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const auth = getAuth();
    const db = getFirestore();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        const userData = {
            email : email
        };

        // Store user data in Firestore
      setDoc(doc(db, 'users', user.uid), userData)
      .then(() => {
        console.log('User data stored successfully');
        // Redirect to index.html
        window.location.href = "index.html";
      })
      .catch((error) => {
        console.error('Error storing user data: ', error);
      });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Error creating user: ', errorCode, errorMessage);
  });
});





