'use strict';

const { bookshelf } = require('../db/database');
require('./tagMd');
require('./userMd');
require('./postTagMd');

const Post = bookshelf.Model.extend({
  tableName: 'post',
  tags: function() { return this.belongsToMany('Tag').through('PostTags')}
}, {
  getAll: function(){
    return this.forge()
    .fetchAll({withRelated: ['tags']})
    .then( posts => posts.toJSON() )
    .catch( err => err )
  },
  getOne: function(id) {
    return this.forge({id})
    .fetch({withRelated: ['tags']})
    .then( post => post )
    .catch( err => err )
  },
  getAllUsersPosts: function(user_id) {
    return this.where({user_id})
    .fetchAll({withRelated: ['tags']})
    .then( usersPosts => usersPosts )
    .catch( err => err )
  },
  getZones: function(zone) {
    return this.where({zone})
    .fetchAll({withRelated: ['tags']})
    .then( zones => zones )
    .catch( err => err )
  },
  getAllPositives: function(positive) {
    return this.where({positive})
    .fetchAll({withRelated: ['tags']})
    .then( positives => positives )
    .catch( err => err )
  },
  getAllZips: function(zipcode) {
    return this.where({zipcode})
    .fetchAll({withRelated: ['tags']})
    .then( zipcodes => zipcodes )
    .catch( err => err )
  },
  createPost: function(newPost){
    return this.forge(newPost)
    .save()
    .then( post => post )
    .catch( err => err )
  },
  deleteOne: function(id) {
    return this.forge({id})
    .destroy()
    .then( post => post )
    .catch( err => err )
  },
  updatePost: function(id, editedPost) {
    return this.where({id})
    .save(editedPost, {method: 'update'})
    .then( post => post )
    .catch( err => err )
  },
})


module.exports = bookshelf.model('Post', Post);
