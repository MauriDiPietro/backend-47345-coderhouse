import { Router } from 'express';

const router = Router();

router.get('/new-pass', (req, res) => {
    res.render('new-pass');
})

export default router;