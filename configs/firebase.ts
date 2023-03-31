import { FirebaseOptions } from 'firebase/app';

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.GOOGLE_FIREBASE_API_KEY,
  authDomain: process.env.GOOGLE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_GOOGLE_FIREBASE_PROJECT_ID,
  appId: process.env.GOOGLE_FIREBASE_APP_ID,
  measurementId: process.env.GOOGLE_FIREBASE_MEASUREMENT_ID,
};

export default firebaseConfig;
