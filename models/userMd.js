'use strict';

const { bookshelf } = require('../db/database');
require('./postMd')

const User = bookshelf.Model.extend({
  tableName: 'user',
  posts: function() { return this.belongsTo('Post') }
}, {
  getAll: function() {
    return this.forge()
    .fetchAll()
    .then(users => users)
    .catch(error => error)
  },
  getOne: function(id) {
    return this.forge({id})
    .fetch({})
    .then( user => user )
    .catch(error => error)
  },
  addUser: function(newUser) {
    return this.forge(newUser)
    .save()
    .then( user => user )
    .catch(error => error)
  },
  deleteUser: function(id) {
    return this.forge({id})
    .destroy()
    .then( user => user)
    .catch(error => error)
  },
  editUser: function(id, editedUser) {
    return this.where({id})
    .save(editedUser, {method: 'update'} )
    .then( user => user )
    .catch(error => error)
  }
})


module.exports = bookshelf.model('User', User);
