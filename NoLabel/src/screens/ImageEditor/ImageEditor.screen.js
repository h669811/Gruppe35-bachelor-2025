import React, { useEffect, useState, useRef } from 'react';
import { View, Image, Dimensions, SafeAreaView, Text, PanResponder, Pressable } from 'react-native';
import * as ImageManipulator from 'expo-image-manipulator';
import { Cross } from '../../constants/assets';
import dynamicStyles from './styles';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const MAX_CROP_WIDTH = SCREEN_WIDTH; // Maximum width for cropping
const MAX_CROP_HEIGHT = 500; // Maximum height for cropping

const ImageEditorScreen = ({ route, navigation }) => {
  const { uri, step, gtin, image1Uri, image2Uri, image3Uri } = route.params;
  const [editedUri, setEditedUri] = useState(uri); // State for the edited image URI
  const [cropArea, setCropArea] = useState({ x: 100, y: 150, width: 200, height: 200 }); // Initial crop area
  const [isCropVisible, setIsCropVisible] = useState(true); // State for visibility of crop area
  const [imageDimensions, setImageDimensions] = useState({width: 0, height: 0}); // Store image dimensions
  const styles = dynamicStyles();

  // Effect for retrieving image dimensions
  useEffect(() => {
    Image.getSize(
      editedUri,
      (width, height) => setImageDimensions({width, height}), // Set dimensions
      (error) => console.error(error) // Log error if image size fetch fails
    );
  }, [editedUri]);

  const initialX = useRef(0);
  const initialY = useRef(0);
 /**
 * Pan responder for moving the crop area
 */
  const panResponderMove = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt) => {
        const { pageX, pageY } = evt.nativeEvent;
        initialX.current = pageX - cropArea.x; // Calculate initial X offset
        initialY.current = pageY - cropArea.y; // Calculate initial Y offset
      },
      onPanResponderMove: (evt) => {
        const { pageX, pageY } = evt.nativeEvent;
        setCropArea(prev => {
          // Update crop area position, ensuring it stays within bounds
          const newX = Math.max(15, Math.min(pageX - initialX.current, SCREEN_WIDTH - prev.width - 15));
          const newY = Math.max(15, Math.min(pageY - initialY.current, MAX_CROP_HEIGHT - prev.height - 15));
          return { ...prev, x: newX, y: newY }; // Return updated crop area
        });
      },
    })
  ).current;

  /**
 * Pan responder for resizing the crop area from corners
 */
  const panResponderResize = (corner) => PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt) => {
      const { pageX, pageY } = evt.nativeEvent;
      setCropArea(prev => {
        let newWidth = prev.width;
        let newHeight = prev.height;
        let newX = prev.x;
        let newY = prev.y;

        // Resize crop area based on which corner is being dragged
        switch (corner) {
          case 'topLeft':
            newX = Math.max(15, Math.min(pageX, prev.x + prev.width - 30));
            newY = Math.max(15, Math.min(pageY - 150, prev.y + prev.height - 30));
            newWidth = Math.max(30, prev.width + (prev.x - newX));
            newHeight = Math.max(30, prev.height + (prev.y - newY));
            break;
          case 'topRight':
            newY = Math.max(15, Math.min(pageY - 150, prev.y + prev.height - 30));
            newWidth = Math.max(30, pageX - prev.x - 15);
            newHeight = Math.max(30, prev.height + (prev.y - newY));
            break;
          case 'bottomLeft':
            newX = Math.max(15, Math.min(pageX, prev.x + prev.width - 30));
            newWidth = Math.max(30, prev.width + (prev.x - newX));
            newHeight = Math.max(30, Math.min(pageY - prev.y - 150, MAX_CROP_HEIGHT - prev.y - 15));
            break;
          case 'bottomRight':
            newWidth = Math.max(30, Math.min(pageX - prev.x, MAX_CROP_WIDTH - prev.x - 15));
            newHeight = Math.max(30, Math.min(pageY - prev.y - 150, MAX_CROP_HEIGHT - prev.y - 15));
            break;
        }
        // Ensure new dimensions do not exceed the maximum crop area
        return {
          x: newX,
          y: newY,
          width: Math.min(newWidth, MAX_CROP_WIDTH - newX - 15),
          height: Math.min(newHeight, MAX_CROP_HEIGHT - newY - 15),
        };
      });
    },
  }).panHandlers;

  /**
 * Function which crops an image based on dimensions and ratios
 */
  const handleCrop = async () => {
    // Ensure that the cropArea is defined based on the displayed image size.
    const displayedWidth = imageDimensions.width;  // Original image width
    const displayedHeight = imageDimensions.height; // Original image height

    // Determine the actual dimensions of the displayed image on the screen
    const imageAspectRatio = displayedWidth / displayedHeight; // Aspect ratio of the image
    const cropAspectRatio = cropArea.width / cropArea.height; // Aspect ratio of the crop area

    // Assume we are also scaling the image to fit screen dimensions
    const screenAspectRatio = SCREEN_WIDTH / MAX_CROP_HEIGHT; // Aspect ratio of the crop area viewport

    let scaleX = 1, scaleY = 1;
    if (imageAspectRatio > screenAspectRatio) {
        // Image is wider than screen
        scaleX = displayedWidth / SCREEN_WIDTH; // Scale width to fit screen
        scaleY = scaleX; // Maintain aspect ratio
    } else {
        // Image is taller than screen or fits within screen
        scaleY = displayedHeight / MAX_CROP_HEIGHT; // Scale height to fit in available crop area
        scaleX = scaleY; // Maintain aspect ratio
    }

    const croppedImage = await ImageManipulator.manipulateAsync(
      editedUri,
      [{
        crop: {
          originX: cropArea.x * scaleX,
          originY: cropArea.y * scaleY,
          width: cropArea.width * scaleX,
          height: cropArea.height * scaleY,
        }
      }],
      { compress: 1, format: ImageManipulator.SaveFormat.PNG }
    );

    setIsCropVisible(false); // Hide crop area after cropping
    setEditedUri(croppedImage.uri); // Update edited URI with the cropped image
  };

