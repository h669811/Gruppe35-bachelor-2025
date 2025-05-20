import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, Alert } from "react-native";
import dynamicStyles from './styles';
import { addImages } from './helpers/handleAddImages';
import { handleCompress } from './helpers/handleCompress';
import { handleOCR } from './helpers/handleOCR';
import { updateDocument } from '../../services/firestore';

const UploadScreen = ({ route, navigation }) => {
  const { gtin, image1Uri, image2Uri, image3Uri } = route.params;
  const [isUploading, setIsUploading] = useState(false);

  const styles = dynamicStyles();

  //Calls hook
  const compressImage = handleCompress();
  const images = [image1Uri, image2Uri, image3Uri];

  useEffect(() => {
    handleSubmit();
  }, []);


  /**
 * Function which tries to compress images recived,
 * uploads to database and shows 'thank you' message to user
 */
  const handleSubmit = async () => {
    setIsUploading(true);
    try {
      const compressedImages = await Promise.all(images.map(uri => compressImage(uri)));
      const [frontImage, ingredientsImage, nutritionImage] = compressedImages;

      const ingredientsText = await handleOCR(ingredientsImage, 'IngredientsOCR');
      const nutritionText = await handleOCR(nutritionImage, 'NutritionOCR');

      // Last opp bilder og få URL-er
      await addImages(gtin, [frontImage, ingredientsImage, nutritionImage]);

      // Oppdater dokument med OCR-tekst
      await updateDocument('products', gtin, {
        ingredientsText,
        nutritionText
      });

      Alert.alert(
        "Tusen takk!",
        "Produktet er nå registrert. Takk for hjelpen!",
        [{ text: "Bare hyggelig", onPress: () => navigation.navigate('Home') }],
        { cancelable: false }
      );
    } catch (err) {
      Alert.alert('Upload Failed', err.message || 'Ukjent feil');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <View style={styles.spinContainer}>
    {isUploading && (
      <ActivityIndicator size="large" color="#92697D" style={styles.spinner} />
    )}
  </View>

  );
};

export default UploadScreen;