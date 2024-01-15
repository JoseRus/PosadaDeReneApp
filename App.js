import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import SettingsScreen from './Screens/SettingsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
        >  
        </Stack.Screen>
        <Stack.Screen
          name='Settings'
          component={SettingsScreen}
        >

        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}