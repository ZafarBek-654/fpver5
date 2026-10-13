// Конфиг Firebase для Birga (проект fpver3)
const firebaseConfig = {
  apiKey: "AIzaSyAXNeZvlFpvIhnR-syPdzCcEqG8jcuJIQY",
  authDomain: "fpver3.firebaseapp.com",
  projectId: "fpver3",
  storageBucket: "fpver3.firebasestorage.app",
  messagingSenderId: "499817239004",
  appId: "1:499817239004:web:d4e61745caea17e42eff19",
};
// Адрес ИИ-прокси (Cloudflare Worker из ai-worker.js). Пусто = встроенный базовый режим.
const BIRGA_AI_URL = "";
window.FB = {};
if (firebaseConfig.apiKey !== "YOUR_API_KEY" && window.firebase) {
  firebase.initializeApp(firebaseConfig);
  FB.auth = firebase.auth();
  FB.db = firebase.firestore();
  FB.db.enablePersistence({ synchronizeTabs: true }).catch(() => {});
}
