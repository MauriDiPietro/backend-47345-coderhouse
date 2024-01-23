import { Router } from 'express';
import * as controller from '../controllers/ticket.controller.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = Router();

router.post('/cart/:cartId', verifyToken, controller.generateTicket)

export default router;





