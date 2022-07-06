module.exports = (sequelize, dataTypes) => {
    let alias = "OrderIds";
    let cols = {
        order_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category: {
            type: dataTypes.STRING,
        },
        description: {
            type: dataTypes.STRING,
        },
    };
    let config = {
        tableName: "order_id",
        timestamps: false
    };

    const OrderId = sequelize.define(alias, cols, config);
   
    return OrderId;
}