'use strict';

const { bookshelf } = require('../db/database');

const User = bookshelf.Model.extend({
  tableName: 'user',
}, {
  getAll: function() {
    return this.forge()
    .fetchAll()
    .then(users => users)
    .catch(error => error)
  }
})


module.exports = bookshelf.model('User', User);
