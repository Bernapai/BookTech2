import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";
import App from './App.jsx'
//import 'bootstrap/dist/css/bootstrap.min.css';



import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCb4Ue-PCbR_9AndGt_pNSkiGe0ui4dy6s",
  authDomain: "react-proyecto-b4eef.firebaseapp.com",
  projectId: "react-proyecto-b4eef",
  storageBucket: "react-proyecto-b4eef.appspot.com",
  messagingSenderId: "79102017607",
  appId: "1:79102017607:web:a2fd69e3bad68a68b8b162",
  measurementId: "G-026KW86MY4"
};


 const app= initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
