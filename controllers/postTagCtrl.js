'use strict';

const { bookshelf } = require('../db/database');
const PostTags = require('../models/postTagMd');

module.exports.getAllPostTags = (req, res, next) => {
  PostTags.getAll()
  .then( postTags => res.status(200).json(postTags))
  .catch( error => next(error))
}

module.exports.getTagId = ({ params: {tag_id} }, res, next) => {
  PostTags.getTags(tag_id)
  .then( tags => res.status(200).json(tags))
  .catch( error => next(error))
}

module.exports.getPostId = ({ params: {post_id} }, res, next) => {
  PostTags.getPosts(post_id)
  .then( posts => res.status(200).json(posts))
  .catch( error => next(error))
}
