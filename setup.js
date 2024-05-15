// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCosdqWlBP53eGcNZg7OajtBIWI6nBSyW8",
    databaseURL: "https://nbe-app-clone-default-rtdb.firebaseio.com",
    authDomain: "nbe-app-clone.firebaseapp.com",
    projectId: "nbe-app-clone",
    storageBucket: "nbe-app-clone.appspot.com",
    messagingSenderId: "305148544930",
    appId: "1:305148544930:web:411eb58a63d7e610e494fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export default () => { return { firebase, auth }; };
