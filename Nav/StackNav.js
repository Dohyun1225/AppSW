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
import Q1selectScreen from '../src/Qus/Q1select';
import Q2selectScreen from '../src/Qus/Q2select';
import Q3selectScreen from '../src/Qus/Q3select';
import Q4selectScreen from '../src/Qus/Q4select';
import Q5selectScreen from '../src/Qus/Q5select';
import Q6selectScreen from '../src/Qus/Q6select';
import Q7selectScreen from '../src/Qus/Q7select';
import Q8selectScreen from '../src/Qus/Q8select';
import Qlist11Screen from '../src/Quslist/Qlist11';
import Qlist12Screen from '../src/Quslist/Qlist11';
import Qlist13Screen from '../src/Quslist/Qlist11';
import Qlist11bScreen from '../src/Quslist/Qlist11b';

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
      <Stack.Screen name="Q1select" component={Q1selectScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Q2select" component={Q2selectScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Q3select" component={Q3selectScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Q4select" component={Q4selectScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Q5select" component={Q5selectScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Q6select" component={Q6selectScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Q7select" component={Q7selectScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Q8select" component={Q8selectScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist11" component={Qlist11Screen}
      options={{ headerShown: false }}/>
       <Stack.Screen name="Qlist12" component={Qlist12Screen}
      options={{ headerShown: false }}/>
       <Stack.Screen name="Qlist13" component={Qlist13Screen}
      options={{ headerShown: false }}/>
       <Stack.Screen name="Qlist11b" component={Qlist11bScreen}
      options={{ headerShown: false }}/>
      </Stack.Navigator>
  );
}
export default StackNav;