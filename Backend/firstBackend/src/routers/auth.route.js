import express from 'express';

import { login, register, logout, deleteuser, AllUser } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/logout", logout);
router.delete("/", deleteuser)
router.get("/", AllUser)

export default router;