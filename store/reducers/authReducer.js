import ProductService from "../../services/ProductService";
import ProductFilters from "../../models/ProductFilters";
import { FILTERS_UPDATED } from '../actions/productAction'
import { UPDATE_AUTH_STATUS, updateAuthStatus } from "../actions/authAction";
import { isUserLoggedIn } from "../../services/AuthService";

const initialState = {
    isUserLoggedIn: false,
}

const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_AUTH_STATUS:
            return { ...state, ...{ isUserLoggedIn: action.status } };
        default:
            return state
    }

}

export const updateAuthStatusAsync = () => async (dispatch, getState) => {
    let state = getState();
    console.log("THUNK STATE", state.auth);
    const status = await isUserLoggedIn();
    dispatch(updateAuthStatus(status))
}

export default productReducer;