'use strict';

const { bookshelf } = require('../db/database');
const User = require('../models/userMd');

module.exports.getAllUsers = (req, res, next) => {
  User.getAll()
  .then( users => res.status(200).json(users))
  .catch( error => next(error))
}

module.exports.getOneUser = ({ params: {id} }, res, next) => {
  User.getOne(id)
  .then( user => res.status(200).json(user))
  .catch( error => next(error))
};

module.exports.createUser = ( { body }, res, next) => {
  User.addUser(body)
  .then( user => res.status(201).json(user) )
  .catch( error => next(error))
};

module.exports.removeUser = ({ params: {id} }, res, next) => {
  User.deleteUser(id)
  .then(user => res.status(202).json(user))
  .catch( error => next(error))
};

module.exports.updateUser = ({ body }, res, next) => {
  const id = body.id;
  User.editUser(id, body)
  .then(user => res.status(200).json(user))
  .catch( error => next(error))
};
