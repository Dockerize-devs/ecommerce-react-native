import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Divider, Title } from 'react-native-paper';
import Colors from '../../data/constants/Colors';
import CartItem from './CartItem';



export default props => {
    return (
        <View style={styles.screen}>
            <Text>2 item(s) in your bag</Text>
            <CartItem />
            {/* <CartItem /> */}
            <View style={styles.cost}>
                <Text style={styles.costText}>Total MRP</Text>
                <Text style={styles.costValue}>$2798</Text>
            </View>
            <View style={styles.cost}>
                <Text style={styles.costText}>Shipping Charge</Text>
                <Text style={styles.costValue}>FREE</Text>
            </View>
            <Divider></Divider>
            <View style={styles.cost}>
                <Title style={styles.costText}>Total</Title>
                <Title style={styles.costValue}>$2798</Title>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {},
    cost: {
        marginHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5
    }
})