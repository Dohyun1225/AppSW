import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StackNavigator } from "./StackNa";
import HomeScreen from "../Screens/Home";
import Sample from "../Screens/Sample";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const DrawerNa = () => {
    return(
        <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name = "Home" component={ HomeScreen } />
        </Drawer.Navigator>
    )
}
export default DrawerNa;