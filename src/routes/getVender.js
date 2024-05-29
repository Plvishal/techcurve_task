import express from 'express';
import { getVender } from '../controller/getVen.js';
const router = express.Router();
router.route('/getVender').post(getVender);

export default router;
