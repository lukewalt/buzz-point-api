'use strict';

const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.json({
    "title": "BuzzPoint API",
    "root": "https://buzzpoint.herokuapp.com/",
    "version": "/api/v1",
    "GET": "GET",
    "all-users": "/users",
    "one-user": "/users/:id",
    "all-posts": "/posts",
    "all-post-by-user": "/posts/user/:user_id",
    "all-post-by-zone": "/posts/zones/:zone",
    "all-post-by-positive": "/posts/positives/:positive",
    "all-post-by-zipcode": "/posts/zipcode/:zipcode",
    "one-post": "/posts/:id",
    "all-tags": "/tags",
    "one-tags": "/tags/:tag_name",
    "all-postTags": '/post_tags',
    "all-by-tagId": '/post_tags/tags/:tag_id',
    "all-by-postId": '/post_tags/post/:post_id',
    "POST": "POST",
    "create-user": "/users",
    "create-post": "/posts",
    "DELETE": "DELETE",
    "remove-user": "/users/:id",
    "remove-post": "/posts/:id",
    "PATCH": "PATCH",
    "edit-user": "/users/:id",
    "edit-post": "/posts",
  });
});

router.use(require('./userRt'))
router.use(require('./tagRt'))
router.use(require('./postRt'))
router.use(require('./postTagRt'))


module.exports = router;
