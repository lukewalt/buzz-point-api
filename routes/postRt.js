'use strict';

const { Router } = require('express');
const router = Router();

const { getAllPosts, getOnePost } = require('../controllers/postCtrl');

router.get('/posts', getAllPosts)
router.get('/posts/:id', getOnePost)

module.exports = router;
