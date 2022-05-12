import {Router} from 'express'
const router = Router()

router.get('/products/:id', (req, res) => {
    res.status(200).json()
})

export default router