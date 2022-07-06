module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
    let cols = {
        id_user: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name:{
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "usuarios",
        timestamps: false
    };

    const User = sequelize.define(alias, cols, config);
   
    return User;
}