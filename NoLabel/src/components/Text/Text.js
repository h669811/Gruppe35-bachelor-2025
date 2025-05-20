import React from 'react'
import { Text } from 'react-native-paper'
import { isAndroid } from '../../constants/platform'

const TextCustom = (props) => {
  const { fontWeight } = props

  // For bare react native Text component fontWeight don't work for android platform
  // as for qonsoll/react-native-design
  // To fix this issue we need to pass fontFamily
  // with reference for font with needed weight
  const androidOptimizedFontWeight =
    isAndroid && fontWeight ? { fontFamily: fontWeight } : {}

  return <Text {...props} {...androidOptimizedFontWeight} />
}

export default TextCustom
