import Products from "../data/dummy/Products";
import Product from "../models/Product";
import ProductFilters, { SORT_BY_MOST_POPULAR } from "../models/ProductFilters";



/**
 * @param { ProductFilters } filters
 * 
 * @return { Product[] }
 */
export default {
    getAllProducts: filters => {
        const { sort_by } = filters;
        let products = Products;
        switch (sort_by) {
            case SORT_BY_MOST_POPULAR:
                products = products.sort( (a, b) => b.average_review_score - a.average_review_score);
                break;
            default:
        }

        return products;
    },
}