import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNa from './Component/DrawerNa';
import TabNa from './Component/TabNa';
import { StackTab } from './Component/StackNa';

/*function Root() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="InformationScreen" component={InformationScreen} />
      <Tab.Screen name="ProgressScreen" component={ProgressScreen} />
      <Tab.Screen name="QnAScreen" component={QnAScreen} />
    </Tab.Navigator>
  );
}

/*<Drawer.Navigator>
      <Tab.Screen name="Profile" component={ProgressScreen} />
      <Tab.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );

  드로우 네비게이션인데 무한 팅김.*/

export default function App() {
  return (
    <NavigationContainer>
      <TabNa/>
    </NavigationContainer>
  );
}
