// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyBKHLgrABiOjTfWxbY6A135XU1fSe984F8",
    authDomain: "project-logg-inn.firebaseapp.com",
    projectId: "project-logg-inn",
    storageBucket: "project-logg-inn.appspot.com",
    messagingSenderId: "536458783529",
    appId: "1:536458783529:web:e894e81ec1ff200c076538"
  });

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

//login function
const logIn = ()=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
    //Logged In
    window.location.href = "\Final-year-project\Final-year-website\public\index.html";
    console.log(result);
  // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
  });

}

//signup function
const signUp = ()=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Sign up
        window.location.href = "\Final-year-project\Final-year-website\public\index.html";
        console.log(result);
      // ...
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      // ..
    });
  }