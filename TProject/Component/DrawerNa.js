import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../Screens/Home";
import 'react-native-gesture-handler'
import { NavigationContainer } from "@react-navigation/native";
import StatisticsScreen from "../Screens/Statistics";
import InformationScreen from "../Screens/Information";
import Sample from "../Screens/Sample";
import Sample2 from "../Screens/Sample2";
const Drawer = createDrawerNavigator();

const DrawerNa = (props) => {
    return(
        <Drawer.Navigator>
        <Drawer.Screen name = "Home" component={ Sample } />
        <Drawer.Screen name = "StatisticsScreen" component={ Sample2 } />
        </Drawer.Navigator>
    )
}
export default DrawerNa;