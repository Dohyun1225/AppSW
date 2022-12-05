import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../Screens/Home";
import LoginScreen from "../Screens/Login";
import SignUpScreen from "../Screens/SignUp";
import StatisticsScreen from "../Screens/Statistics";
import ProgressScreen from "../Screens/Progress";
import QnAScreen from "../Screens/QnA";
import InformationScreen from "../Screens/Information";


const Stack = createStackNavigator();

const StackTab = () => {
    return(
      <NavigationContainer>
       <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen}
        options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="Statistics" component={StatisticsScreen}/>
        <Stack.Screen name="Information" component={InformationScreen}/>
        <Stack.Screen name="Progress" component={ProgressScreen}/>
        <Stack.Screen name="QnA" component={QnAScreen}/>
      </Stack.Navigator>
      </NavigationContainer>

    );
}


export {StackTab};