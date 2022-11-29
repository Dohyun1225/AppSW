import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNa from './Component/DrawerNa';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/Home';
import InformationScreen from './Screens/Information';
import LoginScreen from './Screens/Login';
import SignUpScreen from './Screens/SignUp';
import StatisticsScreen from './Screens/Statistics';
import ProgressScreen from './Screens/Progress';
import QnAScreen from './Screens/QnA';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Root() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={ProgressScreen} />
      <Tab.Screen name="Settings" component={Settings} />
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
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen}/>
      <Stack.Screen name="Statistics" component={StatisticsScreen}/>
      <Stack.Screen name="Information" component={InformationScreen}/>
      <Stack.Screen name="Progress" component={ProgressScreen}/>
      <Stack.Screen name="QnA" component={QnAScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
