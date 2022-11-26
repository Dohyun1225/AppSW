import { 
  StyleSheet,
  Text, 
  View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StackNav from './Nav/StackNav';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer initialRouteName='Login'>
      <Stack.Navigator>
        <Stack.Screen name="StackNav" component={StackNav}
          options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});