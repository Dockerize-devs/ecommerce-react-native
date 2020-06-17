import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Title, Button } from 'react-native-paper';
import ProductCardHalf from '../components/product/ProductCardHalf';
import Colors from '../data/constants/Colors';


export default ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.productsContainer}>
                <View style={styles.header}>
                    <Title style={styles.title}>Winter Furniture Sale</Title>
                    <Button
                        onPress={() => navigation.navigate('Filters')}
                        style={styles.button}
                        color={Colors.primary}
                        mode='outlined'
                    >Filter</Button>
                </View>
                <View style={styles.products}>
                    <ProductCardHalf />
                    <ProductCardHalf />
                    <ProductCardHalf />
                    <ProductCardHalf />
                    <ProductCardHalf />
                    <ProductCardHalf />
                    <ProductCardHalf />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    productsContainer: {
        flex: 1
    },
    header: {
        flex: 1,
        marginHorizontal: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    products: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    button: {
        borderWidth: 1,
        borderColor: Colors.primary
    }
})