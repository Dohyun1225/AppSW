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
import Qlist12Screen from '../src/Quslist/Qlist12';
import Qlist13Screen from '../src/Quslist/Qlist13';
import Qlist11bScreen from '../src/Quslist/Qlist11b';
import Qlist21Screen from '../src/Quslist/Qlist21';
import Qlist21bScreen from '../src/Quslist/Qlist21b';
import Qlist22Screen from '../src/Quslist/Qlist22';
import Qlist22bScreen from '../src/Quslist/Qlist22b';
import Qlist23Screen from '../src/Quslist/Qlist23';
import Qlist31Screen from '../src/Quslist/Qlist31';
import Qlist31bScreen from '../src/Quslist/Qlist31b';
import Qlist32Screen from '../src/Quslist/Qlist32';
import Qlist32bScreen from '../src/Quslist/Qlist32b';
import Qlist33Screen from '../src/Quslist/Qlist33';
import Qlist33bScreen from '../src/Quslist/Qlist33b';
import Qlist33cScreen from '../src/Quslist/Qlist33c';
import Qlist41Screen from '../src/Quslist/Qlist41';
import Qlist41bScreen from '../src/Quslist/Qlist41b';
import Qlist41cScreen from '../src/Quslist/Qlist41c';
import Qlist41dScreen from '../src/Quslist/Qlist41d';
import Qlist42Screen from '../src/Quslist/Qlist42';
import Qlist42bScreen from '../src/Quslist/Qlist42b';
import Qlist42cScreen from '../src/Quslist/Qlist42c';
import Qlist42dScreen from '../src/Quslist/Qlist42d';
import Qlist43Screen from '../src/Quslist/Qlist43';
import Qlist43bScreen from '../src/Quslist/Qlist43b';
import Qlist43cScreen from '../src/Quslist/Qlist43c';
import Qlist43dScreen from '../src/Quslist/Qlist43d';
import Qlist51Screen from '../src/Quslist/Qlist51';
import Qlist51bScreen from '../src/Quslist/Qlist51b';
import Qlist52Screen from '../src/Quslist/Qlist52';
import Qlist52bScreen from '../src/Quslist/Qlist52b';
import Qlist53Screen from '../src/Quslist/Qlist53';
import Qlist53bScreen from '../src/Quslist/Qlist53b';
import Qlist61Screen from '../src/Quslist/Qlist61';
import Qlist61bScreen from '../src/Quslist/Qlist61b';
import Qlist62Screen from '../src/Quslist/Qlist62';
import Qlist62bScreen from '../src/Quslist/Qlist62b';
import Qlist62cScreen from '../src/Quslist/Qlist62c';
import Qlist62dScreen from '../src/Quslist/Qlist62d';
import Qlist63Screen from '../src/Quslist/Qlist63';
import Qlist63bScreen from '../src/Quslist/Qlist63b';
import Qlist71Screen from '../src/Quslist/Qlist71';
import Qlist71bScreen from '../src/Quslist/Qlist71b';
import Qlist71cScreen from '../src/Quslist/Qlist71c';
import Qlist72Screen from '../src/Quslist/Qlist72';
import Qlist72bScreen from '../src/Quslist/Qlist72b';
import Qlist72cScreen from '../src/Quslist/Qlist72c';
import Qlist73Screen from '../src/Quslist/Qlist73';
import Qlist73bScreen from '../src/Quslist/Qlist73b';
import Qlist81Screen from '../src/Quslist/Qlist81';
import Qlist81bScreen from '../src/Quslist/Qlist81b';
import Qlist81cScreen from '../src/Quslist/Qlist81c';
import Qlist81dScreen from '../src/Quslist/Qlist81d';
import Qlist82Screen from '../src/Quslist/Qlist82';
import Qlist82bScreen from '../src/Quslist/Qlist82b';
import Qlist82cScreen from '../src/Quslist/Qlist82c';
import Qlist83Screen from '../src/Quslist/Qlist83';
import Qlist83bScreen from '../src/Quslist/Qlist83b';
import Qlist83cScreen from '../src/Quslist/Qlist83c';


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
      <Stack.Screen name="Qlist21" component={Qlist21Screen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist21b" component={Qlist21bScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist22" component={Qlist22Screen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist22b" component={Qlist22bScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist23" component={Qlist23Screen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist31" component={Qlist31Screen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist31b" component={Qlist31bScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist32" component={Qlist32Screen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist32b" component={Qlist32bScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist33" component={Qlist33Screen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist33b" component={Qlist33bScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist33c" component={Qlist33cScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist41" component={Qlist41Screen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist41b" component={Qlist41bScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist41c" component={Qlist41cScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist41d" component={Qlist41dScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist42" component={Qlist42Screen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist42b" component={Qlist42bScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist42c" component={Qlist42cScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist42d" component={Qlist42dScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist43" component={Qlist43Screen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist43b" component={Qlist43bScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist43c" component={Qlist43cScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist43d" component={Qlist43dScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist51" component={Qlist51Screen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist51b" component={Qlist51bScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist52" component={Qlist52Screen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist52b" component={Qlist52bScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist53" component={Qlist53Screen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist53b" component={Qlist53bScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist61" component={Qlist61Screen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist61b" component={Qlist61bScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist62" component={Qlist62Screen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist62b" component={Qlist62bScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist62c" component={Qlist62cScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist62d" component={Qlist62dScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist63" component={Qlist63Screen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist63b" component={Qlist63bScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist71" component={Qlist71Screen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist71b" component={Qlist71bScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist71c" component={Qlist71cScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist72" component={Qlist72Screen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist72b" component={Qlist72bScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist72c" component={Qlist72cScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist73" component={Qlist73Screen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist73b" component={Qlist73bScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist81" component={Qlist81Screen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist81b" component={Qlist81bScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist81c" component={Qlist81cScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist81d" component={Qlist81dScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist82" component={Qlist82Screen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist82b" component={Qlist82bScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist82c" component={Qlist82cScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist83" component={Qlist83Screen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist83b" component={Qlist83bScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen name="Qlist83c" component={Qlist83cScreen}
      options={{ headerShown: false }}/>
      </Stack.Navigator>
  );
}
export default StackNav;