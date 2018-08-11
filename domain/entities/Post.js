const uuid = require('uuid/v4');
const Entity = require('./EntityBase');

class Post extends Entity {
  constructor(title, description, postedBy) {
    super(uuid());
    this.title = title;
    this.description = description;
    this.postedBy = postedBy;
  }
}

module.exports = Post;
