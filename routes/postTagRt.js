'use strict';

const { Router } = require('express');
const router = Router();

const { getAllPostTags } = require('../controllers/postTagCtrl');


router.get('/post_tags', getAllPostTags);
router.get('/post_tags', getAllPostTags);

module.exports = router;
