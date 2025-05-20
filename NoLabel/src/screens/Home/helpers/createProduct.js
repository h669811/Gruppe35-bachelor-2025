import {createDocument} from '../../../services/firestore';

    /**
 * Function creating new doc for product
 * @param {string} productId - Product-ID
 * @param {object} data - ProductData
 */
export const createProduct = async (GTIN) => {

      var gtn = {};
      gtn[GTIN] = true;

      const productData = {
        dataSource: 'appUser',
        gtins: gtn,
        gtin: GTIN,
        isVerified: false,
        ingredientsText: '',
        nutritionText: '',
        timesScanned: 1,
      };
      
      try {
        //Uses createDocument-function to create document
        await createDocument('products', productData);
      } catch (error) {
        console.error("Feil ved opplasting av produktdata:", error);
        throw new Error("Feil ved opplasting av produktdata. Prøv igjen.");
      }
    
};
