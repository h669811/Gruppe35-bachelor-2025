import { collection, getDocs, query, where } from 'firebase/firestore'
import { firestore } from '../firebase'

const getDocument = async (collectionPath, GTIN) => {
    const q = query(
        collection(firestore, collectionPath),
        where(`gtins.${GTIN}`, '==', true) // Checks im GTIN exits in gtins-object
    );
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0]; // Gets first result
        return { ...doc.data(), _id: doc.id };
    } else {
        return null;
    }
}

export default getDocument