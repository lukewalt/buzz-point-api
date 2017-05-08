'use strict';

const { Router } = require('express');
const router = Router();

const { getAllTags } = require('../controllers/tagCtrl');

router.use('/tags', getAllTags)

module.exports = router;
