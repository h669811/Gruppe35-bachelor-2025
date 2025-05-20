import { StyleSheet } from 'react-native'

const dynamicStyles = () => {
  return StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 24,
      right: 24,
      height: 120,
      width: 100,
      zIndex: 2
    },
    image: { width: '100%', height: '100%' }
  })
}

export default dynamicStyles
