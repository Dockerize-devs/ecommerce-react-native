import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Title, Button } from 'react-native-paper';
import ProductCardHalf from '../components/product/ProductCardHalf';
import Colors from '../data/constants/Colors';
import { useSelector } from 'react-redux';



export default ({ navigation }) => {

    const products = useSelector(state => state.product.products);

    const header = (
        <View style={styles.header}>
            <Title style={styles.title}>Winter Smartphone Sale</Title>
            <Button
                onPress={() => navigation.navigate('Filters')}
                style={styles.button}
                color={Colors.primary}
                mode='outlined'
            >Filter</Button>
        </View>
    );

    return (
        <FlatList
            ListHeaderComponent={header}
            numColumns={2}
            data={products}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <ProductCardHalf product={item} />}
        />)
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
        fontSize: 23,
        fontWeight: 'bold'
    },
    button: {
        borderWidth: 1,
        borderColor: Colors.primary
    }
})