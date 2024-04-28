import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDPj6i_vZSMqeBAyXDgeYRcZKw0W5vvIio",
  authDomain: "etsafe.firebaseapp.com",
  projectId: "etsafe",
  storageBucket: "etsafe.appspot.com",
  messagingSenderId: "63661921427",
  appId: "1:63661921427:web:08465738fcf0618f62a966",
  measurementId: "G-3QNVTC45GH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const btnIniciarSesion = document.getElementById('btnIniciarSesion');

btnIniciarSesion.addEventListener('click', () => {
  // Prevent default form submission behavior (if applicable)
  event.preventDefault();

  window.location.href = "index.html";
});