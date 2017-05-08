'use strict';

const { Router } = require('express');
const router = Router();

const { getAllPosts } = require('../controllers/postCtrl');

router.get('/posts', getAllPosts)

module.exports = router;
