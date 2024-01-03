import { Router } from 'express'
import {save, getAll} from '../controllers/controllers.products.js'

const router = Router()

router.post('/add', save);
router.get('/list', getAll);

export default router
