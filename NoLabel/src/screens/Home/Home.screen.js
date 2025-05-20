import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useState, useRef, useEffect } from "react";
import { Alert, Button, Text, View, StatusBar, Pressable } from "react-native";
import { Image } from "expo-image";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useTranslations } from "@qonsoll/translation";

import dynamicStyles from './styles';
import { DEFAULT, NO, YES } from '../../constants/scanStatuses';
import { Filter, Logo, Profile } from '../../constants/assets';
import { DashboardGraphic } from '../../components';
import { handleIsProduct } from './helpers/handleIsProduct';

const HomeScreen = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const refs = useRef(null);
  const { t } = useTranslations();
  const [facing, setFacing] = useState('back');
  const [showCamera, setShowCamera] = useState(true);

  const [scanned, setScanned] = useState(false);
  const [scanStatus, setScanStatus] = useState(DEFAULT);
  const styles = dynamicStyles({ isTopNavWhite: scanStatus === NO || scanStatus === YES });

  useEffect(() => {
    setScanned(false);
    if (!isFocused) {
      refs.current = null; // eksplisitt unmount
    }
  }, [isFocused]);

  const debounce = (func) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), 200);
    };
  };

  const handleBarcodeScanned = async ({ data }) => {
    if (scanned) return;
    if (!data) {
      console.warn("[SCAN] Ingen data fra strekkode.");
      return;
    }

    console.log("[SCAN] Data mottatt:", data);
    setScanned(true);
    setShowCamera(false); // unmount kameraet umiddelbart

    try {
      const exist = await handleIsProduct(data);

      if (exist) {
        Alert.alert("Produktet finnes", "Dette produktet finnes allerede i databasen.", [
          {
            text: "OK",
            onPress: () => {
              setScanned(false);
              setShowCamera(true); // vis kameraet igjen
            },
          },
        ]);
      } else {
        Alert.alert("Ukjent produkt", "Dette produktet eksisterer ikke. Vil du legge det til?", [
          {
            text: "Nei",
            onPress: () => {
              setScanned(false);
              setShowCamera(true); // vis kameraet igjen
            },
            style: "cancel",
          },
          {
            text: "Ja",
            onPress: () => {
              console.log('[NAVIGATE] Går til Front med GTIN:', data);
              setTimeout(() => {
                navigation.navigate("Front", { gtin: data });
              }, 300);
            },
          },
        ]);
      }
    } catch (error) {
      console.error("Feil ved produktsjekk:", error);
      Alert.alert("Noe gikk galt", "Klarte ikke sjekke produkt. Prøv igjen.");
      setScanned(false);
      setShowCamera(true);
    }
  };


  const debouncedHandleBarcodeScanned = debounce(handleBarcodeScanned);

  if (!permission) return null;

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>Vi trenger kameratilgang</Text>
        <Button onPress={requestPermission} title="Gi tillatelse" />
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerContainer}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.leftButton}>
          <Image source={Filter} style={styles.headerIcon} />
          <Text fontWeight="semibold">{t('filter').toUpperCase()}</Text>
        </View>
        <View style={styles.rightButton}>
          <Image source={Profile} style={styles.headerIcon} />
          <Text fontWeight="semibold">{t('profile').toUpperCase()}</Text>
        </View>
      </View>

      {isFocused && showCamera && (
        <CameraView
          ref={refs}
          style={styles.camera}
          facing={facing}
          onBarcodeScanned={scanned ? undefined : debouncedHandleBarcodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ["ean13", "upc_a", "upc_e", "code39", "code128", "codabar"],
          }}
        />
      )}


      {scanned && (
        <View style={styles.rescanText}>
          <Button title="Skann på nytt" onPress={() => setScanned(false)} />
        </View>
      )}

      <DashboardGraphic isShoppingListPointer />
    </View>
  );
};

export default HomeScreen;
