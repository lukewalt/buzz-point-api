'use strict';

const { bookshelf } = require('../db/database');
require('./postMd');

const Tag =  bookshelf.Model.extend({
  tableName: 'tag',
}, {
  getAll: function(){
    return this.forge()
    .fetchAll()
    .then( tags => tags )
    .catch( err => err )
  }

})

module.exports = bookshelf.model('Tag', Tag);
