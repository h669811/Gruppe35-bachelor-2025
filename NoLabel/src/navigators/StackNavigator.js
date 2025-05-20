import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/';
import UploadScreen from '../screens/Upload';
import ImageEditorScreen from '../screens/ImageEditor/'
import Screens from '../screens/ImageCapture/';

const { FrontScreen, IngredientsScreen, NutritionScreen } = Screens;
const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, gestureEnabled: false, ...TransitionPresets.SlideFromRightIOS,}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Front" component={FrontScreen} />
        <Stack.Screen name="Ingredients" component={IngredientsScreen} />
        <Stack.Screen name="Nutrition" component={NutritionScreen} />
        <Stack.Screen name="ImageEditor" component={ImageEditorScreen} />
        <Stack.Screen name="Upload" component={UploadScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}