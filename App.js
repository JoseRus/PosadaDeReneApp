import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';
import LogoComponent from './components/LogoComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LogoComponent style={{}}></LogoComponent>
        <FontAwesomeIcon icon={ faGear } size={ 32 } style={{}} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginTop: 50,
    marginRight: 20,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
});
