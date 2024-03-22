// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage,ref} from "firebase/storage";
import {collection, getFirestore,getDocs} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzxvCzAQLh4-Z73dZcI46zUfFtbj0Gsc8",
  authDomain: "between-tags.firebaseapp.com",
  projectId: "between-tags",
  storageBucket: "between-tags.appspot.com",
  messagingSenderId: "541866773679",
  appId: "1:541866773679:web:844a3297861525c885185a",
  measurementId: "G-BVW8TGWF8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const storage = getStorage(app);
//get logos
export const logo_csharp =ref(storage,"gs://between-tags.appspot.com/logo_CSharp.png");
export const logo_vscode =ref(storage,"gs://between-tags.appspot.com/logo/vscode.png");
export const logo_js =ref(storage,"gs://between-tags.appspot.com/logo/js.png");
export const logo_css =ref(storage,"gs://between-tags.appspot.com/logo/CSS.png");
export const logo_react =ref(storage,"gs://between-tags.appspot.com/logo/react.png");

//Firestore:
//initialize services
const db = getFirestore();

//collection ref
const colRef = collection(db,'card')

//collection data
getDocs(colRef).then((snapshot)=>{
  console.log( "&&& Firebase data is: "+snapshot.docs)
})


//*****Update Hosting:****
//npm run build
//firebase deploy