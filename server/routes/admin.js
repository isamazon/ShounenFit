import express from 'express';

import { signinadmin, signupadmin } from '../controllers/admin.js';

const router = express.Router();

router.post('/signinadmin', signinadmin);
router.post('/signupadmin', signupadmin);

export default router;
