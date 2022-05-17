const fs = require('fs');

const User = {
    fileName: './data/users.json',

    getData: function() {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    findAll: function() {
        return this.getData();
    },

    findById: function(id_user) {
        let allUsers = this.findAll();
        let foundUserById = allUsers.find(userById => userById.id_user == id_user);
        return foundUserById;
    },

    findByEmail: function(email) {
        let allUsers = this.findAll();
        let foundUserByEmail = allUsers.find(userByEmail => userByEmail.email == email);
        return foundUserByEmail;
    },

    findByPassword: function(password) {
        let allUsers = this.findAll();
        let foundUserByPassword = allUsers.find(userByPassword => userByPassword.password == password);
        return foundUserByPassword;
    },



} 

console.log(User.findByEmail("pszymanowicz1@e-recht24.de"));