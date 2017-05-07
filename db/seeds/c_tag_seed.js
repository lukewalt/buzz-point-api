'use strict';

const { knex } = require('../database');
const tag = require('./tag');


const tagPromise = tag.map(({ tag_name, category }) => {
  return knex('tag').insert({ tag_name, category });
})

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tag').del()
    .then(() => {
      return Promise.all(tagPromise);
    });
};
