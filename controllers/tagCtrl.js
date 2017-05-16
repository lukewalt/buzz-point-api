'use strict';

const { bookshelf } = require('../db/database');
const Tag = require('../models/tagMd');

module.exports.getAllTags = (req, res, next) => {
  Tag.getAll()
  .then( tags => res.status(200).json(tags))
  .catch( error => {
    console.log(error);
    next(error)

  })
};

module.exports.getTagsByCategory = ({ params: {category} }, res, next) => {
  Tag.getByCat(category)
  .then( tags => res.status(200).json(tags))
  .catch( error => next(error))
};

module.exports.getTag = ({ params: {tag_name} }, res, next) => {
  Tag.getByName(tag_name)
  .then( tag => res.status(200).json(tag))
  .catch( error => next(error))
};
