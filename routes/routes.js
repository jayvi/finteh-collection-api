const express = require('express');
const {
  getAll,
  getSingleUser,
  deleteUser,
  createUser,
  pingAction
} = require('../controllers/api');
const router = express.Router();


router.route('/').get(getAll);

//router.route('/:id').get(getSingleUser);

router.route('/ping').get(pingAction);

router.route('/create').post(createUser);

// router.route('/:id').delete(deleteUser);

module.exports = router;
