'use strict';

const { Router } = require('express');

const router = Router();

const { getAllUsers, getOneUser, createUser, removeUser, updateUser } = require('../controllers/userCtrl');


router.get('/users', getAllUsers);
router.get('/users/:id', getOneUser);
router.post('/users', createUser);
router.delete('/users/:id', removeUser);
router.patch('/users', updateUser);


module.exports = router;
