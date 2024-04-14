import Realm from 'realm';
Realm.flags.THROW_ON_GLOBAL_REALM = true
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import SettingsScreen from './Screens/SettingsScreen';
import { RealmProvider } from '@realm/react';
import { ItemObject } from './Data/ItemObject';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({'UpperEastSide': require('./assets/fonts/UpperEastSide.otf')}, [fontsLoaded, fontError]);

  if(!fontsLoaded || fontError){
    return null;
  }

  SplashScreen.hideAsync();
  const Stack = createNativeStackNavigator();

  return (
    <RealmProvider schema={[ItemObject]} schemaVersion={2}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name='Home'
            component={HomeScreen}
          />

          <Stack.Screen
            name='Settings'
            component={SettingsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RealmProvider>
  ); 
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#0a0a0a'
  }
}