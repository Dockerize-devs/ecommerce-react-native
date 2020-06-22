import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Title, Button, Menu } from 'react-native-paper';
import Colors from '../../data/constants/Colors';
import { Ionicons } from '@expo/vector-icons'

export default props => {
    const [showColors, setShowColors] = useState(false);
    const [showQty, setShowQty] = useState(false);

    const Anchor = props => (
        <Button
            mode='text'
            labelStyle={styles.text}
            compact={true}
            onPress={props.onPress}
        >
            {props.text} <Ionicons name='ios-arrow-down'></Ionicons>
        </Button>
    )

    return (
        <View style={styles.container}>
            <View style={styles.thumbnail}>
                <Image
                    style={styles.thumbnailImage}
                    resizeMode='contain'
                    source={{ uri: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-flip-01.jpg' }} />
            </View>
            <View style={styles.details}>
                <Title>Samsung Galaxy Z Flip</Title>
                <Text style={styles.text}>Apple</Text>
                <View style={styles.attrs} >
                    <View style={styles.colorAttr}>
                        <Text style={styles.text}>Color:</Text>
                        <Menu
                            visible={showColors}
                            onDismiss={() => setShowColors(false)}
                            anchor={<Anchor text='Red' onPress={() => setShowColors(true)} />}
                        >
                            <Menu.Item onPress={() => { }} title='Red'></Menu.Item>
                            <Menu.Item onPress={() => { }} title='White'>Green</Menu.Item>
                            <Menu.Item onPress={() => { }} title='Black'>Black</Menu.Item>
                        </Menu>
                    </View>
                    <View style={styles.colorAttr}>
                        <Text style={styles.text}>Qty: </Text>
                        <Menu
                            visible={showQty}
                            onDismiss={() => setShowQty(false)}
                            anchor={<Anchor text='7' onPress={() => setShowQty(true)} />}
                        >
                            <Menu.Item onPress={() => { }} title='1'></Menu.Item>
                            <Menu.Item onPress={() => { }} title='2'>Green</Menu.Item>
                            <Menu.Item onPress={() => { }} title='3'>Black</Menu.Item>
                        </Menu>
                    </View>
                </View>
                <Text style={styles.qtyNote}>Only 4 left in stock</Text>
                <View style={styles.price}>
                    <Text style={styles.priceText}>$1399</Text>
                    <Text style={styles.text}> (include all taxes)</Text>
                </View>
                <View style={styles.actions}>
                    <Button
                        labelStyle={styles.actionBtnText}
                        mode='outlined'
                        color={Colors.primary}
                        style={{ ...styles.saveBtn, ...styles.actionBtn }}
                    >♥ save for later</Button>
                    <Button
                        mode='outlined'
                        color='red'
                        style={styles.removeBtn}
                        labelStyle={styles.actionBtnText}
                    >remove</Button>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10
    },
    thumbnail: {
        width: '30%',
        marginTop: 10,
        marginRight: 10
    },
    thumbnailImage: {
        height: 100
    },
    details: {
        flexGrow: 1
    },
    attrs: {
        flexDirection: 'row'
    },
    text: {
        color: Colors.gray
    },
    colorAttr: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    qtyNote: {
        color: 'orange',
        textTransform: 'uppercase',
        marginTop: -5,
        fontSize: 10,
        marginBottom: 10
    },
    price: {
        flexDirection: 'row',
        alignItems: "center"
    },
    priceText: {
        fontSize: 23
    },
    actions: {
        flexGrow: 1,
        flexDirection: 'row',
        marginVertical: 10
    },
    actionBtn: {
        marginRight: 10,
    },
    saveBtn: {
        borderColor: Colors.primary
    },
    removeBtn: {
        borderColor: 'red'
    },
    actionBtnText: {
        fontSize: 8
    }

})