import express from 'express';
import { createTask, deleteTask, getAllTasks, getAllTasksByUser, getTask, updateTask } from '../controllers/task.controller.js';
const router = express.Router();

router.get('/', getAllTasks);
router.get('/user/:id', getAllTasksByUser);
router.get('/:id', getTask);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;