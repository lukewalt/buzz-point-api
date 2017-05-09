'use strict';

const { bookshelf } = require('../db/database');
require('./tagMd');
require('./userMd');

const Post = bookshelf.Model.extend({
  tableName: 'post',
  tag: function() { return this.belongsTo('Tag')},
  user: function() { return this.belongsTo('User')}
}, {
  getAll: function(){
    return this.forge()
    .fetchAll({ withrelated: ['tag', 'user'], require: true})
    .then( posts => posts )
    .catch( err => err )
  },
  getOne: function(id) {
    return this.forge({id})
    .fetch()
    .then( post => post )
    .catch( err => err )
  }
})


module.exports = bookshelf.model('Post', Post);
