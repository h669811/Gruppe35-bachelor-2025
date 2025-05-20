import { Dimensions } from 'react-native'
import { initialWindowMetrics } from 'react-native-safe-area-context'
// import { isIOS } from './platform'

//xport const WINDOW_HEIGHT = initialWindowMetrics.frame.height
// Can be returned in future, temporary removed
// +  (isIOS ? 0 : initialWindowMetrics.insets.top)

export const WINDOW_HEIGHT = Dimensions.get('window').height
export const WINDOW_WIDTH = Dimensions.get('window').width

