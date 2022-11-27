import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StackNavigator } from "./StackNa";
import HomeScreen from "../Screens/Home";

const Drawer = createDrawerNavigator();

const DrawerNa = () => {
    return(
        <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name = "Home" component={ HomeScreen} />
        </Drawer.Navigator>
    )
}
export default DrawerNa;