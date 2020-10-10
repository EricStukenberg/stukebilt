import app from 'firebase/app';
import 'firebase/storage'
  
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDV5pIFVf1xZAuRM1_BCq2iADh1lXDhUrI",
    authDomain: "stukebilt.firebaseapp.com",
    databaseURL: "https://stukebilt.firebaseio.com",
    projectId: "stukebilt",
    storageBucket: "stukebilt.appspot.com",
    messagingSenderId: "108267098942",
    appId: "1:108267098942:web:426731edb416bc2bb7126f",
    measurementId: "G-YG6L711G3C"
  };

  class Firebase {
    constructor() {
      app.initializeApp(firebaseConfig);
    }
  }
  // Initialize Firebase
  export default Firebase;
