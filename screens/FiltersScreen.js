import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Title, Divider } from 'react-native-paper';
import Colors from '../data/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import AppTitle from '../components/typography/AppTitle';


const FilterItem = props => {
    const { isActive } = props;
    return (
        <Button
            color={isActive ? 'white' : Colors.primary}
            style={{ ...styles.filterItem, ...{ backgroundColor: isActive ? Colors.primary : '' } }}
            mode='outlined'
            uppercase={false}
            labelStyle={{ fontSize: 12, padding: -100 }}
        >
            {props.children}
        </Button>
    )
}

export default props => {
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
        borderBottomWidth: 2,
        borderBottomColor: Colors.lightGray
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
        marginVertical: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    filterItem: {
        borderRadius: 20,
        fontSize: 10,
        margin: 5,
    }
})