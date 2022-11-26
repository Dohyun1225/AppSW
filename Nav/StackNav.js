import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../src/Login';
import SignupScreen from '../src/Signup';
import StartScreen from '../src/Start';
import MainScreen from '../src/Main';
import Q1Screen from '../src/Qus/Q1';
import Q2Screen from '../src/Qus/Q2';
import Q3Screen from '../src/Qus/Q3';
import Q4Screen from '../src/Qus/Q4';
import Q5Screen from '../src/Qus/Q5';
import Q6Screen from '../src/Qus/Q6';
import Q7Screen from '../src/Qus/Q7';
import Q8Screen from '../src/Qus/Q8';

const Stack = createStackNavigator()
const StackNav = () =>{
  return (
      <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Signup" component={SignupScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Start" component={StartScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Main" component={MainScreen}
      options={{ headerShown: false }}/>
       <Stack.Screen name="Q1" component={Q1Screen}
      options={{ headerShown: false }}/>
       <Stack.Screen name="Q2" component={Q2Screen}
      options={{ headerShown: false }}/>
       <Stack.Screen name="Q3" component={Q3Screen}
      options={{ headerShown: false }}/>
       <Stack.Screen name="Q4" component={Q4Screen}
      options={{ headerShown: false }}/>
       <Stack.Screen name="Q5" component={Q5Screen}
      options={{ headerShown: false }}/>
       <Stack.Screen name="Q6" component={Q6Screen}
      options={{ headerShown: false }}/>
       <Stack.Screen name="Q7" component={Q7Screen}
      options={{ headerShown: false }}/>
       <Stack.Screen name="Q8" component={Q8Screen}
      options={{ headerShown: false }}/>
      </Stack.Navigator>
  );
}
export default StackNav;