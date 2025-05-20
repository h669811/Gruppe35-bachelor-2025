import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import * as FileSystem from 'expo-file-system';

// Function to upload image to Firebase Storage
const uploadImage = async (imageUri,id) => {

  try {
      // Convert image to base64
      const base64String = await FileSystem.readAsStringAsync(imageUri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      // Makes a Blob from Base64-strengen
      const response = await fetch(`data:image/jpg;base64,${base64String}`);
      const blob = await response.blob();

      const storage = getStorage();
      const randomSuffix = Math.floor(Math.random() * 1000000);
      const filename = `image_${Date.now()}_${randomSuffix}.jpg`;
      const storageRef = ref(storage, `products/${id}/${filename}`);  //gives uique url

      // Uploads Blob to Firebase
      await uploadBytes(storageRef, blob);

      // Gets URL for the uploaded image
      const downloadURL = await getDownloadURL(storageRef);

      return downloadURL;

    } catch (error) {
      Alert.alert('Upload Failed', err.message || 'Ukjent feil');
      throw error;
    }
};
export default uploadImage