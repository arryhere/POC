import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDdT6ENulQniandLkUhCvSY7yGBed5NOuE',
  authDomain: 'fir-learning-e75e8.firebaseapp.com',
  projectId: 'fir-learning-e75e8',
  storageBucket: 'fir-learning-e75e8.appspot.com',
  messagingSenderId: '515342970121',
  appId: '1:515342970121:web:558e7e72819d1bd7c977d8',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
