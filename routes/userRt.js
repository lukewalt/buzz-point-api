'use strict';

const { Router } = require('express');

const router = Router();

const { getAllUsers, getOneUser } = require('../controllers/userCtrl');


router.get('/users', getAllUsers);
router.get('/users/:id', getOneUser);


module.exports = router;
