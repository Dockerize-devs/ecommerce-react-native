import ProductService from "../../services/ProductService";
import ProductFilters from "../../models/ProductFilters";
import { FILTERS_UPDATED } from '../actions/productAction'

const initialState = {
    products: [],
    filters: new ProductFilters(),
}

const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case FILTERS_UPDATED:
            const newState = {
                products: ProductService.getAllProducts(action.filters),
                filters: { ...action.filters }
            }
            return newState;
        default:
            return {
                ...state,
                products: ProductService.getAllProducts(state.filters)
            }
    }

}

export default productReducer;