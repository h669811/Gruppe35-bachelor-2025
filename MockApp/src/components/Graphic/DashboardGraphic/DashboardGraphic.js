import {
  Balloon,
  BarcodeHorizontal,
  BarcodeVertical,
  Boll3x,
  FerrisWheelGif,
  MountainBig1,
  MountainBig2,
  MountainMedium1,
  MountainMedium2,
  MountainSmall1,
  MountainSmall2,
  OnionGif,
  OwlGif,
  ScanIllustration,
  ShoppingListIllustration
} from '../../../constants/assets'
import { Image, View } from 'react-native'

import React from 'react'
import dynamicStyles from './styles'

const DashboardGraphic = (props) => {
  const { isScannerPointer, isShoppingListPointer } = props

  // [ADDITIONAL_HOOKS]
  const styles = dynamicStyles()

  return (
    <View style={styles.container}>
      <View style={styles.graphicContainer}>
        <View style={styles.background} />
        {/* Left section */}
        <Image source={MountainBig1} style={styles.leftBigMountain} />
        <Image source={MountainSmall1} style={styles.leftSmallMountain} />
        {!!isScannerPointer && (
          <Image source={ScanIllustration} style={styles.scanIllustration} />
        )}
        <Image source={BarcodeVertical} style={styles.barcodeVerticalImage} />
        <Image source={MountainMedium1} style={styles.leftMediumMountain} />
        <Image source={FerrisWheelGif} style={styles.ferrisWealImage} />
        <Image source={OwlGif} style={styles.owlImage} />
        {/* Right section */}
        <Image source={Boll3x} style={styles.boll3x} />
        <Image source={Balloon} style={styles.balloon} />
        <Image source={MountainBig2} style={styles.rightBigMountain} />
        <Image source={MountainSmall2} style={styles.rightSmallMountain} />
        <Image source={MountainMedium2} style={styles.rightMediumMountain} />
        <Image
          source={BarcodeHorizontal}
          style={styles.barcodeHorizontalImage}
        />
        {!!isShoppingListPointer && (
          <Image
            source={ShoppingListIllustration}
            style={styles.shoppingListIllustration}
          />
        )}
        <Image source={OnionGif} style={styles.onionImage} />
      </View>
    </View>
  )
}

export default DashboardGraphic
