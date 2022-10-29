import { DiaryEntry, newDiaryEntry, NonSensitiveInfoDiaryEntry } from "../types";
const diaryData = require("./diaries.json")

const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

export const getEntries = (): DiaryEntry[] => diaries;

export const findById = (id: number): DiaryEntry | undefined => {
    const entry = diaries.find(d => d.id === id)
    return entry;
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility, comments }) => {
        return {
            id,
            date,
            weather,
            visibility,
            comments
        }
    })
}

export const addDiary = (newDiaryEntry: newDiaryEntry): DiaryEntry => {
    const newDiary = {
        id: Math.max( ...diaries.map(d => d.id)) + 1,
        ... newDiaryEntry
    }

diaries.push(newDiary)
return newDiary
};