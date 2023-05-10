import { getFirestore, doc, setDoc, getDoc, getDocs, collection } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

// Get a reference to the Firestore database
export const db = getFirestore();

// Listen for authentication state changes
onAuthStateChanged(auth, async (user) => {
  if (user) {
    // User is signed in
    const { email, uid } = user;
    
    // Get the additional user info from the Firestore database
    const userRef = doc(db, "users", uid);
    const userDoc = await getDoc(userRef);

    // If the user info doesn't exist in the Firestore database, create it
    if (!userDoc.exists()) {
      await setDoc(userRef, { email, username: "", address: "", role: "" });
    }
  } else {
    // User is signed out
  }
});

//récuperation des données de la collection 'users'
const usersCollectionRef = collection(db, 'users');

class UsersDataService {
  getAllUsers = () => {
      return getDocs(usersCollectionRef);
  };
}

export default new UsersDataService();
