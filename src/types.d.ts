export type subjects = 
    'Indonesian' |
    'English' | 
    'Sundanese' | 
    'Civic Education' | 
    'Religion' | 
    'Biology' | 
    'Physycs' | 
    'Social' | 
    'Sports physical Education and health' |
    'arts and crafts'

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const subjects: subjects[] = [
    'Indonesian',
    'English', 
    'Sundanese', 
    'Civic Education', 
    'Religion', 
    'Biology', 
    'Physycs', 
    'Social', 
    'Sports physical Education and health',
    'arts and crafts'
]

export interface homework {
    homeworkId: string
    name: string
    subject: subjects
    assigned_on: number
    due_on: number
    isDone: boolean
}