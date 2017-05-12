'use strict'

process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../app');
const { knex } = require('../db/database');
chai.use(chaiHttp);

describe('users routes', () => {

  beforeEach( () => knex.migrate.rollback()
  .then( () => knex.migrate.latest())
  .then( () => knex.seed.run()))

  describe('Get all the users', () => {
    it('should get all users', () => {
      return chai.request(server)
      .get('/api/users')
      .then( (res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body[0].should.have.property('user_name');
        res.body[0].should.have.property('email');
        res.body[0].should.have.property('password');
        res.body[0].should.have.property('image');
        res.body[0].user_name.should.equal('ggrumble0');
      });
    });
  });

  describe('Get one user', () => {
    it('should get one user', () => {
      return chai.request(server)
      .get('/api/users/3')
      .then( res => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('user_name');
        res.body.user_name.should.equal('cmullally2');
      })
    })
  })

  describe('POST api/users', () => {
    it('should add an user', () => {
      return chai.request(server)
      .post('/api/users')
      .send({
            "user_name": "big-louis",
            "email": "mashsdabey2@bce.com",
            "password": "sdfasd",
            "image": "http://dummyimage.com/159x166.jpg/5fa2dd/ffffff"
          })
      .then( res => {
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('id');
      })
    })
  })

  describe('DELETE user', () => {
    it('should remove a single item from shows table', () => {
      return chai.request(server)
      .delete('/api/users/4')
      .then( res => {
       res.should.have.status(202);
       res.should.be.json;
       res.body.should.be.a('object');

       chai.request(server)
       .get('/api/users')
       .then( res => {
        res.should.have.status(200);
        res.should.be.json
        res.body.should.be.a('array');

       });
      });
    });
  });

})
