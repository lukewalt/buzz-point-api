'use strict';

const { Router } = require('express');
const router = Router();

const { getAllTags, getTagsByCategory, getTag, getNumPositivePosts } = require('../controllers/tagCtrl');

router.get('/tags', getAllTags)
router.get('/tags/categories/:category', getTagsByCategory)
router.get('/tags/:tag_name', getTag)

module.exports = router;
