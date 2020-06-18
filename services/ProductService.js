import Products from "../data/dummy/Products";
import Product from "../models/Product";
import ProductFilters, { SORT_BY_MOST_POPULAR, SORT_BY_BIGGEST_SAVING, SORT_BY_HIGHEST_PRICE, SORT_BY_LOWEST_PRICE, SORT_BY_NEWEST } from "../models/ProductFilters";



/**
 * @param { ProductFilters } filters
 * 
 * @return { Product[] }
 */
export default {
    getAllProducts: filters => {
        const { sort_by } = filters;
        let products = [...Products];
        switch (sort_by) {
            case SORT_BY_MOST_POPULAR:
                products = products.sort( (a, b) => b.average_review_score - a.average_review_score);
                break;
            case SORT_BY_BIGGEST_SAVING:
                products = products.sort( (a, b) => b.price_drop_percentage - a.price_drop_percentage);
                break;
            case SORT_BY_HIGHEST_PRICE:
                products = products.sort( (a, b) => b.current_price - a.current_price);
                break;
            case SORT_BY_LOWEST_PRICE:
                products = products.sort( (a, b) => a.current_price - b.current_price);
                break;
            case SORT_BY_NEWEST:
                products = products.sort( (a, b) => b.added_date - a.added_date);
                break;
            default:
        }

        if(filters.price) {
            products = products.filter(p => p.price_tag === filters.price)
        }

        return products;
    },
}