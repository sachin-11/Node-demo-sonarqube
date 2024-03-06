const router = require('express').Router(),
  testController = require('./test');

router.use('/', testController);

module.exports = router;

