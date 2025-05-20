import * as ImageManipulator from 'expo-image-manipulator'

export const handleCompress = () => {
    /**
 * Function to compress an image
 * @param {URI} uri - original image
 * @returns {URI}
 */
  const compressImage = async (uri) => {
    try {
      const manipResult = await ImageManipulator.manipulateAsync(
        uri,
        [{ resize: { width: 800 } }], // Adjust witdh
        { format: 'jpeg', compress: 0.7 } // Adjust between 0 og 1
      );
      return manipResult.uri;
    } catch (error) {
      console.error("Error compressing image:", error);
      return uri; // Returns original URI if fails
    }
  };

  return compressImage;
};