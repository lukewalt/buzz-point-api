'use strict';

const { Router } = require('express');
const router = Router();

const { getAllPosts, getOnePost, getAllZones, getAllPositives, getAllByZipcode, createPost, removePost, editPost } = require('../controllers/postCtrl');

router.get('/posts', getAllPosts);
router.get('/posts/:id', getOnePost);
router.get('/posts/zones/:zone', getAllZones);
router.get('/posts/positives/:positive', getAllPositives);
router.get('/posts/zipcode/:zipcode', getAllByZipcode);

router.post('/posts', createPost);
router.delete('/posts/:id', removePost);
router.patch('/posts', editPost);

module.exports = router;
