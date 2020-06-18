import ProductService from "../../services/ProductService";
import ProductFilters from "../../models/ProductFilters";

const initialState = {
    products: [],
    filters: new ProductFilters(),
}

const productReducer = (state = initialState, action) => {

    state.products = ProductService.getAllProducts(state.filters)
    return state;
}

export default productReducer;