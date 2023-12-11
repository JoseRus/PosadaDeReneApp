import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';
import LogoComponent from './components/LogoComponent';
import ItemComponent from './components/ItemComponent';
import TotalComponent from './components/TotalComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LogoComponent style={{}}></LogoComponent>
        <FontAwesomeIcon icon={ faGear } size={ 32 } style={{}} />
      </View>
      <ScrollView style={{flex: 1, marginTop: 20, marginBottom: 20}}>
        <ItemComponent title="Test1" description="Descript test" price="$20.00"></ItemComponent>
        <ItemComponent title="Test2" description="Descript test" price="$20.00"></ItemComponent>
        <ItemComponent title="Test3" description="Descript test" price="$20.00"></ItemComponent>
        <ItemComponent title="Test4" description="Descript test" price="$20.00"></ItemComponent>
        <ItemComponent title="Test5" description="Descript test" price="$20.00"></ItemComponent>
        <ItemComponent title="Test6" description="Descript test" price="$20.00"></ItemComponent>
        <ItemComponent title="Test7" description="Descript test" price="$20.00"></ItemComponent>
        <ItemComponent title="Test8" description="Descript test" price="$20.00"></ItemComponent>
        <ItemComponent title="Test9" description="Descript test" price="$20.00"></ItemComponent>
        <TotalComponent total= "$100"></TotalComponent>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
