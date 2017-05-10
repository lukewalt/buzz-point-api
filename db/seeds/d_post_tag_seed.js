'use strict';

const { knex } = require('../database');
const postTag = require('./post_tag');

const postTagPromise = postTag.map(({ post_id, tag_id}) => {
  return knex('post_tag').insert({ post_id, tag_id})
})

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('post_tag').del()
    .then(() => {
      return Promise.all(postTagPromise)
    });
};
