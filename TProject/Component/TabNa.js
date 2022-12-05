import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler'
import { StyleSheet,View, Text, Image, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/Home";
import InformationScreen from "../Screens/Information";
import ProgressScreen from "../Screens/Progress";
import QnAScreen from "../Screens/QnA";
import LoginScreen from "../Screens/Login";
import StatisticsScreen from "../Screens/Statistics";
import Sample1 from "../Screens/Sample2";

const Tab = createBottomTabNavigator();
function TabNa(){
    return(
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={HomeScreen}
            options={{headerShown: false}}/> 
      <Tab.Screen name="InformationScreen" component={InformationScreen} />
      <Tab.Screen name="ProgressScreen" component={ProgressScreen} />
      <Tab.Screen name="QnAScreen" component={Sample1} />
     
        </Tab.Navigator>
    );
}

export default TabNa;