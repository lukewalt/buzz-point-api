'use strict';

const { Router } = require('express');
const router = Router();

const { getAllPostTags, getTagId, getPostId, createPostTags } = require('../controllers/postTagCtrl');


router.get('/post_tags', getAllPostTags);
router.get('/post_tags/tags/:tag_id', getTagId);
router.get('/post_tags/posts/:post_id', getPostId);


module.exports = router;
