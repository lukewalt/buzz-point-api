'use strict';

const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.json({
    "title": "BuzzPoint API",
    "root": "/buzzpoint/api/",
    "all-users": "/users",
    "one-user": "/users/:id"

  });
});

router.use(require('./userRt'))


module.exports = router;
