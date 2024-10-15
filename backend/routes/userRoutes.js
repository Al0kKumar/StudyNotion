import express from 'express'

import userController from '../controllers/userController.js'

const {Signup, Login} = userController

const router = express.Router()

router.post('/signup',Signup)

router.post('/login', Login)

export default router; 