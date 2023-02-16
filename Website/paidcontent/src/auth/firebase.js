import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getStripePayments } from '@stripe/firestore-stripe-payments';

const firebaseConfig = {
    apiKey: "AIzaSyC5j-MCGsC12t1Dtb5O6NzeYHbbkw7PBJM",
    authDomain: "arrayassistant-bac51.firebaseapp.com",
    projectId: "arrayassistant-bac51",
    storageBucket: "arrayassistant-bac51.appspot.com",
    messagingSenderId: "328828628249",
    appId: "1:328828628249:web:96d74137ca1fedc84ee988",
    measurementId: "G-RF5RR7J04W"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const payments = getStripePayments(app, {
    productsCollection: "products",
    customersCollection: "customers"
})

export { app, db, auth, };