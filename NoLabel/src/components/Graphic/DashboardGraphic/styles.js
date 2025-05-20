import { StyleSheet } from 'react-native'

import theme from '../../../../theme'
import { WINDOW_WIDTH } from '../../../constants/windowSize'

const dynamicStyles = () => {
  return StyleSheet.create({
    container: {
      position: 'absolute',
      width: '100%',
      height: 166,
      bottom: 0,
      zIndex: 1,
      alignItems: 'center'
    },
    onionImage: {
      width: 110,
      height: 124,
      position: 'absolute',
      bottom: -35,
      right: -10
    },
    barcodeHorizontalImage: {
      width: 60,
      height: 42,
      position: 'absolute',
      bottom: 20,
      right: 60
    },
    barcodeVerticalImage: {
      width: 40,
      height: 70,
      position: 'absolute',
      bottom: 35,
      left: 20
    },
    shoppingListIllustration: {
      width: 100,
      height: 90,
      position: 'absolute',
      bottom: 25,
      right: 10
    },
    scanIllustration: {
      width: 108,
      height: 90,
      position: 'absolute',
      bottom: 55,
      left: 5
    },
    rightMediumMountain: {
      width: 120,
      height: 62,
      position: 'absolute',
      bottom: 30,
      right: 50
    },
    rightSmallMountain: {
      width: 160,
      height: 52,
      position: 'absolute',
      bottom: 40,
      right: -40
    },
    boll3x: {
      width: 18,
      height: 36,
      position: 'absolute',
      bottom: 104,
      right: 104
    },
    balloon: {
      width: 66,
      height: 100,
      position: 'absolute',
      bottom: 60,
      right: 150
    },
    rightBigMountain: {
      width: 300,
      height: 126,
      position: 'absolute',
      bottom: 40,
      right: -150
    },
    owlImage: {
      width: 60,
      height: 66,
      position: 'absolute',
      bottom: 20,
      left: -40,
      zIndex: 4
    },
    ferrisWealImage: {
      width: 146,
      height: 150,
      position: 'absolute',
      bottom: 10,
      left: 80
    },
    leftMediumMountain: {
      width: 100,
      height: 52,
      position: 'absolute',
      bottom: 35,
      left: 10
    },
    leftSmallMountain: {
      width: 160,
      height: 62,
      position: 'absolute',
      bottom: 40,
      left: -90
    },
    leftBigMountain: {
      width: 200,
      height: 120,
      position: 'absolute',
      bottom: 40,
      left: -110
    },
    background: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: 80,
      backgroundColor: '#FFE6F8'
    },
    owlArrowImage: {
      position: 'absolute',
      top: -3,
      left: WINDOW_WIDTH / 2 - 42,
      height: 90,
      width: 64,
      zIndex: 2
    },
    graphicContainer: {
      position: 'absolute',
      width: '100%',
      height: '40%',
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    },
    questionContainer: {
      width: '80%',
      height: '60%',
      backgroundColor: theme.CORE.COLORS['primary-lighten-5'],
      borderRadius: 12,
      borderWidth: 2,
      borderColor: theme.CORE.COLORS['primary-lighten-1'],
      justifyContent: 'center',
      alignItems: 'center',
      padding: 24
    },
    buttonsContainer: {
      flexDirection: 'row',
      width: '100%',
      borderTopColor: theme.CORE.COLORS['grey-6'],
      borderTopWidth: 1,
      justifyContent: 'space-between'
    },
    leftButton: {
      width: '50%',
      borderRightColor: theme.CORE.COLORS['grey-6'],
      borderRightWidth: 1,
      height: 52,
      justifyContent: 'center',
      alignItems: 'center'
    },
    rightButton: {
      width: '50%',
      height: 52,
      justifyContent: 'center',
      alignItems: 'center'
    },
    heartImage: {
      width: 64,
      height: 64,
      tintColor: '#AE5780'
    },
    heartContainer: { position: 'absolute', bottom: -32 },
    heartsWrapper: {
      position: 'absolute',
      width: '40%',
      height: 220,
      zIndex: 1,
      left: '15%',
      top: -220
    }
  })
}

export default dynamicStyles
