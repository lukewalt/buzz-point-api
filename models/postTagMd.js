'use strict';

const { bookshelf } = require('../db/database');

require('./postMd')
require('./tagMd')

const PostTags = bookshelf.Model.extend({
  tableName: 'post_tag',
  post: function() { return this.belongsTo('Post') },
  tag: function() { return this.belongsTo('Tag')},
}, {
  getAll: function() {
    return this.forge()
    .fetchAll({ withrelated: ['post', 'tag'], require: true})
    .then( items => items )
    .catch( err => err )
  }
})


module.exports = bookshelf.model('PostTags', PostTags)
