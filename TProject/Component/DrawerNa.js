import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../Screens/Home";
import 'react-native-gesture-handler'
import { NavigationContainer } from "@react-navigation/native";
import StatisticsScreen from "../Screens/Statistics";
import InformationScreen from "../Screens/Information";

const Drawer = createDrawerNavigator();

const DrawerNa = (props) => {
    return(
        <Drawer.Navigator>
        <Drawer.Screen name = "Home" component={ HomeScreen } />
        <Drawer.Screen name = "StatisticsScreen" component={ InformationScreen } />
        </Drawer.Navigator>
    )
}
export default DrawerNa;