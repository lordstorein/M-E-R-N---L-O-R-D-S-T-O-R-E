const express = require('express');
const router = express.Router();
const controller  = require('../controller/auth-controllers');
const signupSchema = require('../validators/auth-validator')
const validate = require('../middlewares/validate-middleware')
const authMiddleware = require('../middlewares/auth-middleware')

router.route('/').get(controller.home);

router.route('/signup').post( validate(signupSchema), controller.signup);

router.route('/login').post( controller.login);

router.route('/getkey').get(controller.getKey)

module.exports = router;