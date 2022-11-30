import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler'
import { StyleSheet,View, Text, Image, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/Home";
import InformationScreen from "../Screens/Information";
import ProgressScreen from "../Screens/Progress";
import QnAScreen from "../Screens/QnA";

const Tab = createBottomTabNavigator();
function TabNa(){
    return(
        <Tab.Navigator initialRouteName="Home"
        drawerPosition='right'>
            <Tab.Screen name="Home" component={HomeScreen}/> 
      <Tab.Screen name="InformationScreen" component={InformationScreen} />
      <Tab.Screen name="ProgressScreen" component={ProgressScreen} />
      <Tab.Screen name="QnAScreen" component={QnAScreen} />
     
        </Tab.Navigator>
    );
}

export default TabNa;