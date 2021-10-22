import express from 'express';
// imported controller functions
import {
  getWorkout,
  createWorkout,
  deleteWorkout,
} from '../controllers/workout.js';

const router = express.Router();

router.get('/', getWorkout);
router.post('/', createWorkout);
router.delete('/', deleteWorkout);

export default router;
