import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import DeliveryZipSearch from '../components/cart/DeliveryZipSearch';
import GiftOffer from '../components/cart/GiftOffer';
import ItemList from '../components/cart/CartItemList';
import Colors from '../data/constants/Colors';


export default ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <ScrollView style={{marginBottom: 120}} >
        <DeliveryZipSearch />
        <GiftOffer />
        <ItemList />
      </ScrollView>
      <View style={styles.actionArea}>
      <Button
          onPress={() => { }}
          style={styles.btn}
          mode='contained'
          color={Colors.primary}
        >Checkout</Button>
        <Button
          onPress={() => { }}
          style={{...styles.btn, ...styles.continueBtn}}
          mode='outlined'
          color={Colors.primary}
        >Continue Shopping</Button>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 15
  },
  actionArea: {
    flex: 1,
    flexDirection: 'column-reverse'
  },
  btn: {
    height: 50,
    borderColor: Colors.primary,
    borderWidth: 1,
    paddingVertical: 5,
    marginTop: 10,
    marginHorizontal: 10
  },
  continueBtn: {
    // backgroundColor: Colors.darkWhite
  }
})