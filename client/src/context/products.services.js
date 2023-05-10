import { getFirestore, doc, setDoc, getDoc, getDocs, collection } from "firebase/firestore";

// Get a reference to the Firestore database
export const db = getFirestore();


//récuperation des données de la collection 'users'
const usersCollectionRef = collection(db, 'products');

class ProductsDataService {
    getAllProducts = () => {
        return getDocs(usersCollectionRef);
    };
}

export default new ProductsDataService();