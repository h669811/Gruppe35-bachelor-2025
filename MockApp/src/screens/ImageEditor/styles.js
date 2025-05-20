import { StyleSheet } from 'react-native'; // Importing StyleSheet from react-native

const dynamicStyles = () => StyleSheet.create({
    container: {
        flex: 1, // Full height and width of the container
    },
    background: {
        position: 'absolute', // Positioning background to cover the entire screen
        flexDirection: 'column',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    whiteBackground: {
        flex: 1, // Takes up half (50%) of the screen
        backgroundColor: '#FFFFFF', // White color
    },
    pinkBackground: {
        flex: 1, // Takes up half (50%) of the screen
        backgroundColor: '#BBA4AF', // Pink color (this color code can be changed if desired)
    },
    header: {
        position: "absolute", // Positioning header absolutely
        alignItems: "center", // Centering items in the header
        width: '100%', // Full width of the header
        height: '100%', // Full height of the header
    },
    textBox: {
        position: "absolute", // Positioning text box absolutely
        alignItems: "center", // Centering items in the text box
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
    LeftBtn: {
        left: '7%', // Positioning the left button
        position: "absolute", // Positioning left button absolutely
    },
    RightBtn: {
        right: '7%', // Positioning the right button
        position: "absolute", // Positioning right button absolutely
        zIndex: 3, // Layering order for the button
        shadowColor: '#000', // Shadow color for the button
        shadowOffset: {
            width: 4, // Horizontal offset for shadow
            height: 4 // Vertical offset for shadow
        },
        shadowOpacity: 0.4, // Opacity of the shadow
        shadowRadius: 4, // Radius of the shadow
        elevation: 8 // Elevation for Android
    },
    ovalButton: {
        borderRadius: 25, // Making the button oval
        paddingVertical: 7, // Vertical padding to increase button height
        paddingHorizontal: 15, // Horizontal padding to increase button width
        marginVertical: 10, // Vertical margin between buttons
        elevation: 2, // Elevation for a slight raised effect on Android
        shadowColor: "#000", // Shadow color for the button
        shadowOffset: {
            width: 0, // No horizontal offset for shadow
            height: 1, // Slight vertical offset for shadow
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
        width: '100%', // Full width for button container
        position: "absolute", // Positioning buttons absolutely
        top: '7%', // Positioning buttons lower on the screen
    },
    imageContainer: {
        height: 500, // Fixed height for the image container
        width: '100%', // Full width of the image container
        padding: '4%', // Padding around the image container
        position: 'absolute', // Positioning the container absolutely
        top: '25%', // Positioning lower on the screen
    },
    image: {
        backgroundColor: '#E6DDE1', // Background color for the image
        height: '100%', // Full height of the image
        width: '100%', // Full width of the image
        borderRadius: 30, // Rounded corners for the image
    },
    imageCrop: {
        width: '100%', // Full width for cropped image
        height: '100%', // Full height for cropped image
        backgroundColor: '#E6DDE1', // Background color for cropped image
        borderRadius: 30, // Rounded corners for cropped image
    },
    cropArea: {
        position: 'absolute', // Positioning crop area absolutely
        borderColor: 'white', // Color of the border for crop area
        borderWidth: 7, // Width of the border for crop area
        backgroundColor: 'rgba(230, 221, 225, 0.3)', // Semi-transparent background color for crop area
    },
    corner: {
        position: 'absolute', // Positioning corners of the crop area absolutely
        width: 25, // Width of the corner
        height: 25, // Height of the corner
        backgroundColor: 'white', // Background color for the corner
        borderRadius: 1, // Slight rounding for corners
    },
    toolbar: {
        flexDirection: 'row', // Horizontal layout for toolbar buttons
        justifyContent: 'space-around', // Spacing out buttons evenly
        width: '100%', // Full width for toolbar
        bottom: '9%', // Positioning toolbar higher from the bottom
        position: 'absolute', // Positioning toolbar absolutely
    },
    iconButton: {
        height: '100%', // Full height for icon button
        left: 30, // Margin from the left
    },
    buttonGroup: {
        flexDirection: 'row', // Horizontal layout for button group
        width: '100%', // Full width for button group
        height: '130%', // Height of the button group (may need adjusting)
        padding: 3, // Padding around button group
    },
    button: {
        flex: 1, // Equal space for each button
        backgroundColor: '#B09AA5', // Background color for buttons
        padding: 15, // Padding around buttons
        alignItems: 'center', // Centering items in the button
        justifyContent: 'center', // Centering content within the button
        flexDirection: 'row', // Horizontal layout for button text and icons
        borderWidth: 1, // Width of the button border
        borderColor: '#BBA4AF', // Color of the button border
        borderRadius: '10%', // Rounding the corners of the button
    },
    icon: {
        marginRight: 8, // Right margin for icon in button
    },
    btnText: {
        color: '#FFFFFF', // Color of the button text
        fontSize: 25, // Font size of the button text
        fontWeight: 'bold', // Bold font weight for button text
   
    }
  });

export default dynamicStyles