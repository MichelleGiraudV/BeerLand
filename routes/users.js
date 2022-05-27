const fs = require('fs');

const User = {
    fileName: './data/users.json',

    getData: function() {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    generateId: function() {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser) {
            return lastUser.id_user + 1;
        }
        return 1;
    },

    findAll: function() {
        return this.getData();
    },

    findById: function(id_user) {
        let allUsers = this.findAll();
        let foundUserById = allUsers.find(userById => userById.id_user == id_user);
        return foundUserById;
    },

    findByField: function(field, text) {
        let allUsers = this.findAll();
        let foundUserByField = allUsers.find(userByField => userByField[field] == text);
        return foundUserByField;
    },

    create: function(userData) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser;
    },

    delete: function(id_user) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(userToDelete => userToDelete.id_user != id_user);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
        return true;
    },
} 

module.exports = User;