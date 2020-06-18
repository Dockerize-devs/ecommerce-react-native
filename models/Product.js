export default class Product {
    constructor(
        id,
        name,
        category_id,
        shop_name,
        price_tag,
        price_drop_percentage,
        previous_price,
        current_price,
        retail_price,
        added_date,
        average_review_score,
        cover_image
    ) {
        this.id = id;
        this.name = name;
        this.category_id = category_id;
        this.shop_name = shop_name;
        this.cover_image = cover_image;
        this.price_tag = price_tag;
        this.price_drop_percentage = price_drop_percentage;
        this.previous_price = previous_price;
        this.current_price = current_price;
        this.retail_price = retail_price;
        this.added_date = added_date;
        this.average_review_score =  average_review_score;
    }
}