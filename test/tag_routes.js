'use strict'

process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../app');
const { knex } = require('../db/database');
chai.use(chaiHttp);

describe('tag routes', () => {

  beforeEach( () => knex.migrate.rollback()
  .then( () => knex.migrate.latest())
  .then( () => knex.seed.run()))

  describe('Get all the tag', () => {
    it('should get all tag', () => {
      return chai.request(server)
      .get('/buzzpoint/api/tags')
      .then( res => {
        res.should.have.status(200);
        res.should.be.json
        res.body.should.be.a('array');
        res.body[0].should.have.property('tag_name');
        res.body[0].should.have.property('category');
      });
    });
  });

  describe('Get one tag', () => {
    it('should get one tag', () => {
      return chai.request(server)
      .get('/buzzpoint/api/tags/3')
      .then( res => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('tag_name');
        res.body.should.have.property('category');
      })
    })
  })

})
