const firebase = require('firebase/app');

const firebaseConfig = {
    apiKey: "AIzaSyC5j-MCGsC12t1Dtb5O6NzeYHbbkw7PBJM",
    authDomain: "arrayassistant-bac51.firebaseapp.com",
    projectId: "arrayassistant-bac51",
    storageBucket: "arrayassistant-bac51.appspot.com",
    messagingSenderId: "328828628249",
    appId: "1:328828628249:web:96d74137ca1fedc84ee988",
    measurementId: "G-RF5RR7J04W"
}

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const email = document.getElementById("email");
const pass = document.getElementById("pass");

document.getElementById("buttonSubmit")
    .addEventListener('click', () => {
        signInWithEmailAndPassword(auth, email.value, pass.value)
            .then((userCredential) => {
                console.log(userCredential);
                const user = userCredential.user;
                return user;
            })
            .catch((err) => {
                console.log({ message: err.message });
            })
    })
