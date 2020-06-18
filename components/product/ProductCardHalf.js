import React from 'react';
import PropTypes from 'prop-types'
import { View, StyleSheet, Image } from 'react-native';
import {
    Card,
    Button,
    Title,
    Subheading,
    Text
} from 'react-native-paper';
import Colors from '../../data/constants/Colors'
import Product from '../../models/Product';

const ProductCardHalf = props => {
    const { product } = props;

    return (
        <View style={styles.container}>
            <Card>
                {/* <Card.Cover style={{height: 140}} resizeMode='cover' source={{ uri: product.cover_image }} /> */}
                <Image style={styles.cover} resizeMode='contain' source={{ uri: product.cover_image }} />

                <Card.Content style={styles.content}>
                    <View style={styles.titleContainer}>
                        <Title style={styles.title}>{product.name}</Title>
                        <Subheading style={styles.subTitle}>{product.shop_name}</Subheading>
                    </View>

                    <View style={styles.priceSection}>
                        <View style={styles.priceMessage}>
                            <Text style={{ ...styles.priceDropText, ...styles.priceDrop }}>PRICE DROP </Text>
                            <Text style={{ ...styles.priceDropValue, ...styles.priceDrop }}>
                                EXTRA {product.price_drop_percentage}% OFF
                            </Text>
                        </View>
                        <View style={styles.priceDeal}>
                            <View style={styles.oldPriceContainer}>
                                <Text style={styles.oldPrice}>$ {product.previous_price} </Text>
                            </View>
                            <View style={styles.newPriceContainer}>
                                <Text style={styles.newPrice}>$</Text>
                                <Text style={styles.newPriceValue}>{product.current_price}</Text>
                                <Text style={styles.newPrice}>01</Text>
                            </View>
                        </View>
                    </View>
                </Card.Content>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 5,
        minWidth: 140,
        maxWidth: '50%',
    },
    content: {
        alignItems: 'center'
    },
    titleContainer: {
        marginTop: 15
    },
    title: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: 'bold',
        height: 40
    },
    subTitle: {
        fontSize: 13,
        textAlign: "center",
        textDecorationLine: "underline",
        marginTop: -3
    },
    cover: {
        height: 150,
    },
    priceSection: {
        marginTop: 22
    },
    priceMessage: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    priceDrop: {
        fontSize: 11,
        fontWeight: 'bold'
    },
    priceDropText: {
        color: 'green'
    },
    priceDropValue: {
        color: 'red'
    },
    priceDeal: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: Colors.lightGray,
        marginTop: 8,
        maxWidth: '98%',
        marginBottom: 20
    },
    oldPriceContainer: {
        width: '45%',
        paddingVertical: 5,
        paddingHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    oldPrice: {
        textDecorationLine: 'line-through',
        fontWeight: 'bold'
    },
    newPriceContainer: {
        paddingVertical: 5,
        flex: 1,
        justifyContent: "center",
        flexDirection: 'row',
        backgroundColor: 'red',
    },
    newPrice: {
        color: 'white',
        marginTop: 2
    },
    newPriceValue: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    }
});

ProductCardHalf.propTypes = {
    product: PropTypes.instanceOf(Product)
};

export default ProductCardHalf; 