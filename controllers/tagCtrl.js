'use strict';

const { bookshelf } = require('../db/database');
const Tag = require('../models/tagMd');

module.exports.getAllTags = (req, res, next) => {
  Tag.getAll()
  .then( tags => res.status(200).json(tags))
  .catch( error => next(error))
};
