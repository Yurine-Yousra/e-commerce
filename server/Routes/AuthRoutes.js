import express from 'express'
const router = express.Router()
import Register from '../controllers/AuthControllers/Register.js'
import Login from '../controllers/AuthControllers/Login.js'
import AuthToken from '../Middlewares/AuthToken.js'

router.post('/Register'  , Register)
router.post('/Login'  , Login)

export default router