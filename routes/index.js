'use strict';

const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.json({
    "title": "BuzzPoint API",
    "root": "/buzzpoint/api/",
    "all-users": "/users",
    "one-user": "/users/:id",
    "create-user": "/users",
    "remove-user": "/users/:id",
    "edit-user": "/users/:id",
    "all-tags": "/tags",
    "all-posts": "/posts",
    "one-post": "/posts/:id",
    "create-post": "/posts",
    "remove-post": "/posts/:id",
    "edit-post": "/posts",
  });
});

router.use(require('./userRt'))
router.use(require('./tagRt'))
router.use(require('./postRt'))


module.exports = router;