/**
 * Skips crop by hiding crop square
 */
  const handleDirectCrop = async () => {
    setIsCropVisible(false); // Skip cropping
  };

/**
 * Function which sets currentImage to original image
 * and shows crop square again
 */
  const handleReset = () => {
    setEditedUri(uri); // Reset to the original image
    setTimeout(() => setIsCropVisible(true), 300); // Make crop area visible again
  };

  /**
 * Rotates image 90 degrees
 */
  const handleRotate = async () => {
    const result = await ImageManipulator.manipulateAsync(
      editedUri,
      [{ rotate: 90 }], // Rotate the image 90 degrees
      { compress: 1, format: ImageManipulator.SaveFormat.PNG }
    );
    setEditedUri(result.uri); // Update the edited image URI
  };

  /**
 * Function which navigates to different screens by calling to navigationstack
 * based on a step count
 */
  const handleDone = () => {
    if (step === 1) {
      setTimeout(() => {
        navigation.navigate('Ingredients', {
          gtin,
          image1Uri: editedUri,
        });
      }, 300); // Vent til kamera i Front unmountes
    } else if (step === 2) {
      setTimeout(() => {
        navigation.navigate("Nutrition", {
          gtin,
          image1Uri,
          image2Uri: editedUri,
        });
      }, 300);
    } else if (step === 3) {
      setTimeout(() => {
        navigation.navigate("Upload", {
          gtin,
          image1Uri,
          image2Uri,
          image3Uri: editedUri,
        });
      }, 300);
    } else {
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <View style={styles.whiteBackground} />
        <View style={styles.pinkBackground} />
      </View>

      <View style={styles.header}>
        <View style={styles.btns}>
          <Pressable style={styles.iconButton} onPress={() => navigation.navigate('Home')}>
            <Text><Image source={Cross} style={styles.LeftBtn} /></Text>
            <Text fontWeight="semibold" top={-10}>{('avbryt').toUpperCase()}</Text>
          </Pressable>
          <View style={styles.RightBtn}>
            {isCropVisible ? (
              <Pressable style={styles.ovalButton} backgroundColor={'#92697D'} onPress={handleDirectCrop}>
                <Text style={styles.buttonText}>Hopp over</Text>
              </Pressable>
            ) : step === 3 ? (
              <Pressable style={styles.ovalButton} backgroundColor={'#92697D'} onPress={handleDone}>
                <Text style={styles.buttonText}>Send inn</Text>
              </Pressable>
            ) : (
              <Pressable style={styles.ovalButton} backgroundColor={'#92697D'} onPress={handleDone}>
                <Text style={styles.buttonText}>Godkjenn</Text>
              </Pressable>
            )}
          </View>
        </View>
        <View style={styles.textBox}>
          {isCropVisible ? (
            <>
              <Text style={styles.headerText}>
                BESKJÆR BILDET
              </Text>
              <Text style={styles.underText}>Beskjær bildet om ønskelig. Hold inne og dra for å justere</Text>
            </>
          ) : (
            <>
              <Text style={styles.headerText}>ROTER BILDET</Text>
              <Text style={styles.underText}>Roter til bildet er vannrett</Text>
            </>
          )}
        </View>
      </View>

      <View style={styles.imageContainer}>
        {isCropVisible ? (
          <>
            <Image source={{ uri: editedUri }} style={styles.image} resizeMode="contain" />
            <View
              {...panResponderMove.panHandlers}
              style={{
                ...styles.cropArea,
                left: cropArea.x,
                top: cropArea.y,
                width: cropArea.width,
                height: cropArea.height,
              }}
            />
            <View style={[styles.corner, { left: cropArea.x, top: cropArea.y }]} {...panResponderResize('topLeft')} />
            <View style={[styles.corner, { left: cropArea.x + cropArea.width - 25, top: cropArea.y }]} {...panResponderResize('topRight')} />
            <View style={[styles.corner, { left: cropArea.x, top: cropArea.y + cropArea.height - 25 }]} {...panResponderResize('bottomLeft')} />
            <View style={[styles.corner, { left: cropArea.x + cropArea.width - 25, top: cropArea.y + cropArea.height - 25 }]} {...panResponderResize('bottomRight')} />
          </>
        ) : (
          <Image source={{ uri: editedUri }} style={styles.imageCrop} resizeMode="contain" />
        )}
      </View>

      <View style={styles.toolbar}>
        {isCropVisible ? (
          <>
            <View style={styles.buttonGroup}>
              <Pressable style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.btnText}>{('NYTT BILDE').toUpperCase()}</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={handleCrop}>
                <Text style={styles.btnText}>{('BESKJÆR').toUpperCase()}</Text>
              </Pressable>
            </View>
          </>
        ) : (
          <>
            <View style={styles.buttonGroup}>
              <Pressable style={styles.button} onPress={handleReset}>
                <Text style={styles.btnText}>{('BESKJÆR').toUpperCase()}</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={handleRotate}>
                <Text style={styles.btnText}>{('ROTER').toUpperCase()}</Text>
              </Pressable>
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ImageEditorScreen;