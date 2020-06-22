import React from 'react';
import { View, ScrollView } from 'react-native';
import DeliveryZipSearch from '../components/cart/DeliveryZipSearch';
import GiftOffer from '../components/cart/GiftOffer';
import ItemList from '../components/cart/CartItemList';


export default ({ navigation }) => {
    return (
      <ScrollView>
        <View style={{ flex: 1, margin: 15}}>
            <DeliveryZipSearch />
            <GiftOffer />
            <ItemList />
        </View>
      </ScrollView>

    );
}