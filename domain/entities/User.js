const uuid = require('uuid/v4');
const Entity = require('./EntityBase');

class User extends Entity {
  constructor(name, email, password) {
    super(uuid());
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

module.exports = User;
