import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ProductCardHalf from '../components/product/ProductCardHalf';


export default ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.productsContainer}>
                <ProductCardHalf />
                <ProductCardHalf />
                <ProductCardHalf />
                <ProductCardHalf />
                <ProductCardHalf />
                <ProductCardHalf />
                <ProductCardHalf />
                <ProductCardHalf />
                <ProductCardHalf />
                <ProductCardHalf />
                <ProductCardHalf />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    productsContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
    }
})