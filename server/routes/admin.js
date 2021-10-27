import express from 'express';

import { signinadmin, signupadmin, updateAdmin } from '../controllers/admin.js';

const router = express.Router();

router.post('/signinadmin', signinadmin);
router.post('/signupadmin', signupadmin);
router.patch('/id:', updateAdmin);

export default router;
