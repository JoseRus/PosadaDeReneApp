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
import { ImageBackground } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({ 'UpperEastSide': require('./assets/fonts/UpperEastSide.ttf') }, [fontsLoaded, fontError]);

  if (!fontsLoaded || fontError) {
    return null;
  }

  SplashScreen.hideAsync();
  const Stack = createNativeStackNavigator();

  return (
    <RealmProvider schema={[ItemObject]} schemaVersion={2}>
      <ImageBackground style={{ flex: 1, backgroundColor: '#0a0a0a' }} source={require('./assets/background-frame-2.png')}>
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
      </ImageBackground>
    </RealmProvider>
  );
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  }
}