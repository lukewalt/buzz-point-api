'use strict';

const { Router } = require('express');
const router = Router();

const { getAllPosts, getOnePost, createPost } = require('../controllers/postCtrl');

router.get('/posts', getAllPosts);
router.get('/posts/:id', getOnePost);
router.post('/posts', createPost);

module.exports = router;
