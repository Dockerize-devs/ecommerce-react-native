import ProductService from "../../services/ProductService";

const initialState = {
    products: ProductService.getAllProducts()
}

const productReducer = (state = initialState, action) => {
    return state;
}

export default productReducer;