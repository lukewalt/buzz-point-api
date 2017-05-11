'use strict';

const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.json({
    "title": "BuzzPoint API",
    "root": "/api/v1/",
    "----------": "---------------------",
    "GET_METHOD": "GET",
    "all-users": "/users",
    "one-user": "/users/:id",
    "all-posts": "/posts",
    "one-post": "/posts/:id",
    "all-post-by-zone": "/posts/zones/:zone",
    "all-post-by-positive": "/posts/positives/:positive",
    "all-post-by-zipcode": "/posts/zipcode/:zipcode",
    "all-tags": "/tags",
    "all-postTags": '/post_tags',
    "all-by-tagId": '/post_tags/tags/:tag_id',
    "all-by-postId": '/post_tags/post/:post_id',
    "----------": "---------------------",
    "POST_METHOD": "POST",
    "create-user": "/users",
    "create-post": "/posts",
    "----------": "---------------------",
    "DELETE_METHOD": "DELETE"
    "remove-user": "/users/:id",
    "remove-post": "/posts/:id",
    "----------": "---------------------",
    "PATCH_METHOD": "PATCH",
    "edit-user": "/users/:id",
    "edit-post": "/posts",
  });
});

router.use(require('./userRt'))
router.use(require('./tagRt'))
router.use(require('./postRt'))
router.use(require('./postTagRt'))


module.exports = router;
