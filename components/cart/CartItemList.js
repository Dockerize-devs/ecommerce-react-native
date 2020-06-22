import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import Colors from '../../data/constants/Colors';
import CartItem from './CartItem';



export default props => {
    return (
        <View style={styles.screen}>
            <Text>2 item(s) in your bag</Text>
            <CartItem />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {}
})