import  express  from "express";
import * as diaryServices from  '../services/diaryService'

const router = express.Router()

router.get('/', (_req, res) => {
    res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
    const diary = diaryServices.findById(+req.params.id);
    res.send(diary)
})

router.post('/', (_req, res) => {
    res.send('Saving a diary')
})

export default router;
