'use strict';

const { bookshelf } = require('../db/database');
const Post = require('../models/postMd');

module.exports.getAllPosts = (req, res, next) => {
  Post.getAll()
  .then( posts => res.status(200).json(posts))
  .catch( error => next(error))
};

module.exports.getOnePost = ({ params: {id} }, res, next) => {
  Post.getOne(id)
  .then( post => res.status(200).json(post))
  .catch( error => next(error))
};

module.exports.createPost = ({ body }, res, next) => {
  Post.createPost(body)
  .then( post => res.status(200).json(post))
  .catch( error => next(error))
};
