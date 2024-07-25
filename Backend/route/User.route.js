import express from 'express';
const router = express.Router();
import {signUp} from '../Controller/User.controller.js';
import { login } from '../Controller/User.controller.js';

router.post('/signup', signUp);
router.post('/login', login)

export default router;
