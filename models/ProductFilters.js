export const SORT_BY_MOST_POPULAR = 'most_popular'
export const SORT_BY_NEWEST = 'newest'
export const SORT_BY_LOWEST_PRICE = 'lowest_price'
export const SORT_BY_HIGHEST_PRICE= 'highest_price'
export const SORT_BY_BIGGEST_SAVING = 'biggest_saving'

export default class {
    constructor(
        sort_by = SORT_BY_MOST_POPULAR,
        price = null,
        review = null,
    ) {
        this.sort_by = sort_by;
        this.price = price;
        this.review = review;
    }
}