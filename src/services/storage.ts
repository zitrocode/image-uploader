import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Inicializar Firebase
export const config = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Cloud Storage and get a reference to the service
export const app = initializeApp(config);
export const storage = getStorage(app);
