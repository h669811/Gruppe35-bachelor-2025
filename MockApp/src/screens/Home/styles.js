import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../constants/windowSize'

import { StyleSheet } from 'react-native'
import { isIOS } from '../../constants/platform'
import theme from '../../../theme'

const dynamicStyles = ({ isTopNavWhite }) => {
  return StyleSheet.create({
    logo: {
          width: 120,
          height: 48,
          tintColor: isTopNavWhite
            ? theme.CORE.COLORS.white
            : theme.CORE.COLORS.black
        },
    cardWrapper: {
      padding: 12,
      width: WINDOW_WIDTH - 100,
      height: WINDOW_HEIGHT / 5,
      backgroundColor: '#fff',
      borderRadius: 12
    },
    cardContainer: {
      flexDirection: 'row',
      flex: 1,
      height: '100%'
    },
    cardScroll: {
      width: '95%'
    },
    cardIcon: {

      width: 24,
      height: 24,
      tintColor: theme.CORE.COLORS['primary-default']
    },
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    camera: {
      top: 200,
      width: "70%",  // Kameraet fyller bredden
      height: "30%",  // Kameraet tar opp 60% av skjermens høyde

    },
    wrapper: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: theme.CORE.COLORS.white
    },
    headerContainer: {
      width: '100%',
      alignItems: 'center',
      justifyContent: isIOS ? 'flex-end' : 'center',
      position: 'absolute',
      top: isIOS ? 120 : 24,
      zIndex: 2
    },

    barcode: {
      width: 140,
      height: 10,
      tintColor: theme.CORE.COLORS.black,
      position: 'absolute',
      top: 0,
      zIndex: 1
    },
    leftButton: {
      alignItems: 'center',
      position: 'absolute',
      left: 0,
      paddingHorizontal: 24
    },
    headerIcon: {
      tintColor: isTopNavWhite
        ? theme.CORE.COLORS.white
        : theme.CORE.COLORS['primary-default'],
      width: 32,
      height: 32
    },
    rightButton: {
      alignItems: 'center',
      position: 'absolute',
      right: 0,
      paddingHorizontal: 24
    },
    carouselWrapper: {
      position: 'absolute',
      bottom: 120,
      zIndex: 1,
      width: WINDOW_WIDTH,
      alignItems: 'center',
      justifyContent: 'center'
    },
    carouselContainer: { flexDirection: 'row', marginBottom: 16 },
    carouselItem: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginHorizontal: 4,
      backgroundColor: theme.CORE.COLORS['white-t-lighten2']
    },
    carouselSelectedItem: {
      backgroundColor: theme.CORE.COLORS.white
    },
    textSizeWrapper: {
      width: WINDOW_WIDTH - 100,
      height: 20,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: isIOS ? 48 : 24,
      zIndex: 1
    },
    lettersContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      bottom: isIOS ? 0 : 8
    },
    shutterContainer: {
        position: "absolute",
        bottom: 44,
        left: 0,
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30,
      },
      shutterBtn: {
        backgroundColor: "transparent",
        borderWidth: 5,
        borderColor: "white",
        width: 85,
        height: 85,
        borderRadius: 45,
        alignItems: "center",
        justifyContent: "center",
      },
      shutterBtnInner: {
        width: 70,
        height: 70,
        borderRadius: 50,
      },
    sliderWrapper: { width: '100%', bottom: isIOS ? 0 : 20 },
    thumbTouchSize: { width: 50, height: 50 },
    sliderContainer: isIOS ? { height: 20 } : {},
    track: { height: 2 },
    speakButtonContainer: { height: '100%', justifyContent: 'flex-end' },
    rescanText: { 
      height: '100%', 
      justifyContent: 'center', 
      position: 'absolute',
      top:100,
      color: '#92697D'
    }
  })
    
}

export default dynamicStyles
