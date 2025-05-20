import { doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { getDocument } from '../firestore';
import { firestore } from '../firebase'

/**
 * It updates a document in a collection with a given gtin
 * @param collectionPath - The path to the collection you want to create a document in.
 * @param gtin - The gtin of the document to update.
 * @param data - The data you want to store in the document.
 * @returns The id of the document that was created.
 */

const updateDocument = async (collectionPath, gtin, data) => {
  try {
    // Gets product by gtin
    const productSnap = await getDocument(collectionPath, gtin);
    const existingData = productSnap;

        updatedData = {
          ...existingData,
          data,
          _updatedAt: serverTimestamp(),
          _updatedBy: 'appUser',
        }
    // Checks if product was found 
    if (!productSnap) {
        return; // Break if product wasnt found
    }
  
    const ref = doc(firestore, 'products', productSnap._id);  
    await updateDoc(ref, data);
} catch (error) {
    throw error;
}
};
export default updateDocument