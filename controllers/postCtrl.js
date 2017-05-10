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

module.exports.getAllPositives = ({ params: {positive} }, res, next) => {
  Post.getAllPositives(positive)
  .then( positives => res.status(200).json(positives))
  .catch( error => next(error))
};

module.exports.getAllZones = ({ params: {zone} }, res, next) => {
  Post.getZones(zone)
  .then( zones => res.status(200).json(zones))
  .catch( error => next(error))
};

module.exports.getAllByZipcode = ({ params: {zipcode} }, res, next) => {
  Post.getAllZips(zipcode)
  .then( zipcodes => res.status(200).json(zipcodes))
  .catch( error => next(error))
};

module.exports.createPost = ({ body }, res, next) => {
  console.log(body);
  let postTags = [];

  Post.createPost(body)
  .then( post => res.status(201).json(post))
  .catch( error => next(error))
};

module.exports.removePost = ({ params: {id} }, res, next) => {
  Post.deleteOne(id)
  .then( post => res.status(202).json(post))
  .catch( error => next(error))
};

module.exports.editPost = ({ body }, res, next) => {
  const id = body.id
  Post.updatePost(id, body)
  .then( post => res.status(200).json(post))
  .catch( error => next(error))
};
