import { Platform } from 'react-native'

export const isIOS = Platform.OS === 'ios'
export const isAndroid = !isIOS

export const ANDROID = 'ANDROID'
export const IOS = 'IOS'
