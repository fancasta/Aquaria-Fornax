// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import Filter from "bad-words";
import { ref, onUnmounted, computed } from "vue";

const firebaseConfig = {
  apiKey: "AIzaSyDmMrCGyzkLL_a_dy2gYPkfm5y_tK_SQSs",
  authDomain: "management-8c164.firebaseapp.com",
  projectId: "management-8c164",
  storageBucket: "management-8c164.appspot.com",
  messagingSenderId: "341699713666",
  appId: "1:341699713666:web:07ec8f7067be44326e329b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;

// Define common firebase based auth methods here so that all view/components
// can benefit from it.

const auth = firebase.auth();

export function useAuth() {
  const user = ref(null);
  const unsubscribe = auth.onAuthStateChanged((_user) => (user.value = _user));
  onUnmounted(unsubscribe);
  const isLogin = computed(() => user.value !== null);

  const signIn = async () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(googleProvider);
  };
  const signOut = () => auth.signOut();

  return { user, isLogin, signIn, signOut };
}

const firestore = firebase.firestore();
const messagesCollection = firestore.collection("messages");
const messagesQuery = messagesCollection
  .orderBy("createdAt", "desc")
  .limit(100);
const filter = new Filter();

export function useChat() {
  const messages = ref([]);
  const unsubscribe = messagesQuery.onSnapshot((snapshot) => {
    messages.value = snapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .reverse();
  });
  onUnmounted(unsubscribe);

  const { user, isLogin } = useAuth();
  const sendMessage = (text) => {
    if (!isLogin.value) return;
    const { photoURL, uid, displayName } = user.value;

    // Hard code user photo url based on user name
    var modifiedPhotoUrl = photoURL;
    if (!modifiedPhotoUrl) {
      if (displayName === "user1") {
        modifiedPhotoUrl =
          "https://cdn4.iconfinder.com/data/icons/occupation-and-people-avatar-vol-3-1/128/person_E.T._space_explorer_avatar_tourist_alien-512.png";
      } else if (displayName === "user2") {
        modifiedPhotoUrl =
          "https://www.pinclipart.com/picdir/middle/547-5474602_character-avatar-clipart.png";
      } else if (displayName === "user3") {
        modifiedPhotoUrl =
          "https://www.pinclipart.com/picdir/big/535-5353297_tokyo-ghoul-clipart-main-character-dead-by-daylight.png";
      }
    }

    messagesCollection.add({
      userName: displayName,
      userId: uid,
      userPhotoURL: modifiedPhotoUrl,
      text: filter.clean(text),
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return { messages, sendMessage };
}
