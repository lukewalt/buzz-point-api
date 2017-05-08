'use strict';

const { bookshelf } = require('../db/database');
const Post = require('../models/postMd');

module.exports.getAllPosts = (req, res, next) => {
  Post.getAll()
  .then( posts => res.status(200).json(posts))
  .catch( error => next(error))
};
