import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNa from './Component/DrawerNa';
import StackTab from './Component/StackNa';

export default function App() {
  return (
    <NavigationContainer> 
      <StackTab></StackTab>
    </NavigationContainer>

  );
}
