import {updateDocument, uploadImage} from '../../../services/firestore';

/**
 * Function to upload images to database
 * @param {string} gtin - gtin
 * @param {List} images - List of images
 */
export const addImages = async (gtin, imageFiles) => {
  try {
      const imageUrls = await Promise.all(imageFiles.map(imageFile => uploadImage(imageFile, gtin)));
      const data = {
          frontImage:imageUrls[0],
          ingredientsImage: imageUrls[1],
          nutritionImage: imageUrls[2],

      };
      await updateDocument('products', gtin, data);

  } catch (error) {
      console.error("Error while updating product with images:", error);
  }
};