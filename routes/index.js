'use strict';

const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.json({
    "title": "BuzzPoint API",
    "root": "/buzzpoint/api/",
    "users": "/users"

  });
});

router.use(require('./userRt'))


module.exports = router;
