import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';
import LogoComponent from '../components/LogoComponent';
import ItemComponent from '../components/ItemComponent';
import TotalComponent from '../components/TotalComponent';
import DiscountComponent from '../components/DiscountComponent';
import { useState } from 'react';

const HomeScreen = ({navigation}) => {
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  const handleCheckChange = price => {
    setTotal(total + price)
  }

  const handleDiscountEnableChange = discountAmount => {
    setDiscount(discountAmount)
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
          <ItemComponent  title="2 Personas" description="Cama matrimonial. Sin televisor" price={25.00} handleCheckChange={handleCheckChange} settingsScreen={false}></ItemComponent>
          <ItemComponent title="2 Personas" description="Cama matrimonial. Sin Televisor" price={25.00} handleCheckChange={handleCheckChange} isSettings={false}></ItemComponent>
          <ItemComponent title="2 Personas" description="Cama matrimonial." price={30.00} handleCheckChange={handleCheckChange} isSettings={false}></ItemComponent>
          <ItemComponent title="3 Personas" description="Cama matrimonial y sencilla. Sin Televisor" price={35.00} handleCheckChange={handleCheckChange} isSettings={false}></ItemComponent>
          <ItemComponent title="3 Personas" description="Cama matrimonial y sencilla." price={40.00} handleCheckChange={handleCheckChange} isSettings={false}></ItemComponent>
          <ItemComponent title="4 Personas" description="Cama matrimonial y litera. Sin Televisor" price={45.00} handleCheckChange={handleCheckChange} isSettings={false}></ItemComponent>
          <ItemComponent title="4 Personas" description="Dos camas matrimoniales" price={45.00} handleCheckChange={handleCheckChange} isSettings={false}></ItemComponent>
          <ItemComponent title="5 Personar" description="Dos camas matrimoniales y una sencilla" price={55.00} handleCheckChange={handleCheckChange} isSettings={false}></ItemComponent>
          <ItemComponent title="Noche full 26 personas" description="Todas las habitaciones por una noche" price={295.00} handleCheckChange={handleCheckChange} isSettings={false}></ItemComponent>
          <ItemComponent title="Fin de semana" description="Todas las habitaciones por el fin de semana completo" price={650.00} handleCheckChange={handleCheckChange} isSettings={false}></ItemComponent>
          <DiscountComponent handleDiscountEnableChange={handleDiscountEnableChange}></DiscountComponent>
        </ScrollView>
        <TotalComponent total={total} discount={discount}></TotalComponent>
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
