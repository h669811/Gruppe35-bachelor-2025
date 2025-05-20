import {getDocument, updateDocument} from '../../../services/firestore';
import { createProduct } from './createProduct';
//import firestore from '@react-native-firebase/firestore'


const isEmpty = value => value === '' || value === null || value === undefined;
const collectionPath = 'products';


/**
 *
 * Boolean function for checking if productId exixst/ has images.
 * Creates new product doc if doesnt exist.
 * @param {string} productId - Produkt-ID
 * @returns {boolean}
 */
 export const handleIsProduct = async (gtin) => {

    const productSnap = await getDocument(collectionPath, gtin);

    const propsToCheck = [
      productSnap?.ingredientsText,
      productSnap?.ingredientsImage,
      productSnap?.nutritionImage,
      productSnap?.nutritionText,
      productSnap?.nutritionImages
    ];
  
      if (productSnap) {
        const newTimesScanned = (productSnap?.timesScanned || 0) + 1;
    
        // Update scanned count with new value
        updateDocument(collectionPath,gtin, { timesScanned: newTimesScanned });
        //checks if product has anny previous images or text
        if(propsToCheck.every(isEmpty)){
          return false;
        }else return true;
      }
      const doc = await createProduct(gtin); //Calls function to create product with gtin

      return false; // No images if product doesn't exist, so saves product
      
    };