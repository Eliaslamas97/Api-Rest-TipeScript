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

router.post('/', (req, res) => {
    const { date, weather, visibility, comments } = req.body;

    const newDiaryEntry = diaryServices.addDiary({
        date,
        weather,
        visibility,
        comments
    })

    res.json(newDiaryEntry)

    // try{
    //     const newDiaryEntry = toNewDiaryEntry(req.body)
    
    //     const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)
    
    //         res.json(addedDiaryEntry)
    //     } catch(e){
    //         res.status(400).send(e)
    //     } 
})

export default router;
