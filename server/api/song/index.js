'use strict';

var express = require('express');
var controller = require('./song.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id', auth.isAuthenticated(), controller.update);
router.patch('/:id', controller.update);
router.delete('/:id/:userId', controller.destroy);

router.get('/standards', controller.standards);

module.exports = router;