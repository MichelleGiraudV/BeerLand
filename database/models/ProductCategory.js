module.exports = (sequelize, dataTypes) => {
    let alias = "ProductCategories";
    let cols = {
        category_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category: {
            type: dataTypes.STRING
        },
        description:{
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "product_category",
        timestamps: false
    };

    const ProductCategory = sequelize.define(alias, cols, config);
   
    return ProductCategory;
}