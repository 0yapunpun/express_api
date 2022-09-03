const express = require('express');
const router = express.Router();

const apiController = require('./controllers/api.controller');
const usersController = require('./controllers/users.controller');

router.get('/', apiController.indexRoute);

// ** Users
router.get('/user/getAll', usersController.getUsers);
router.get('/user/getByName/:name', usersController.getUserByName);
router.get('/user/deleteUser/:id', usersController.deleteUser);
router.post('/user/login', usersController.loginUser);
router.post('/user/create', usersController.createUser);
router.post('/user/update', usersController.updateUser);

module.exports = router;