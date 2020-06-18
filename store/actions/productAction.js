import ProductFilters from "../../models/ProductFilters"

const APPLY_FILTERS = 'apply_filters'
export const FILTERS_UPDATED = 'filters_updated'

/**
 * 
 * @param { ProductFilters } filters 
 */

export const applyFilter = filters => ({
    type: APPLY_FILTERS,
    filters
})

/**
 * @param { ProductFilters } filters 
 */
export const filtersUpdated = filters => ({
    type: FILTERS_UPDATED,
    filters
})