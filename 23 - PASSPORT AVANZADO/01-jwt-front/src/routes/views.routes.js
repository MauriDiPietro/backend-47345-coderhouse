import { Router } from 'express'

const router = Router();

router.get('/', (req, res) => {
    res.render('jwt')
});

export default router