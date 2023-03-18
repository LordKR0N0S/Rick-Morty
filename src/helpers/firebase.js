import { GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const API_KEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: 'myprojectauth-99326.firebaseapp.com',
  projectId: 'myprojectauth-99326',
  storageBucket: 'myprojectauth-99326.appspot.com',
  messagingSenderId: '181070804493',
  appId: '1:181070804493:web:431cc96702a4473dea8744',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();
