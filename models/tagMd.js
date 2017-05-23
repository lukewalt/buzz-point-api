'use strict';

const { bookshelf } = require('../db/database');
require('./postMd');
require('./postTagMd');

const Tag =  bookshelf.Model.extend({
  tableName: 'tag',
  posts: function() {return this.belongsToMany('Post').through('PostTags')}
}, {
  getAll: function() {
    return this.forge()
    .fetchAll({ withRelated: ['posts']})
    .then( tags => tags)
    .catch( err => console.log(err) )
  },
  getByCat: function(category){
    return this.where({category})
    .fetchAll()
    .then( tags => tags )
    .catch( err => err )
  },
  getById: function(id){
    return this.forge({id})
    .fetch({withRelated: ['posts']})
    .then( tags => tags )
    .catch( err => err )
  }

})

module.exports = bookshelf.model('Tag', Tag);
