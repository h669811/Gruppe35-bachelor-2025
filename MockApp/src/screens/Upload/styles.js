import { StyleSheet } from 'react-native'; // Importing StyleSheet from react-native

const dynamicStyles = () => StyleSheet.create({

    spinContainer: {
        flex: 1,
        justifyContent: 'center',
        align: 'center',
      },
      spinner: {
        transform: [{ scale: 2 }],
      },
});

export default dynamicStyles;
