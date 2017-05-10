'use strict';

const { bookshelf } = require('../db/database');

require('./postMd')
require('./tagMd')

const PostTags = bookshelf.Model.extend({
  tableName: 'post_tag',
  post: function() { return this.belongsTo('Post') },
  tag: function() { return this.belongsTo('Tag') },
}, {
  getAll: function() {
    return this.forge()
    .fetchAll({ withrelated: ['post', 'tag'], require: true})
    .then( allPostTags => allPostTags )
    .catch( err => err )
  },
  getTags: function(tag_id) {
    return this.where({tag_id})
    .fetchAll()
    .then( tags => tags )
    .catch( err => err )
  },
  getPosts: function(post_id) {
    return this.where({post_id})
    .fetchAll()
    .then( posts => posts )
    .catch( err => err )
  }
})

module.exports = bookshelf.model('PostTags', PostTags)
