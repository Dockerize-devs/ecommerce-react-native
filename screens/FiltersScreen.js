import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Title, Divider, List } from 'react-native-paper';
import Colors from '../data/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import AppTitle from '../components/typography/AppTitle';
import { useSelector, useDispatch } from 'react-redux';
import { SORT_BY_MOST_POPULAR, SORT_BY_NEWEST, SORT_BY_LOWEST_PRICE, SORT_BY_HIGHEST_PRICE, SORT_BY_BIGGEST_SAVING } from '../models/ProductFilters';
import { filtersUpdated } from '../store/actions/productAction';


const FilterItem = props => {
    const { isActive } = props;
    // const [isActive, setIsActive] = useState(pisActive)

    return (
        <Button
            onPress={props.onPress}
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

    const dispatch = useDispatch();

    const filters = useSelector(state => state.product.filters);
    const onSortByChange = sort => {
        let changedFilters = { ...filters }
        changedFilters.sort_by = sort;
        dispatch(filtersUpdated(changedFilters));
    }
    const onPriceChange = price => {
        let changedFilters = { ...filters }
        changedFilters.price = price;
        dispatch(filtersUpdated(changedFilters));
    }
    const onReviewChange = review => {
        let changedFilters = { ...filters }
        changedFilters.review = review;
        dispatch(filtersUpdated(changedFilters));
    }

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
                        <FilterItem
                            isActive={filters.sort_by === SORT_BY_MOST_POPULAR}
                            onPress={() => onSortByChange(SORT_BY_MOST_POPULAR)}
                        >Most Popular</FilterItem>

                        <FilterItem
                            isActive={filters.sort_by === SORT_BY_NEWEST}
                            onPress={() => onSortByChange(SORT_BY_NEWEST)}
                        >Newly Added</FilterItem>

                        <FilterItem
                            isActive={filters.sort_by === SORT_BY_LOWEST_PRICE}
                            onPress={() => onSortByChange(SORT_BY_LOWEST_PRICE)}
                        >Lowest Price</FilterItem>
                        <FilterItem
                            isActive={filters.sort_by === SORT_BY_HIGHEST_PRICE}
                            onPress={() => onSortByChange(SORT_BY_HIGHEST_PRICE)}
                        >Highest Price</FilterItem>
                        <FilterItem
                            isActive={filters.sort_by === SORT_BY_BIGGEST_SAVING}
                            onPress={() => onSortByChange(SORT_BY_BIGGEST_SAVING)}
                        >Biggest Saving</FilterItem>
                    </View>
                </View>
                <View style={styles.filter}>
                    <List.Accordion
                        title={<Title style={styles.filterTitle}>Price</Title>}
                        expanded={isOpenReview}
                        onPress={() => setIsOpenReview(!isOpenReview)}
                    >
                        <View style={styles.filterItems}>
                            <FilterItem
                                isActive={filters.price === '$'}
                                onPress={() => onPriceChange('$')}
                            >$<Text style={styles.productCount}></Text></FilterItem>
                            <FilterItem
                                isActive={filters.price === '$$'}
                                onPress={() => onPriceChange('$$')}
                            >$$<Text style={styles.productCount}></Text></FilterItem>
                            <FilterItem
                                isActive={filters.price === '$$$'}
                                onPress={() => onPriceChange('$$$')}
                            >$$$<Text style={styles.productCount}></Text></FilterItem>
                            <FilterItem
                                isActive={filters.price === '$$$$'}
                                onPress={() => onPriceChange('$$$$')}
                            >$$$$<Text style={styles.productCount}></Text></FilterItem>
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
                            <FilterItem
                                isActive={filters.review === 'any'}
                                onPress={() => onReviewChange('any')}
                            >ANY</FilterItem>

                            <FilterItem
                                isActive={filters.review === 5}
                                onPress={() => onReviewChange(5)}
                            >★★★★★</FilterItem>

                            <FilterItem
                                isActive={filters.review === 4}
                                onPress={() => onReviewChange(4)}
                            >★★★★</FilterItem>
                            <FilterItem
                                isActive={filters.review === 3}
                                onPress={() => onReviewChange(3)}
                            >★★★</FilterItem>
                            <FilterItem
                                isActive={filters.review === 2}
                                onPress={() => onReviewChange(2)}
                            >★★</FilterItem>
                            <FilterItem
                                isActive={filters.review === 1}
                                onPress={() => onReviewChange(1)}
                            >★</FilterItem>
                        </View>
                    </List.Accordion>
                </View>
            </View>
            <View style={styles.actionArea}>
                <Button
                    onPress={() => props.navigation.navigate('Home')}
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