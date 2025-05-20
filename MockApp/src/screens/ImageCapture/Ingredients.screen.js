import { CameraView, useCameraPermissions } from "expo-camera";
import { useRef, useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, View, Image, PanResponder } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import dynamicStyles from './styles';
import { Cross, TorchOff, TorchOn } from '../../constants/assets';

export default function IngredientsScreen({ route, navigation }) {
  const { gtin, image1Uri } = route.params;
  const [permission, requestPermission] = useCameraPermissions();
  const styles = dynamicStyles();
  const [isTorchEnabled, setIsTorchEnabled] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(0.1);
  const [showCamera, setShowCamera] = useState(false); // start uten kamera
  const camref = useRef(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) {
      camref.current = null;
      setShowCamera(false);
    }
  }, [isFocused]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return Math.abs(gestureState.dx) > 2 || Math.abs(gestureState.dy) > 2;
      },
      onPanResponderMove: (evt, gestureState) => {
        const newZoomLevel = zoomLevel + gestureState.dy * 0.001;
        if (newZoomLevel >= 0 && newZoomLevel <= 1) {
          setZoomLevel(newZoomLevel);
        }
      },
    })
  ).current;

  if (!permission) return null;

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text>We need your permission to use the camera</Text>
        <Pressable onPress={requestPermission}>
          <Text>Grant Permission</Text>
        </Pressable>
      </View>
    );
  }

  const takePicture = async () => {
    try {
      if (camref.current) {
        const photo = await camref.current.takePictureAsync();
        setIsTorchEnabled(false);

        if (photo?.uri) {
          setShowCamera(false);
          setTimeout(() => {
            navigation.push("ImageEditor", {
              uri: photo.uri,
              step: 2,
              gtin,
              image1Uri,
              image2Uri: photo.uri,
            });
          }, 400);
        } else {
          Alert.alert('Bildet mangler URI', err.message || 'Ukjent feil');;
        }
      } else {
          Alert.alert('camref.current er null', err.message || 'Ukjent feil');
      }
    } catch (err) {
          Alert.alert('Feil ved bildeopptak', err.message || 'Ukjent feil');
    }
  };

  const toggleTorch = () => {
    setIsTorchEnabled(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.whiteBackground} />
        <View style={styles.pinkBackground} />
      </View>

      {/* HEADER OG INSTRUKSJONER */}
      <View style={styles.header}>
        <View style={styles.btns}>
          <Pressable style={styles.iconButton} onPress={() => navigation.navigate('Home')}>
            <Text><Image source={Cross} style={styles.LeftBtn} /></Text>
            <Text fontWeight="semibold" top={-10}>{('avbryt').toUpperCase()}</Text>
          </Pressable>
        </View>

        <View style={styles.textBox}>
          <Text style={styles.headerText}>TA BILDE AV INGREDIENSENE</Text>
          <Text style={styles.underText}>Zoom ved å dra ned med en finger</Text>
        </View>
      </View>

      {/* KAMERASEKSJON */}
      <View style={styles.photoContainer}>
        {isFocused && showCamera ? (
          <CameraView
            style={styles.camera}
            ref={camref}
            enableTorch={isTorchEnabled}
            zoom={zoomLevel}
            {...panResponder.panHandlers}
          />
        ) : (
          <View style={[styles.camera, { backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }]}>
            <Pressable onPress={() => setShowCamera(true)}>
              <Text style={{ color: 'white', fontSize: 16 }}>🎥 Trykk for å aktivere kamera</Text>
            </Pressable>
          </View>
        )}

        {/* GRID */}
        <View style={[styles.gridOverlay, StyleSheet.absoluteFill]}>
          {Array.from({ length: 4 }).map((_, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {Array.from({ length: 4 }).map((_, colIndex) => (
                <View key={colIndex} style={styles.cell} />
              ))}
            </View>
          ))}
        </View>
      </View>

      {/* KNAPPER VISES KUN NÅR KAMERAET ER PÅ */}
      {showCamera && (
        <View style={styles.shutterContainer}>
          <Pressable onPress={toggleTorch} style={styles.torchWrapper}>
            <Image
              source={isTorchEnabled ? TorchOn : TorchOff}
              style={styles.torchIcon}
            />
          </Pressable>

          <Pressable onPress={takePicture}>
            <View style={styles.shutterBtn}>
              <View style={styles.shutterBtnInner} />
            </View>
          </Pressable>
        </View>
      )}
    </View>
  );
}
