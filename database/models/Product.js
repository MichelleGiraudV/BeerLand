module.exports = (sequelize, dataTypes) => {
    let alias = "Products";
    let cols = {
        product_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        prod_name: {
            type: dataTypes.STRING,
        },
        rating: {
            type: dataTypes.INTEGER,
        },
        description: {
            type: dataTypes.STRING,
        },
        price: {
            type: dataTypes.INTEGER,
        },
        image: {
            type: dataTypes.STRING,
        },
        country: {
            type: dataTypes.STRING,
        },
        category: {
            type: dataTypes.STRING,
        }
    };
    let config = {
        tableName: "productos",
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config);
   
    return Product;
}