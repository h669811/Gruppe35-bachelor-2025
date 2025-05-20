import { Image, View } from 'react-native'

import { OnionGif } from '../../../constants/assets'
import React from 'react'
import dynamicStyles from './styles'

const Onion = () => {
  // [ADDITIONAL_HOOKS]
  const styles = dynamicStyles()

  return (
    <View style={styles.container}>
      <Image source={OnionGif} style={styles.image} />
    </View>
  )
}

export default Onion
