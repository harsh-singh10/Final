import express from 'express';
const router = express.Router();


import { signup , login } from '../controllers/admin.controller.js';

router.get('/signup' , signup)



router.get('/login' , login)

export default router;