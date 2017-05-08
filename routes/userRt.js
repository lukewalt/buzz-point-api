'use strict';

const { Router } = require('express');

const router = Router();

const { getAllUsers, getOneUser, createUser } = require('../controllers/userCtrl');


router.get('/users', getAllUsers);
router.get('/users/:id', getOneUser);
router.post('/users/', createUser);


module.exports = router;
