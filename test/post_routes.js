'use strict'

process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../app');
const { knex } = require('../db/database');
chai.use(chaiHttp);

describe('post routes', () => {

  beforeEach( () => knex.migrate.rollback()
  .then( () => knex.migrate.latest())
  .then( () => knex.seed.run()))

  describe('Get all the post', () => {
    it('should get all post', () => {
      return chai.request(server)
      .get('/api/v1/posts')
      .then( res => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body[0].should.have.property('user_id');
        res.body[0].should.have.property('positive');
        res.body[0].should.have.property('zone');
        res.body[0].zipcode.should.equal(30087);
      });
    });
  });

  describe('Get one post', () => {
    it('should get one post', () => {
      return chai.request(server)
      .get('/api/v1/posts/3')
      .then( res => {
        res.should.have.status(200)
        res.should.be.json
        res.body.should.be.a('object')
        res.body.should.have.property('user_id');
        res.body.should.have.property('positive');
        res.body.should.have.property('zone');
        res.body.user_id.should.equal(9)
        res.body.positive.should.equal(true)
        res.body.zone.should.equal(2)
      })
    })
  })

  describe('Get all post by zone', () => {
    it('should get all posts by zone', () => {
      return chai.request(server)
      .get('/api/v1/posts/zones/3')
      .then( res => {
        res.should.have.status(200)
        res.should.be.json
        res.body.should.be.a('array')
        res.body[0].should.have.property('user_id');
        res.body[0].should.have.property('positive');
        res.body[0].should.have.property('zone');
        res.body[0].zone.should.equal(3);
      })
    })
  })

  describe('Get all post by positive true', () => {
    it('should get all posts by positive true', () => {
      return chai.request(server)
      .get('/api/v1/posts/positives/true')
      .then( res => {
        res.should.have.status(200)
        res.should.be.json
        res.body.should.be.a('array')
        res.body[0].should.have.property('user_id');
        res.body[0].should.have.property('positive');
        res.body[0].should.have.property('zone');
        res.body[0].positive.should.equal(true);
      })
    })
  })
  
  describe('Get all post by positive false', () => {
    it('should get all posts by positive false', () => {
      return chai.request(server)
      .get('/api/v1/posts/positives/false')
      .then( res => {
        res.should.have.status(200)
        res.should.be.json
        res.body.should.be.a('array')
        res.body[0].should.have.property('user_id');
        res.body[0].should.have.property('positive');
        res.body[0].should.have.property('zone');
        res.body[0].positive.should.equal(false);
      })
    })
  })

  describe('POST api/post', () => {
    it('should add an animal', () => {
      return chai.request(server)
      .post('/api/v1/posts')
      .send({
              "user_id": 23,
              "positive": true,
              "comment": "Boom city",
              "image": "http://dummyimage.com/130x209.bmp/5fa2dd/ffffff",
              "lat_lng": "43.91333",
              "zipcode": 97353,
              "zone": 1
          })
      .then( res => {
        res.should.have.status(201)
        res.should.be.json;
        res.body.should.be.a('object')
        res.body.should.have.property('id');
        res.body.should.have.property('positive');
        res.body.should.have.property('zone');
      })
    })
  })

  describe('DELETE api/posts/:id', () => {
    it('should remove a single item from post table', () => {
      return chai.request(server)
      .delete('/api/v1/posts/4')
      .then( res => {
       res.should.have.status(202);
       res.should.be.json;
       res.body.should.be.a('object');

       chai.request(server)
       .get('/api/v1/posts')
       .then( res => {
        res.should.have.status(200);
        res.should.be.json
        res.body.should.be.a('array');
        res.body[0].should.have.property('name');
        res.body[0].name.should.equal('Willy');
       });
      });
    });
  });

})
