'use strict';

const { bookshelf } = require('../db/database');
const PostTags = require('../models/postTagMd');

module.exports.getAllPostTags = (req, res, next) => {
  PostTags.getAll()
  .then( users => res.status(200).json(users))
  .catch( error => next(error))
}
