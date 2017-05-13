'use strict';

const { knex } = require('../database');
const post = require('./post');

const postPromise = post.map(({ user_id, positive, comment, image, latitude, longitude, zipcode, zone, timestamp }) => {
  return knex('post').insert({ user_id, positive, comment, image, latitude, longitude, zipcode, zone, timestamp });
})

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('post').del()
    .then(() => {
      return Promise.all(postPromise)
    });
};
