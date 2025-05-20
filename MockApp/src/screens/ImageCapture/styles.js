import { StyleSheet } from 'react-native'; // Importing StyleSheet from react-native
import theme from '../../../theme'; // Importing theme for color constants

const dynamicStyles = () => StyleSheet.create({

    container: {
        flex: 1, // Full height and width of the container
    },

    background: {
        position: 'absolute', // Positioning the background to fill the screen
        flexDirection: 'column',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    
    whiteBackground: {
        flex: 1, // Takes half (50%) of the screen
        backgroundColor: '#FFFFF', // White color
    },
    
    pinkBackground: {
        flex: 1, // Takes half (50%) of the screen
        backgroundColor: '#BBA4AF', // Pink color (this color code can be changed if desired)
    },
    
    header: {
        position: "absolute", // Positioning the header absolutely
        alignItems: "center", // Centering the items in the header
        width: '100%', // Full width of the header
        height: '100%', // Full height of the header
    },
    
    textBox: {
        position: "absolute", // Positioning the text box absolutely
        alignItems: "center", // Centering the text in the box
        width: '100%', // Full width of the text box
        height: '100%', // Full height of the text box
        top: '17%', // Positioning the text box lower on the screen
    },

    headerText: {
        color: '#92697D', // Color of the header text
        fontSize: 25, // Font size of the header text
        fontWeight: 'bold', // Bold font weight for the header text
    },

    underText: {
        color: '#BBA4AF', // Color of the under text
        fontSize: 15, // Font size of the under text
        fontWeight: 'bold', // Bold font weight for the under text
        textAlign: 'center', // Centering the under text
    },

    ovalButton: {
        borderRadius: 25, // Making the button oval
        paddingVertical: 7, // Vertical padding to increase button height
        paddingHorizontal: 15, // Horizontal padding to increase button width
        marginVertical: 10, // Vertical margin between buttons
        elevation: 2, // Elevation for a slight raised effect on Android
        shadowColor: "#000", // Color for the shadow
        shadowOffset: {
            width: 0, // No horizontal shadow offset
            height: 1, // Slight vertical shadow offset
        },
        shadowOpacity: 0.2, // Opacity of the shadow
        shadowRadius: 1.5, // Radius of the shadow
    },

    buttonText: {
        color: '#FFFFFF', // Color of the button text
        fontSize: 17, // Font size of the button text
        fontWeight: 'bold', // Bold font weight for the button text
    },
    
    btns: {
        width: '100%', // Full width for the button container
        position: "absolute", // Positioning the button container absolutely
        top: '7%', // Positioning buttons lower on the screen
        left: 20, // Margin from the left
    },

    icon: {
        bottom: -30, // Positioning the icon lower
    },

    wrapper: {
        alignItems: 'center', // Centering items in the wrapper
        flex: 1, // Full height and width of the wrapper
    },

    photoContainer: {
        padding: '4%', // Padding around the photo container
        top: '22%', // Positioning the photo container lower on the screen
        width: '100%', // Full width of the photo container
        height: 500, // Fixed height for the photo container
        position: "absolute", // Positioning the photo container absolutely
    },

    camera: {
        width: '100%', // Full width of the camera view
        height: '100%', // Full height of the camera view
    },
    
    gridOverlay: {
        position: 'absolute', // Positioning the grid overlay absolutely
        padding: '4%', // Padding around the photo container
        justifyContent: 'center', // Centering grid cells
        alignItems: 'center', // Aligning grid cells in the center
        pointerEvents: 'none',
    },
    
    row: {
        flexDirection: 'row', // Horizontal layout for each row
        flex: 1, // Equal height for each row
        width: '100%', // Full width for each row
    },
    
    cell: {
        borderColor: 'rgba(255, 255, 255, 0.5)', // Color and opacity for grid cells
        borderWidth: 0.5, // Width of the cell border
        flex: 1, // Equal height for each cell
    },

    shutterContainer: {
        position: "absolute", // Positioning the shutter container absolutely
        bottom: 60, // Distance from the bottom of the screen
        width: "100%", // Full width of the shutter container
        flexDirection: "row", // Horizontal layout for shutter buttons
        justifyContent: "center", // Centering the shutter buttons
    },
    
    shutterBtn: {
        justifyContent: 'center', // Centering content within the shutter button
        alignItems: 'center', // Aligning items in the center
        width: 80, // Width of the shutter button
        height: 80, // Height of the shutter button
        borderRadius: 40, // Circular button shape
        borderWidth: 5, // Width of the border
        borderColor: "white", // Color of the button border
        zIndex: 3, // Z-index for stacking
        shadowColor: '#000', // Shadow color
        shadowOffset: {
            width: 4, // Horizontal offset of the shadow
            height: 4 // Vertical offset of the shadow
        },
        shadowOpacity: 0.4, // Opacity of the shadow
        shadowRadius: 4, // Radius of the shadow
        elevation: 8 // Elevation for Android
    },
    
    shutterBtnInner: {
        width: 60, // Width of the inner button
        height: 60, // Height of the inner button
        borderRadius: 30, // Circular shape for the inner button
        backgroundColor: "white", // Background color of the inner button
    },

    torchWrapper: {
        position: 'absolute', // Positioning the torch wrapper absolutely
        justifyContent: 'center', // Centering the torch icon
        alignItems: 'center', // Aligning items in the center
        width: 60, // Width of the torch button
        height: 60, // Height of the torch button
        borderRadius: 30, // Circular shape for the torch button
        backgroundColor: theme.CORE.COLORS.white, // Background color for the torch button
        zIndex: 3, // Z-index for stacking
        shadowColor: '#000', // Shadow color
        shadowOffset: {
            width: 4, // Horizontal offset of the shadow
            height: 4 // Vertical offset of the shadow
        },
        left: 40, // Margin from the left
        shadowOpacity: 0.4, // Opacity of the shadow
        shadowRadius: 4, // Radius of the shadow
        elevation: 8 // Elevation for Android
    },
    
    torchIcon: {
        width: 36, // Width of the torch icon
        height: 36, // Height of the torch icon
        tintColor: theme.CORE.COLORS['primary-default'] // Tint color for the torch icon
    },
});

export default dynamicStyles;
