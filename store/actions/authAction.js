import ProductFilters from "../../models/ProductFilters"

export const UPDATE_AUTH_STATUS = 'update_auth_status'
export const LOAD_AUTH_STATUS = 'load_auth_status'

/**
 * 
 * @param { ProductFilters } filters 
 */

export const applyFilter = filters => ({
    type: APPLY_FILTERS,
    filters
})


export const updateAuthStatus = status => ({
    type: UPDATE_AUTH_STATUS,
    status
})

export const loadAuthStatus = () => ({
    type: LOAD_AUTH_STATUS,
})