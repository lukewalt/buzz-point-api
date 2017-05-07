'use strict';

const { Router } = require('express');

const router = Router();

const { getAllUsers } = require('../controllers/userCtrl');


router.get('/users', getAllUsers);


module.exports = router;
