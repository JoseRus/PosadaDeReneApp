import Realm from 'realm';
Realm.flags.THROW_ON_GLOBAL_REALM = true
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import SettingsScreen from './Screens/SettingsScreen';
import { RealmProvider } from '@realm/react';
import { ItemObject } from './Data/ItemObject';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
 
  const Stack = createNativeStackNavigator();
  
  return (
    <RealmProvider schema={[ItemObject]} schemaVersion={2}>
      <NavigationContainer>
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
