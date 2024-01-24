import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';
import LogoComponent from '../components/LogoComponent';
import ItemComponent from '../components/ItemComponent';
import TotalComponent from '../components/TotalComponent';
import { useState } from 'react';

const HomeScreen = ({navigation}) => {
  const [total, setTotal] = useState(0);

  const handleCheckChange = price => {
    setTotal(total + price)
  }

  return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
          <LogoComponent style={{}}></LogoComponent>
          <Pressable onPress={() => navigation.navigate('Settings')}>
            <FontAwesomeIcon icon={faGear} size={32} style={{}} />
          </Pressable>
        </View>
        <ScrollView style={{ flex: 1, marginTop: 20, marginBottom: 20 }}>
          <ItemComponent  title="test" description="Test description" price={10.00} handleCheckChange={handleCheckChange} settingsScreen={false}></ItemComponent>
          <ItemComponent title="Test2" description="Descript test" price={20.00} handleCheckChange={handleCheckChange} isSettings={false}></ItemComponent>
          <ItemComponent title="Test3" description="Descript test" price={30.00} handleCheckChange={handleCheckChange} isSettings={false}></ItemComponent>
          <ItemComponent title="Test4" description="Descript test" price={40.00} handleCheckChange={handleCheckChange} isSettings={false}></ItemComponent>
          <ItemComponent title="Test5" description="Descript test" price={50.00} handleCheckChange={handleCheckChange} isSettings={false}></ItemComponent>
          <ItemComponent title="Test6" description="Descript test" price={60.00} handleCheckChange={handleCheckChange} isSettings={false}></ItemComponent>
          <ItemComponent title="Test7" description="Descript test" price={70.00} handleCheckChange={handleCheckChange} isSettings={false}></ItemComponent>
          <ItemComponent title="Test8" description="Descript test" price={80.00} handleCheckChange={handleCheckChange} isSettings={false}></ItemComponent>
          <ItemComponent title="Test9" description="Descript test" price={90.00} handleCheckChange={handleCheckChange} isSettings={false}></ItemComponent>
          <TotalComponent total={total}></TotalComponent>
        </ScrollView>
        <StatusBar style="auto" />
      </View>
  );
}

export default HomeScreen;

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
