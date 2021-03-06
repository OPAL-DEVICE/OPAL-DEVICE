'use strict'; 

var express = require('express');
var controller = require('./userController');

var router = express.Router();

router.get('/', controller.findAll);
//router.post('/', controller.createUser);
router.get('/:id', controller.findUser); 

module.exports = router; 