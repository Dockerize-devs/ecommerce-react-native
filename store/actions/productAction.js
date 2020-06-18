import ProductFilters from "../../models/ProductFilters"

const APPLY_FILTERS = 'apply_filters'

/**
 * 
 * @param { ProductFilters } filters 
 */
export const applyFilter = filters => ({
    type: APPLY_FILTERS,
    filters
})