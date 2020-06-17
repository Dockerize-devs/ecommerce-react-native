import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Title, Divider, List } from 'react-native-paper';
import Colors from '../data/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import AppTitle from '../components/typography/AppTitle';


const FilterItem = props => {
    const { pisActive } = props;
    const [isActive, setIsActive] = useState(pisActive)
    return (
        <Button
            onPress={() => setIsActive(!isActive)}
            color={isActive ? 'white' : Colors.primary}
            style={{ ...styles.filterItem, ...{ backgroundColor: isActive ? Colors.primary : 'white' } }}
            mode='outlined'
            uppercase={false}
            labelStyle={{ fontSize: 12, padding: -100 }}
        >
            {props.children}
        </Button>
    )
}

export default props => {
    const [isOpenPrice, setIsOpenPrice] = useState(false);
    const [isOpenReview, setIsOpenReview] = useState(false);

    return (
        <View style={styles.screen}>
            <View style={styles.headerContainer}>
                <AppTitle style={styles.headerText}>Filters for sale</AppTitle>
                <Button color={Colors.primary}>Clear  <Ionicons name='ios-backspace' size={15} /> </Button>
            </View>
            <View style={styles.filtersContainer}>
                <View style={styles.filter}>
                    <Title style={styles.filterTitle}>SORT BY</Title>
                    <Divider />
                    <View style={styles.filterItems}>
                        <FilterItem isActive={true}>Most Popular</FilterItem>
                        <FilterItem>Newly Added</FilterItem>
                        <FilterItem>Lowest Price</FilterItem>
                        <FilterItem>Highest Price</FilterItem>
                        <FilterItem>Biggest Saving</FilterItem>
                    </View>
                </View>
                <View style={styles.filter}>
                    <List.Accordion
                        title={<Title style={styles.filterTitle}>PRICE</Title>}
                        expanded={isOpenReview}
                        onPress={() => setIsOpenReview(!isOpenReview)}
                    >
                        <View style={styles.filterItems}>
                            <FilterItem>$$ <Text style={styles.productCount}>(14)</Text></FilterItem>
                            <FilterItem isActive={true}>$$$ <Text style={styles.productCount}>(7)</Text></FilterItem>
                            <FilterItem>$$$$$ <Text style={styles.productCount}>(11)</Text></FilterItem>
                        </View>
                    </List.Accordion>
                    <Divider />
                </View>
                <View style={styles.filter}>
                    <List.Accordion
                        title={<Title style={styles.filterTitle}>SHOP</Title>}
                        expanded={isOpenReview}
                        onPress={() => setIsOpenReview(!isOpenReview)}
                    >
                        <View style={styles.filterItems}>
                            <FilterItem>$$ <Text style={styles.productCount}>(14)</Text></FilterItem>
                            <FilterItem isActive={true}>$$$ <Text style={styles.productCount}>(7)</Text></FilterItem>
                            <FilterItem>$$$$$ <Text style={styles.productCount}>(11)</Text></FilterItem>
                        </View>
                    </List.Accordion>
                    <Divider />
                </View>
                <View style={styles.filter}>
                    <List.Accordion
                        title={<Title style={styles.filterTitle}>REVIEW</Title>}
                        expanded={isOpenPrice}
                        onPress={() => setIsOpenPrice(!isOpenPrice)}
                    >
                        <View style={styles.filterItems}>
                            <FilterItem>ANY <Text style={styles.productCount}>(14)</Text></FilterItem>
                            <FilterItem> ★★★★★ <Text style={styles.productCount}>(14)</Text></FilterItem>
                            <FilterItem isActive={true}>★★★★ <Text style={styles.productCount}>(7)</Text></FilterItem>
                            <FilterItem>★★★ <Text style={styles.productCount}>(11)</Text></FilterItem>
                            <FilterItem>★★ <Text style={styles.productCount}>(11)</Text></FilterItem>
                            <FilterItem>★ <Text style={styles.productCount}>(11)</Text></FilterItem>
                        </View>
                    </List.Accordion>
                </View>
            </View>
            <View style={styles.actionArea}>
                <Button
                    onPress={props.navigation.goBack}
                    style={styles.applyFilterBtn}
                    mode='outlined'
                    color={Colors.primary}>
                    Apply Filters</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    headerContainer: {
        height: 60,
        backgroundColor: Colors.darkWhite,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray
    },
    headerText: {
        marginLeft: 10,
    },
    filtersContainer: {
        marginHorizontal: 10
    },
    filterTitle: {
        fontSize: 15
    },
    filterItems: {
        marginBottom: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: Colors.veryLightGray,
        paddingVertical: 10,
        borderRadius: 10
    },
    filterItem: {
        borderRadius: 20,
        fontSize: 10,
        margin: 5,
    },
    productCount: {
        fontSize: 8
    },
    actionArea: {
        flex: 1,
        flexDirection: 'column-reverse'
    },
    applyFilterBtn: {
        borderColor: Colors.primary,
        borderWidth: 1,
        paddingVertical: 5,
        marginVertical: 20,
        marginHorizontal: 10
    }
})