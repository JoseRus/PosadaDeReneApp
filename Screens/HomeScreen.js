import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';
import LogoComponent from '../components/LogoComponent';
import ItemComponent from '../components/ItemComponent';
import TotalComponent from '../components/TotalComponent';
import DiscountComponent from '../components/DiscountComponent';
import { useState } from 'react';
import { Button } from '@rneui/base';
import { useRealm, useQuery } from '@realm/react';
import { ItemObject } from '../Data/ItemObject';

const HomeScreen = ({ navigation }) => {
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  /* const handleCheckChange = price => {
    setTotal(total + price)
  } */

  const handleDiscountEnableChange = discountAmount => {
    setDiscount(discountAmount)
  }

  const items = useQuery(ItemObject);

  if (items && items.length > 0) {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <LogoComponent style={{}}></LogoComponent>
          <Pressable onPress={() => navigation.navigate('Settings')}>
            <FontAwesomeIcon icon={faGear} size={32} style={{}} />
          </Pressable>
        </View>
        <ScrollView style={{ flex: 1, marginTop: 20, marginBottom: 20 }}>
          {items.map((item) => {
            return (
              <ItemComponent
                key={item._id}
                id={item._id}
                title={item.title}
                description={item.description}
                price={item.price}
                multiple={item.multiple}
                isSettings={false}
                total={total}
                setTotal={setTotal}>

              </ItemComponent>
            )
          })}
          {/* <ItemComponent title="2 Personas" description="Cama matrimonial. Sin televisor" price={25.00} handleCheckChange={handleCheckChange} isSettings={false}></ItemComponent> */}
          <DiscountComponent handleDiscountEnableChange={handleDiscountEnableChange}></DiscountComponent>
        </ScrollView>
        <TotalComponent total={total} discount={discount}></TotalComponent>
        <StatusBar style="auto" />
      </View>
    )
  }
  else {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <LogoComponent style={{}}></LogoComponent>
          <Pressable onPress={() => navigation.navigate('Settings')}>
            <FontAwesomeIcon icon={faGear} size={32} style={{}} />
          </Pressable>
        </View>
        <View style={{ justifyContent: "center", flex: 1 }}>
          <Text style={{ textAlign: "center", fontSize: 25, marginBottom: 10 }}>No hay elementos</Text>
          <Button onPress={() => navigation.navigate('Settings')} >Agregar Elementos</Button>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
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
