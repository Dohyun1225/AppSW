import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/Login';
import HomeScreen from './Screens/Home';
import SignUpScreen from './Screens/SignUp';
import StatisticsScreen from './Screens/Statistics';
import InformationScreen from './Screens/Information'
import QnAScreen from './Screens/QnA'
import ProgressScreen from './Screens/Progress';


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen}/>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
});
