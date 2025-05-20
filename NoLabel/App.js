import React from 'react';
import AppNavigator from './src/navigators/StackNavigator';
import { Buffer } from 'buffer';

global.Buffer = Buffer;

export default function App() {
  return <AppNavigator />;
}
