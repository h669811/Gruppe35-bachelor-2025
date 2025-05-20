import { CameraView, useCameraPermissions } from "expo-camera";
import { useRef, useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import dynamicStyles from './styles';
import { Cross, TorchOff, TorchOn } from '../../constants/assets';

export default function FrontScreen({ route, navigation }) {
  const styles = dynamicStyles();
  const [isTorchEnabled, setIsTorchEnabled] = useState(false);
  const [facing, setFacing] = useState('back');
  const [showCamera, setShowCamera] = useState(false); // start med kamera av

  const camref = useRef(null);
  const isFocused = useIsFocused();
  const { gtin } = route.params || {};
  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    if (!isFocused) {
      camref.current = null;
      setShowCamera(false); // skjul kamera når skjermen mister fokus
    }
  }, [isFocused]);

  if (!gtin) {
    return (
      <View style={styles.container}>
        <Text>Feil: Produkt-ID (GTIN) mangler.</Text>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Text style={{ color: 'blue', marginTop: 10 }}>Gå tilbake</Text>
        </Pressable>
      </View>
    );
  }

  if (!permission) return null;

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text>Vi trenger tilgang til kameraet</Text>
        <Pressable onPress={requestPermission}>
          <Text>Gi tilgang</Text>
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
          console.log('[FRONT] Navigerer til ImageEditor med URI:', photo.uri);
          setShowCamera(false); // skjul kameraet før navigasjon
          setTimeout(() => {
            navigation.navigate("ImageEditor", {
              uri: photo.uri,
              step: 1,
              gtin,
              image1Uri: photo.uri,
            });
          }, 400);
        } else {
          console.warn('[FRONT] Bilde mangler URI');
        }
      } else {
        console.error('[FRONT] Kamera ikke klart (camref.current er null)');
      }
    } catch (err) {
      console.error('[FRONT] Feil under bildeopptak:', err);
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

      <View style={styles.header}>
        <View style={styles.btns}>
          <Pressable style={styles.iconButton} onPress={() => navigation.navigate('Home')}>
            <Text><Image source={Cross} style={styles.LeftBtn} /></Text>
            <Text fontWeight="semibold" top={-10}>{('avbryt').toUpperCase()}</Text>
          </Pressable>
        </View>

        <View style={styles.textBox}>
          <Text style={styles.headerText}>TA BILDE AV FRONTEN</Text>
          <Text style={styles.underText}>Trykk aktiver for å starte kamera</Text>
        </View>
      </View>

      <View style={styles.photoContainer}>
        {isFocused && showCamera ? (
          <CameraView
            key={`front-camera-${gtin}`}
            style={styles.camera}
            facing={facing}
            ref={camref}
            enableTorch={isTorchEnabled}
            cameraType="back"
          />
        ) : (
          <View style={[styles.camera, { backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }]}>
            <Pressable onPress={() => setShowCamera(true)}>
              <Text style={{ color: 'white', fontSize: 16 }}>🎥 Trykk her for å aktivere kamera</Text>
            </Pressable>
          </View>
        )}

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
